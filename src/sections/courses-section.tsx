import React from "react"

const faqs = [
  {
    id: 1,
    language: "HTML & CSS, JS, Bootstrap",
    course:
      "Unemy & SkillUP Courses.",
  },
  {
    id: 2,
    language: "React JS & Tailwind, TypeScript",
    course:
      "Course «Epic React» by Kent C. Dodds",
  },
  {
    id: 3,
    language: "C++ Object-oriented programming",
    course:
      "College of Info Systems and Technology.",
  },
]

export default function Courses() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 pt-12 pb-12 sm:px-6 lg:px-8 text-center ">
        <p className="text-3xl font-extrabold text-white sm:text-4xl">Where did I study?</p>
        <p className="mt-2 text-lg text-gray-500">These are the courses I took.</p>
        <div className="mt-12">
          <div className="md:grid md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <div className="text-lg mt-4 md:mt-0 leading-6 font-medium text-white">{faq.language}</div>
                <div className="mt-2 text-base text-gray-500">{faq.course}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}