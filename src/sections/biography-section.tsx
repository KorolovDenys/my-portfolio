import React from "react";
import logo from "../images/logo.png";

export default function Biography() {
  return (
    <div className="pt-6 lg:pt-16 pb-16 bg-gray-100 overflow-hidden">
      <div className="xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-base mx-auto">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            How did I get into programming?
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start mt-5 sm:mt-8">
          <div className="relative z-10">
            <div className="prose prose-indigo text-gray-600 mx-auto lg:max-w-none text-lg">
              <p>
                Some time ago my uncle gave me a subscription to a course on studying HTML, CSS and Bootstrap. After completing this course, I bought a course on the study of JS. After studying the courses, I made some sites for free for my friends to gain experience.
              </p>
              <p className="mt-3">
                After learning these three fundamentals of programming, I started looking for a job. I found a job, but before I could get started, I needed to learn React and TS. My employer paid for a React and TS course for me. After completing the course, I got to work.
              </p>
              <p className="mt-3">
                The work was hard, but I really enjoyed it. I had a very competent mentor, there was a friendly team and a great atmosphere. In the course of work, I learned Tailwind, Jest testing and other basics of programming. Everything was fine, but we stopped funding the project and we all remained unemployed. Now I am looking for a job.
              </p>
            </div>
          </div>
          <div className="mt-10 relative text-base mx-auto lg:mt-0">
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-6 sm:px-10 sm:pt-10 sm:pb-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
                  alt="Twitter"
                  className="h-8"
                />
                <div className="relative text-lg text-gray-700 font-medium mt-8">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    When did programmers become more like foresters than programmers? Let me think... When they started not writing code, but sawing.
                  </p>
                </div>
              </div>
              <div className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">Denys Korolov</p>{' '}
                  <p className="sm:inline">Developer</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}