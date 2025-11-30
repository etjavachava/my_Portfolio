type category="Web development" | "Photography" | "AI Chatbots";
import type { CardComponentProps } from "./cardComponent";


export const category= ['All Projects', 'Web Development', 'Photography', 'AI Chatbots'];

const projects:CardComponentProps[]=[
{
    id: 1,
    title: "Web Development",
    category: 'Web Development',
    imageSrc: "./images/webdev2.jpg",
    description: "Modern, responsive websites built with HTML, CSS, JavaScript & React. From landing pages to full-stack applications.",
    stack:['html','css','typescript','react']
  },
  {
    id: 2,
    title: "Lady Portrait",
    category: "Photography",
    imageSrc: "./images/camera lens.jpg",
   description: "An emotive portrait study emphasizing composition and lighting to highlight the subject's unique character.",
    stack: ['Canon 60D', 'Lightroom']
  },
  {
    id: 3,
    title: "Whatsapp Chatbots",
    category: "AI Chatbots", 
    imageSrc: "./images/chatbot.jpg",
    description: "Smart WhatsApp automation for businesses. Handle customer inquiries, take orders, and send updates directly on WhatsApp.",
       stack:['html','css','typescript','react']
  },
  {
    id: 4,
    title: "Weather App",
    category: 'Web Development',
    imageSrc: "./images/weather app.jpg",
    description: "Modern, responsive websites built with HTML, CSS, JavaScript & React. From landing pages to full-stack applications.",
    stack:['html','css','typescript','react','express.js','Mongoose']
  }
];

export default projects