import React from 'react'
import { StatusIcon, DifficultyTag } from '../pages/ProblemHelpers'
import { Link } from 'react-router-dom'



// 1. Dummy data for our problems
const problems = [
  { id: 1, slug: 'two-sum', title: 'Two Sum', difficulty: 'Easy', status: 'Solved' },
  { id: 2, slug: 'add-two-numbers', title: 'Add Two Numbers', difficulty: 'Medium', status: 'Attempted' },
  { id: 3, slug: 'longest-substring', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', status: 'Todo' },
  { id: 4, slug: 'median-of-two-arrays', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', status: 'Todo' },
  { id: 5, slug: 'valid-parentheses', title: 'Valid Parentheses', difficulty: 'Easy', status: 'Solved' },
  { id: 6, slug: 'merge-k-lists', title: 'Merge K Sorted Lists', difficulty: 'Hard', status: 'Todo' },
  { id: 7, slug: 'reverse-integer', title: 'Reverse Integer', difficulty: 'Easy', status: 'Todo' },
];

const ProblemsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Problems</h1>

      {/* Filter Bar */}
      <div className="mb-4 flex space-x-4">
        <select className="bg-secondary border border-border rounded-md px-3 py-2 text-text-primary focus:ring-accent-primary focus:border-accent-primary">
          <option>Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <select className="bg-secondary border border-border rounded-md px-3 py-2 text-text-primary focus:ring-accent-primary focus:border-accent-primary">
          <option>Status</option>
          <option>Solved</option>
          <option>Attempted</option>
          <option>Todo</option>
        </select>
      </div>

      {/* Problem List Table */}
      <div className="bg-secondary shadow-md rounded-lg overflow-hidden border border-border">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-primary">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font medium text-text-secondary uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font medium text-text-secondary uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font medium text-text-secondary uppercase tracking-wider">
                Difficulty
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {problems.map((problem) => (
              <tr key={problem.id} className="hover:bg-primary transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusIcon status={problem.status} />
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/problems/${problem.slug}`}
                    className="text-sm font-medium text-text-primary hover:text-accent-primary"
                  >
                    {problem.title}
                  </Link>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <DifficultyTag difficulty={problem.difficulty} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProblemsPage
