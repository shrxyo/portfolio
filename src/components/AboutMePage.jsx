import React from 'react';

export default function AboutMePage() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex gap-8">
          <div className="w-32 h-32 bg-gray-300 flex-shrink-0"></div>

          <div className="flex-1">
            <p className="text-base text-justify">
            Hi, i'm Shreya Balakrishna! I'm a computer science grad student at the university of massachusetts amherst. I mainly work with natural language processing and frontend development. My experience spans traditional ML algorithms, nlp tasks like sentiment analysis, real-time vision systems, dialog agents with LLMs and retrieval, and frontend tools like react, tailwind, and django.
            </p>
          </div>
        </div>

        
        <div className="font-semibold mb-1 underline">what I'm into:</div>
        <p className="text-base text-justify">
        I love working on natural language systems powered by retrieval and generative techniques like dialogue agents, assistants, and applied language interfaces. I'm also a designer, so I enjoy combining design with code and this portfolio is one example of that! It's inspired by Windows XP, but with my own design twists like custom fonts and layout interactions. I'm also a big video game nerd and have recently been exploring how games are made.
        </p>

        <div className="font-semibold mb-1 underline mt-6">what I'm working on right now:</div>
        <p className="text-base text-justify">
        <ul className="list-disc">
            <li>Learning how LLMs can be used to build domain-specific dialogue agents.</li>
            <li>Learning Java by building a 2D game (also understanding the basics of gamedev this way!).</li>
            <li>working on this portfolio :)</li>
          </ul>
        </p>
        
        <div className="font-semibold mb-1 underline mt-6">let's connect!</div>
        <p className="text-base text-justify">
        This summer, I plan to work on some fun and meaningful projects around LLMs and their applications. If you want to collaborate, brainstorm, or even team up for a hackathon, feel free to shoot me an email. I'd love to chat :)
        </p>
        
     
        
        

        
      </div>
    </div>
  );
} 