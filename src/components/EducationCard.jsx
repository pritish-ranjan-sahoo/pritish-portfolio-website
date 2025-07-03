import React from "react";

export default function EducationCard({ education }) {
  return (
    <ul className="list-disc list-outside text-gray-300 mx-3">
      {education.map((edu, index) => (
        <li className="space-y-0.5 my-5" key={index}>
          <p className="flex justify-between items-center">
            <strong className="text-lg font-semibold capitalize">
              {edu.type}
            </strong>
            <span className="text-xs italic capitalize text-amber-200">( {edu.year} )</span>
          </p>
          <p className="text-sm capitalize text-blue-400">{edu.institute}</p>
          <p className="text-sm font-mono capitalize">
            {edu.score}
          </p>
        </li>
      ))}
    </ul>
  );
}
