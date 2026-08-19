import { FaJava, FaPython, FaReact, FaMedal, FaChartLine, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"
import { FaHeartPulse } from "react-icons/fa6"
import { SiJavascript, SiTypescript, SiKotlin, SiNextdotjs, SiGraphql, SiFirebase, SiSplunk } from "react-icons/si"

export const featuredProject = {
  title: "NextHire",
  badge: "1st place, FidHacks",
  description:
    "A women's empowerment journaling platform with audio recording, built with a 3-person team in 24 hours at Fidelity's hackathon. This is actually how I ended up interning there.",
  tech: ["Next.js", "React"],
  github: "https://github.com/Erika-Sal/fidhacksproject",
}

export const otherProjects = [
  {
    id: "roundup",
    title: "RoundUp",
    subtitle: "Best design, UT's Women in Computer Science Hackathon 2025",
    description: "A peer-powered task exchange and student connection platform, built with a 4-person team.",
    tech: ["TypeScript", "Firebase"],
    icon: FaMedal,
    github: "https://github.com/Erika-Sal/RoundUp",
  },
  {
    id: "wello",
    title: "Wello",
    subtitle: "OCR and barcode scanning for food-drug interactions",
    description:
      "An app that scans food and medication labels to flag food-drug interaction warnings and surface personalized nutrition insights.",
    tech: ["OCR", "Barcode Scanning"],
    icon: FaHeartPulse,
    github: "https://github.com/wellitslucas/Wello",
  },
  {
    id: "basketball-model",
    title: "Basketball Analytics Model",
    subtitle: "Linear regression on NBA, ABA, and WNBA data",
    description:
      "A linear regression model built with scikit-learn to analyze player and team performance trends across NBA, ABA, and WNBA history.",
    tech: ["Python", "scikit-learn"],
    icon: FaChartLine,
    github: null,
  },
]

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Fidelity Investments",
    location: "Westlake, TX",
    dates: "June 2026 – August 2026",
    impact:
      "Built an internal AI agent (Python, LangChain, YAML, Splunk SPL) that automates natural-language-to-Splunk-query generation, cutting query dev time by 80%.",
  },
  {
    role: "Software Engineer Intern",
    company: "Thrivent",
    location: "Remote",
    dates: "June 2025 – August 2025",
    impact:
      "Designed a component-driven UI for a client-facing dashboard serving 2.3 million clients; built a dynamic CTA banner with GraphQL and JavaScript.",
  },
  {
    role: "Campus Manager",
    company: "iCode Cypress",
    location: "Cypress, TX",
    dates: "August 2022 – August 2024",
    impact:
      "Designed and led lessons in HTML, CSS, JavaScript, and Python; managed 15+ employees; authored onboarding training resources.",
  },
]

export const skills = [
  { label: "Java", Icon: FaJava },
  { label: "Python", Icon: FaPython },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Kotlin", Icon: SiKotlin },
  { label: "React", Icon: FaReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "GraphQL", Icon: SiGraphql },
  { label: "Firebase", Icon: SiFirebase },
  { label: "Splunk SPL", Icon: SiSplunk },
]

export const galleryPhotos = [
  { src: "/hackathon.JPG", rotate: -6 },
  { src: "/ktp1.jpg", rotate: 4 },
  { src: "/Erika4.jpg", rotate: -2 },
  { src: "/friends.jpg", rotate: 7 },
  { src: "/Erika7.jpeg", rotate: -4 },
  { src: "/ktp3.JPG", rotate: -6 },
  { src: "/koin1.jpg", rotate: 4 },
  { src: "/ktp4.JPG", rotate: -2 },
]

export const contactLinks = [
  { Icon: FaGithub, href: "https://github.com/Erika-Sal", label: "GitHub" },
  { Icon: FaEnvelope, href: "mailto:erikasalvador@utexas.edu", label: "Email" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/erika-salvador-cs", label: "LinkedIn" },
]
