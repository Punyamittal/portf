import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // SustainLabs project
    id: "sustainlabs",
    category: "Climate & Sustainability",
    title: "SustainLabs - Climate-Focused Web Platform",
    src: "/assets/sust.png",
    screenshots: ["sust.png"],
    live: "https://sustainlabs.netlify.app/",
    github: "https://github.com/Punya-90909/SustainLabs",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            SustainLabs is a comprehensive climate-focused web platform that analyzes sustainability metrics 
            and visualizes environmental impact using real-time data and interactive dashboards. The platform 
            provides actionable insights for organizations and individuals looking to track and improve their 
            environmental footprint.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🌱 Key Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>📊 Real-time Analytics:</strong> Live sustainability metrics and environmental impact tracking
            </div>
            <div className="font-mono text-sm">
              <strong>📈 Interactive Dashboards:</strong> Dynamic visualizations of environmental data
            </div>
            <div className="font-mono text-sm">
              <strong>🌍 Carbon Footprint Calculator:</strong> Comprehensive environmental impact assessment
            </div>
            <div className="font-mono text-sm">
              <strong>📱 Responsive Design:</strong> Seamless experience across all devices
            </div>
            <div className="font-mono text-sm">
              <strong>🔔 Progress Tracking:</strong> Monitor sustainability goals and achievements
            </div>
            <div className="font-mono text-sm">
              <strong>📊 Data Visualization:</strong> Advanced charts and graphs for impact analysis
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🛠️ Technical Implementation</TypographyH3>
          <p className="font-mono mb-4">
            Built with Next.js and TypeScript for optimal performance, featuring real-time data integration, 
            interactive dashboards using Chart.js, and a MongoDB backend for scalable data management. 
            The platform demonstrates modern web development practices with a focus on sustainability and user experience.
          </p>
        </div>
      );
    },
  },
  { // VoiceIT Website project
    id: "voiceit",
    category: "Full Stack Web Application",
    title: "VoiceIT Website - Official Platform",
    src: "/assets/voiceit.png",
    screenshots: ["voiceit.png"],
    live: "https://thunderous-raindrop-49e9ac.netlify.app/",
    github: "https://github.com/Punya-90909/VoiceIT-Website",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Led the complete frontend and backend development for VoiceIT&apos;s official platform, featuring 
            dynamic forms, resource sharing capabilities, and comprehensive member management tools. 
            The platform serves as the central hub for VoiceIT&apos;s community and operations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🎯 Core Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>📝 Dynamic Forms:</strong> Flexible form builder with real-time validation
            </div>
            <div className="font-mono text-sm">
              <strong>📚 Resource Sharing:</strong> Centralized platform for knowledge exchange
            </div>
            <div className="font-mono text-sm">
              <strong>👥 Member Management:</strong> Comprehensive user and role management system
            </div>
            <div className="font-mono text-sm">
              <strong>🔐 Authentication:</strong> Secure login and user session management
            </div>
            <div className="font-mono text-sm">
              <strong>📱 Responsive Design:</strong> Optimized for all devices and screen sizes
            </div>
            <div className="font-mono text-sm">
              <strong>⚡ Real-time Updates:</strong> Live data synchronization across the platform
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🛠️ Technical Stack</TypographyH3>
          <p className="font-mono mb-4">
            Developed using Next.js for the frontend with Tailwind CSS for styling, Firebase for backend 
            services including authentication and database, and Node.js for server-side operations. 
            The platform features a modern, scalable architecture designed for growth and maintainability.
          </p>
        </div>
      );
    },
  },
  { // Annam AI project
    id: "annamai",
    category: "AI & Agriculture",
    title: "Annam AI - CRISPR Crop Modification Assistant",
    src: "/assets/annam.png",
    screenshots: ["annam.png"],
    live: "https://annam-ai.vercel.app/",
    github: "https://github.com/Punya-90909/Annam-AI",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.openai, PROJECT_SKILLS.node, PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Annam AI is an innovative AI-driven assistant that guides farmers through CRISPR-based crop 
            modification processes. The platform integrates gene data analysis, machine learning feasibility 
            checks, and provides natural language explanations to make advanced agricultural biotechnology 
            accessible to farmers worldwide.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🧬 Advanced Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>🧬 Gene Data Integration:</strong> Comprehensive genetic database and analysis tools
            </div>
            <div className="font-mono text-sm">
              <strong>🤖 ML Feasibility Checks:</strong> AI-powered crop modification recommendations
            </div>
            <div className="font-mono text-sm">
              <strong>💬 Natural Language Processing:</strong> Conversational AI for farmer guidance
            </div>
            <div className="font-mono text-sm">
              <strong>📊 Risk Assessment:</strong> Detailed analysis of modification outcomes
            </div>
            <div className="font-mono text-sm">
              <strong>🌾 Crop-Specific Guidance:</strong> Tailored recommendations for different crops
            </div>
            <div className="font-mono text-sm">
              <strong>📱 Mobile-First Design:</strong> Optimized for field use on mobile devices
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🛠️ Technical Innovation</TypographyH3>
          <p className="font-mono mb-4">
            Built with Next.js frontend, OpenAI integration for natural language processing, Python backend 
            for ML models, and comprehensive gene databases. The platform combines cutting-edge AI technology 
            with agricultural expertise to democratize access to CRISPR technology for sustainable farming.
          </p>
        </div>
      );
    },
  },
  { // HackHub 25 project
    id: "hackhub25",
    category: "Hackathon Platform",
    title: "HackHub 25 - Hackathon Website",
    src: "/assets/a1.png",
    screenshots: ["a1.png"],
    live: "https://hackhubx.netlify.app/",
    github: "https://github.com/Punya-90909/HackHub-25",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            HackHub 25 is a comprehensive hackathon platform designed to facilitate seamless event 
            management, participant registration, and project submissions. The platform provides an 
            engaging experience for organizers and participants alike, with real-time updates and 
            interactive features.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🚀 Platform Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>📝 Event Registration:</strong> Streamlined participant sign-up process
            </div>
            <div className="font-mono text-sm">
              <strong>📊 Project Submissions:</strong> Easy project upload and management system
            </div>
            <div className="font-mono text-sm">
              <strong>⏰ Real-time Countdown:</strong> Live event timing and schedule tracking
            </div>
            <div className="font-mono text-sm">
              <strong>👥 Team Management:</strong> Collaborative team formation and management
            </div>
            <div className="font-mono text-sm">
              <strong>🏆 Judging System:</strong> Integrated project evaluation and scoring
            </div>
            <div className="font-mono text-sm">
              <strong>📱 Live Updates:</strong> Real-time notifications and announcements
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🛠️ Technical Excellence</TypographyH3>
          <p className="font-mono mb-4">
            Developed with Next.js for optimal performance, Firebase for real-time data management, 
            and Tailwind CSS for responsive design. The platform features real-time updates, secure 
            authentication, and scalable architecture to handle large-scale hackathon events.
          </p>
        </div>
      );
    },
  },
  { // My Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio - 3D Interactive Portfolio",
    src: "/assets/portfolio.png",
    screenshots: ["portfolio.png"],
    live: "https://www.punyamittal.xyz/",
    github: "https://github.com/Punya-90909/3D-interactive-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the most innovative way possible. 
            This 3D interactive portfolio showcases my skills and projects through cutting-edge web technologies 
            and immersive user experiences.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🎨 Interactive 3D Elements</TypographyH3>
          <p className="font-mono mb-2">
            Experience the 3D keyboard modal that brings skills to life! This interactive keyboard is rendered 
            in 3D on a webpage, and pressing each keycap reveals a skill in an engaging way. It&apos;s like typing, 
            but transformed into an artistic experience.
          </p>
          
          <TypographyH3 className="my-4 mt-8">🌌 Space Theme Design</TypographyH3>
          <p className="font-mono mb-2">
            Dark background with floating particles creates an out-of-this-world atmosphere that enhances 
            the user experience and makes navigation feel seamless and engaging.
          </p>

          <TypographyH3 className="my-4 mt-8">📱 Responsive & Modern</TypographyH3>
          <p className="font-mono mb-2">
            Built with the latest web technologies including Next.js, TypeScript, and Framer Motion for 
            smooth animations. The portfolio features a responsive design that works perfectly across all devices.
          </p>
          
          <p className="font-mono mb-2 mt-8 text-center">
            This isn&apos;t just a portfolio — it&apos;s a complete digital experience that showcases modern web development 
            at its finest.
          </p>
        </div>
      );
    },
  },
];
export default projects;
