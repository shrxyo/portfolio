export default function ContentPanel({ activeTab }) {
    const contentMap = {
      about: "Hi! I'm Shreya, a developer and designer...",
      experience: "Experience: Internship at Metropolis, etc.",
      projects: "Projects: Emotional Intelligence Bot, etc.",
      skills: "Skills: Python, React, Hugging Face, etc.",
      contact: "Contact me: shreya@email.com",
    };
  
    return (
      <div className="bg-gray-50 p-4 border rounded shadow-inner text-sm text-black">
        {contentMap[activeTab]}
      </div>
    );
  }