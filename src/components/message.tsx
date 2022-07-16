import React from 'react'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import logo from "../images/logo.png";
import { motion } from 'framer-motion';

export default function Message() {
  const [show, setShow] = useState(true)

  return (
    <>
      <motion.div 
      initial={{
        y: -1000,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: 1
      }}
      className="fixed inset-0 flex items-start px-4 py-6 pointer-events-none sm:p-6 z-10">
        <div className="w-full flex flex-col items-center space-y-4 lg:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-12 w-12"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">Denys Korolov</p>
                    <p className="mt-1 text-sm text-gray-500">Hi! I'm glad to see you on my site.</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </motion.div>
    </>
  )
}