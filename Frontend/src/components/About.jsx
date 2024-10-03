import React from "react";
import author from "../assets/autho.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function About() {
  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hero min-h-60 mt-16 "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/connect-incoming-call-communication-concept_53876-125112.jpg?t=st=1722251002~exp=1722254602~hmac=a36b3d7af97e6aedf2166dde309bcb03594426ef160f122b3344e3f2134c5cfc&w=900)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">
              We are dedicated to providing a diverse selection of books
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="hero min-h-screen w-full">
          <div className="hero-content flex-col lg:flex-row">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={author}
              className="max-w-80 rounded-lg"
            />
            <div className="">
              <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-5xl font-bold"
              >
                Meet Harshal!
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="py-6 pr-12"
              >
                Harshal Rai, the passionate visionary behind BookStore. With a
                lifelong love for literature and a deep commitment to fostering
                a reading community, Harshal has turned their dream of creating
                a welcoming and vibrant bookstore into reality.
              </motion.p>
              <a href="https://github.com/ig-devrshi">
                <motion.button
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="btn btn-secondary w-40 text-white text-normal"
                >
                  Profile
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="hero min-h-screen mb-5"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/group-children-lying-reading-grass-field_1150-3900.jpg?t=st=1722259150~exp=1722262750~hmac=b822b8d6b0ccd0cb0161c2a5f350f9a8c90c38c30f273c4d6817e332b213ce5c&w=996)",
          }}
        >
          <div className="hero-overlay bg-opacity-90"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Our Mission</h1>
              <p className="mb-5">
                At Bookstore Name, our mission is to foster a love of reading
                and learning within our community. We believe that books have
                the power to inspire, educate, and transform lives. That's why
                we strive to offer a wide.
              </p>
              <Link to="/">
                <button className="btn btn-secondary text-white">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default About;
