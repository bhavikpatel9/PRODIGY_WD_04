import frontendIcon from '../assets/images/frontend-icon.png';
import backendIcon from '../assets/images/backend-icon.png';
import toolsIcon from '../assets/images/tools-icon.png';
import softskillIcon from '../assets/images/softskill-icon.png';

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const SKILLS = [
    {
      title: "Frontend",
      "icon": frontendIcon,
      "skills": [
        {
          "skill": "HTML5",
          "percentage": "80%"
        },
        {
          "skill": "CSS3",
          "percentage": "70%"
        },
        {
          "skill": "JavaScript",
          "percentage": "75%"
        },
        {
          "skill": "React.js",
          "percentage": "80%"
        }
      ]
    },
    {
      "title": "Backend",
      "icon": backendIcon,
      "skills": [
        {
          "skill": "Node.js",
          "percentage": "70%"
        },
        {
          "skill": "Express.js",
          "percentage": "65%"
        },
        {
          "skill": "MongoDB",
          "percentage": "60%"
        }
      ]
    },
    {
      "title": "Tools",
      "icon": toolsIcon,
      "skills": [
        {
          "skill": "Git & GitHub",
          "percentage": "85%"
        },
        {
          "skill": "Visual Studio Code",
          "percentage": "75%"
        },
        {
          "skill": "Postman",
          "percentage": "60%"
        },
        {
          "skill": "Responsive Design",
          "percentage": "70%"
        }
      ]
    },
    {
      "title": "Soft Skills",
      "icon": softskillIcon,
      "skills": [
        {
          "skill": "Problem-solving",
          "percentage": "80%"
        },
        {
          "skill": "Collaboration",
          "percentage": "85%"
        },
        {
          "skill": "Attention to Detail",
          "percentage": "75%"
        }
      ]
    }
  ];


export const PROJECTS = [
  {
    title: "News Web Application",
    image: project1,
    description:
      "A comprehensive news website that allows users to view news articles based on selected categories. Features include real-time news updates and category filters.",
    technologies: ["HTML", "CSS", "React"],
    gitLink: "https://github.com/bhavikpatel9/NewsApp"
  },
  {
    title: "Footwear Web Application",
    image: project2,
    description:
      "An e-commerce website dedicated to selling footwear, offering searching and sorting functionality. Users can sort items based on price, and category.",
    technologies: ["HTML", "CSS", "React"],
    gitLink: "https://github.com/bhavikpatel9/footware-react-webApp-sorting-searching-functionality"
  },
  {
    title: "TextUtils Web Application",
    image: project4,
    description:
      "TextUtils is a versatile web application that provides users with various text manipulation tools. Users can convert text to uppercase, lowercase, capitalize each word, and count the number of words and characters.",
    technologies: ["HTML", "Bootstrap", "React"],
    gitLink: "https://github.com/bhavikpatel9/my-first-react-app"
  },
  {
    title: "To-Do List Web Application",
    image: project3,
    description:
      "A user-friendly To-Do List application designed to help users manage their tasks efficiently. It allows users to add new tasks, update existing ones, and delete tasks they have completed.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    gitLink: "https://github.com/bhavikpatel9/Todo-list"
  },
  
];

