"use client";

import dynamic from "next/dynamic";
import WhoAmI from "../components/WhoAmI/WhoAmI";
import Skills from "../components/Skills/Skills";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Certificates from "../components/Certificates/Certificates";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import ChatWidget from "../components/ChatWidget/ChatWidget";

const VideoHero = dynamic(
  () => import("../components/VideoHero/VideoHero"),
  { ssr: false }
);

const CinematicLayer = dynamic(
  () => import("../components/CinematicLayer/CinematicLayer"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <CinematicLayer />
      <VideoHero />
      <div 
        id="next-section" 
        style={{
          background: "linear-gradient(180deg, #050505 0%, #0a0a0a 100%)",
          paddingBottom: "8rem"
        }}
      >
        <WhoAmI />
        <Skills />
        <WorkExperience />
        <Certificates />
        <Projects />
        <Contact />
      </div>
      <ChatWidget />
    </main>
  );
}
