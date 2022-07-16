import React from "react";
import Screen from "../images/screen.png";
import { motion } from 'framer-motion';

export default function Github() {
    return (
        <div className="bg-gray-100">
            <div className="lg:max-w-screen-lg mx-auto pt-10 lg:pt-16 pb-16 px-4 sm:px-6 lg:px-8 lg:flex items-center">
                <div className="lg:w-0 lg:flex-1 text-center lg:text-left mx-auto">
                    <p className="text-3xl font-extrabold text-gray-800 sm:text-4xl">Click on phone screen</p>
                    <p className="mt-3 lg:max-w-3xl text-lg text-gray-500">
                        I invite you to visit my Github account, where you can see the insides of my site.
                    </p>
                </div>
                <motion.a 
                animate={{rotate: 3}}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                href="https://github.com/KorolovDenys" className="mt-8 lg:mt-0 lg:ml-8 flex items-center justify-center">
                    <img
                        className="w-64 h-full"
                        src={Screen}
                        alt="Screen"
                    />
                </motion.a>
            </div>
        </div>
    )
}