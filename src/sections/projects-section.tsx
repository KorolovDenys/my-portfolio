import React from "react";
import Snapi from "../images/projects/snapi.png";
import AsiaSushi from "../images/projects/asiasushi.png";
import Dropio from "../images/projects/dropio.png";
import Kinozal from "../images/projects/kinozal.png";

export default function Projects() {
    return (
      <div className="bg-gray-100">
        <div className="xl:max-w-screen-xl mx-auto px-4 pt-10 lg:pt-16 pb-16 lg:max-w-full lg:px-8">
            <div className="flex flex-col text-center">
              <p className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              My projects
              </p>
              <p className="mt-3 text-lg text-gray-500">
              I present to you my projects and projects in which I participated.
              </p>
            </div>
            <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:text-left">
              <div>
                <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={Snapi}
                    alt="Snapi"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg mt-10 lg:mt-0">
                  <img
                    src={AsiaSushi}
                    alt="AsiaSuchi"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl mt-10 lg:mt-0">
                  <img
                    src={Dropio}
                    alt="AsiaSuchi"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg mt-10 lg:mt-0">
                  <img
                    src={Kinozal}
                    alt="AsiaSuchi"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }