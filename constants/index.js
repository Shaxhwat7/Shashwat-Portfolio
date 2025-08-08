import project3 from "@/public/project3.webp";
import project1 from "@/public/ProjectA.jpg";
import project2 from "@/public/ProjectB.jpg";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// constants/navigation.js
export const NAV_ITEMS = [
  { label: "About", href: "/Me" },
  { label: "Work", href: "/#works" },
  { label: "Skills", href: "/#skills" },
  // { href: "#about", label: "About" },
  // { href: "#highlights", label: "Highlights" },
  // { href: "#works", label: "Works" },
  // { href: "#skills", label: "Skills" },
  // { href: "#contact", label: "Contact" },
];

export const BRAND_NAME = "Shaswat";

export const PROJECTS = [
  {
    name: "Dev-Talk",
    image: project1,
    href: "https://github.com/Shaxhwat7/Dev-Talk/",
  },
  {
    name: "Math Rush",
    image: project2 ,
    href: "https://github.com/Shaxhwat7/Math-Rush",
  },
  // {
  //   name: "Project3",
  //   image: project3,
  //   href: "https://www.google.com/",
  // },
  // {
  //   name: "project4",
  //   image: project4,
  //   href: "https://www.google.com/",
  // },
  // {
  //   name: "Project5",
  //   image: project5,
  //   href: "https://www.google.com/",
  // },
  // {
  //   name: "project6",
  //   image: project6,
  //   href: "https://www.google.com/",
  // },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    label: "GitHub",
    href: "https://github.com/Shaxhwat7",
    icon: <FaGithub className="text-2xl text-white" />,
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shashwatsharma7/",
    icon: <FaLinkedinIn className="text-2xl text-white" />,
  },
  {
  id: 3,
  label: "LeetCode",
  href: "https://leetcode.com/Shaxhwat/", 
  icon: (
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg"
      alt="LeetCode"
      className="w-6 h-6 invert" 
    />
  ),
},
  
  {
      id: 4,
    label: "Email",
    href: "mailto:sharmashashwat929@gmail.com",
    icon: <MdEmail className="text-2xl text-white" />,
  },
  
{
    id: 5,
    label: "Twitter",
    href: "https://x.com/ShashwatWasd?t=xDr-GfuELlel9qJUqtJHqQ&s=08",
    icon: <FaXTwitter className="text-2xl text-white" />,
  },
];
