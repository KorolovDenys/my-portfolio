import React from "react";

export default function Skills() {
    return (
        <div className="bg-gray-900">
            <div className="xl:max-w-screen-xl mx-auto pt-12 pb-12 px-4 sm:px-6 lg:px-8 justify-center">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 my-auto">
                    <div className="text-center lg:text-left my-auto">
                        <p className="text-3xl font-extrabold text-white sm:text-4xl">
                            My skills & knowledge
                        </p>
                        <p className="mt-2 text-lg text-gray-500">
                            Layout and markup languages ​​that I use in programming.
                        </p>
                    </div>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:mt-0 text-lg text-white font-medium">
                        <div className="col-span-1 justify-center lg:justify-start flex py-3">
                            <p>HTML & CSS</p>
                        </div>
                        <div className="col-span-1 justify-center lg:justify-start flex py-3">
                            <p>TypeScript</p>
                        </div>
                        <div className="col-span-1 justify-center lg:justify-start flex py-3">
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="col-span-1 justify-center lg:justify-start flex py-3">
                            <p>JavaScript</p>
                        </div>
                        <div className="col-span-1 justify-center lg:justify-start flex py-3">
                            <p>React JS, TS</p>
                        </div>
                        <div className="col-span-1 justify-center lg:justify-start flex py-3">
                            <p>Bootstrap</p>
                        </div>
                        <div className="col-span-1 justify-center lg:justify-start flex py-3">
                            <p>Less CSS</p>
                        </div>
                        <div className="col-span-1 justify-center lg:justify-start flex py-3">
                            <p>Jest Tests</p>
                        </div>
                        <div className="col-span-1 justify-center lg:justify-start hidden py-3 sm:flex">
                            <p>Testing Library</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}