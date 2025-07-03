import React from 'react'

export default function WorkCard({workExp}) {
  return (
    <ul className="list-disc list-outside text-gray-300 mx-3">
      {workExp.map((work, index) => (
        <li className="space-y-0.5 my-5" key={index}>
          <p className="flex flex-col justify-between items-between">
            <strong className="text-lg font-semibold capitalize">
              {work.role}
            </strong>
            <div className="text-xs italic capitalize text-amber-200">{work.year}</div>
          </p>
          <p className="text-sm capitalize">{work.institute}</p>
          <p className="text-sm text-blue-400">
            {work.desc}
          </p>
        </li>
      ))}
    </ul>
  )
}
