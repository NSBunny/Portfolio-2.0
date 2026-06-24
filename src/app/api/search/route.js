import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { query, projects } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
You are a Semantic Search Engine for a developer's portfolio.
Here is the list of projects the developer has built:
${JSON.stringify(projects, null, 2)}

The user has searched for: "${query}"

Return a JSON array of the "title" of the projects that best match the user's search query.
If the query is broad (e.g. "Python"), return all projects that use Python.
If the query is specific, return only the most relevant ones.
If no projects match, return an empty array [].

IMPORTANT: Only return the raw JSON array of strings. Do not include markdown blocks like \`\`\`json.
    `;
    
    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();
    
    // Clean markdown if it was included accidentally
    if (text.startsWith("\`\`\`json")) {
      text = text.replace(/^\`\`\`json/, "").replace(/\`\`\`$/, "").trim();
    } else if (text.startsWith("\`\`\`")) {
      text = text.replace(/^\`\`\`/, "").replace(/\`\`\`$/, "").trim();
    }
    
    const matchedTitles = JSON.parse(text);
    
    return Response.json({ matches: matchedTitles });
  } catch (error) {
    console.error("Search API Error:", error);
    return Response.json({ error: "Failed to perform semantic search" }, { status: 500 });
  }
}
