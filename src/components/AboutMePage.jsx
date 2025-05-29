import React from 'react';

export default function AboutMePage() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex gap-8">
          <div className="w-32 h-32 bg-gray-300 flex-shrink-0"></div>

          <div className="flex-1">
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="h-8"></div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Random Trivia About Me:</h3>
          <ul className="list-disc ml-6">
            <li>Fun fact 1</li>
            <li>Fun fact 2</li>
            <li>Fun fact 3</li>
            <li>Fun fact 4</li>
            <li>Fun fact 5</li>
            <li>Fun fact 6</li>
            <li>Fun fact 7</li>
            <li>Fun fact 8</li>
            <li>Fun fact 9</li>
            <li>Fun fact 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 