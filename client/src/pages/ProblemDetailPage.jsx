import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../components/ui/CodeEditor'; 

export default function ProblemDetailPage() {
  const { slug } = useParams();

  // --- Placeholder Data ---
  const problem = {
    title: 'Two Sum',
    description: "Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.\n\nYou may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.\n\nYou can return the answer in any order.",
    examples: [
      {
        id: 1,
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        id: 2,
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: '',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    starterCode: `function twoSum(nums, target) {\n  // Write your code here\n};`
  };

  const [code, setCode] = useState(problem.starterCode);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-8rem)]">
      
      {/* ---------- Left Column: Problem Description ---------- */}
      <div className="lg:w-1/2 overflow-y-auto bg-secondary p-6 rounded-lg border border-border">
        <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>
        
        {/* Description */}
        <div 
          className="text-text-secondary mb-6 prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: problem.description.replace(/\n/g, '<br>') }} 
        />
        
        {/* Examples */}
        <div className="space-y-4 mb-6">
          {problem.examples.map((ex) => (
            <div key={ex.id} className="bg-primary p-4 rounded-md border border-border">
              <p className="font-medium">Example {ex.id}:</p>
              <div className="font-mono bg-border/20 text-text-secondary p-2 mt-2 rounded">
                <p><strong>Input:</strong> {ex.input}</p>
                <p><strong>Output:</strong> {ex.output}</p>
                {ex.explanation && <p><strong>Explanation:</strong> {ex.explanation}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Constraints */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Constraints:</h3>
          <ul className="list-disc list-inside text-text-secondary space-y-1">
            {problem.constraints.map((con, i) => (
              <li key={i}><code className="font-mono text-sm">{con}</code></li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Right Column: Code Editor ---------- */}
      <div className="lg:w-1/2 flex flex-col">
        
        {/* Language Selector */}
        <div className="mb-2">
          <select className="bg-secondary border border-border rounded-md px-3 py-2 text-text-primary focus:ring-accent-primary focus:border-accent-primary">
            <option>JavaScript</option>
            <option>Python</option>
            <option>C++</option>
          </select>
        </div>

        {/* Code Editor Area */}
        <div className="grow bg-secondary rounded-lg border border-border overflow-hidden">
          <CodeEditor
            value={code}
            language="javascript"
            onChange={setCode}
          />
        </div>

        {/* Buttons: Output Toggle & Run/Submit */}
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 bg-secondary text-text-primary rounded-lg border border-border hover:bg-border">
            Console
          </button>
          <div className="flex gap-4">
            <button className="px-5 py-2 bg-transparent text-green-500 font-semibold rounded-lg border-2 border-green-500
                       hover:bg-green-500 hover:text-white transition-colors focus:outline-none">
              Run
            </button>
            <button className="px-5 py-2 bg-accent-primary text-text-primary font-semibold rounded-lg 
                       hover:bg-accent-hover transition-colors focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}