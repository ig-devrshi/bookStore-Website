import React from "react";
import banner from "../assets/Banner.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const containerRight = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl lg:h-screen container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-4xl font-bold text-center md:text-start"
            >
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-600">new everyday!!!</span>
            </motion.h1>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-xl text-center md:text-start px-2"
            >
              Welcome to Bookstore, your one-stop destination for all things
              literary. We are dedicated to providing a diverse selection of
              books across various genres, ensuring every reader finds their
              next great read!
            </motion.p>
            <div className="w-full order-2 md:order-1 flex justify-center md:justify-start gap-2 md:w-1/4 ">
              <motion.label
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="input input-bordered flex items-center gap-2 w-56"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </motion.label>

              <motion.button
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="btn text-white bg-pink-600 hover:bg-secondary w-40"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <motion.img
            variants={containerRight(0.9)}
            initial="hidden"
            animate="visible"
            src={banner}
            className="md:w-full lg:max-w-150 md:ml-6 md:mt-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
