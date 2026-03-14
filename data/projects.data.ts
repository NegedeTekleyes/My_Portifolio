import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Self Learning Platform",
    category: "Web Application",
    thumbnail: "/images/projects/HomePage.png",
    images: [
      "/images/projects/HomePage.png",
      "/images/projects/StudSignup.png",
      "/images/projects/StudentHome.png",
    ],
    description:
      "A full-stack e-learning platform designed to help students and instructors connect in an online learning environment. Instructors can upload courses and learning materials, while students can register and access lessons from anywhere through a responsive web interface.",
    client: "Personal Project",
    industry: "Education Technology",
    technologies: "Next.js, NestJS, PostgreSQL, Prisma, Tailwind CSS",
    date: "2024",
    url: "https://e-self-lerning-nbv9.vercel.app/"
  },

  {
    id: 2,
    title: "ShegaReport – Community Issue Reporting System",
    category: "Web Application",
    thumbnail: "/images/projects/AdminDashbord.png",
    images: [
      "/images/projects/AdminDashbord.png",
      "/images/projects/AdminLogin.png",
      "/images/projects/AdminComplaint.png"
    ],
    description:
      "ShegaReport is a full-stack web and mobile platform designed to help citizens report infrastructure issues such as water problems, road damage, or sanitation concerns. The system includes an admin dashboard where government staff can manage users, assign technicians, and track issue resolution to improve service delivery.",
    client: "Debre Berhan Water Supply & Sanitation",
    industry: "Government / Public Services",
    technologies: "Next.js, NestJS, PostgreSQL, React Native",
    date: "2025",
    url: "https://example.com"
  },

  {
    id: 3,
    title: "Amazon Clone E-commerce Website",
    category: "Web Application",
    thumbnail: "/images/projects/amazone.png",
    images: [
      "/images/projects/amazone.png",
      "/images/projects/amazone.png"
    ],
    description:
      "A full-stack Amazon-inspired e-commerce application where users can browse products, add items to a shopping cart, and complete purchases. The project demonstrates core e-commerce functionality including product management, authentication, and a responsive user interface.",
    client: "Personal Project",
    industry: "E-commerce",
    technologies: "React, Node.js, Express, MongoDB",
    date: "2023",
    url: "https://amazone-website-negede.netlify.app/"
  }
];