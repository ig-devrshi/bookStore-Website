import React from "react";
import { motion } from "framer-motion";
function Stats() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 mb-20 ">
        <motion.div whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }} className="stats flex shadow dark:bg-slate-900 dark:text-white dark:">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="stat"
          >
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Traffic</div>
            <div className="stat-value text-primary">76.6K</div>
            <div className="stat-desc">31% more than last month</div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="stat"
          >
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Books Purchase</div>
            <div className="stat-value text-secondary">12K</div>
            <div className="stat-desc">21% more than last month</div>
          </motion.div>

          <motion.div whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5, delay: 0.5 }} className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.freepik.com/free-vector/charity-life-abstract-logo_1043-47.jpg?t=st=1722262999~exp=1722266599~hmac=d3556ff596856787dabbdd0c1a961bf8e54863846fb16a311c119f0e23830e9e&w=740" />
                </div>
              </div>
            </div>
            <div className="stat-value">64 Kits</div>
            <div className="stat-title">Delivered to Literate fund</div>
            <div className="stat-desc text-secondary">Charity</div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Stats;
