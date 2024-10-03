import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero min-h-60 mt-16"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/connect-incoming-call-communication-concept_53876-125112.jpg?t=st=1722251002~exp=1722254602~hmac=a36b3d7af97e6aedf2166dde309bcb03594426ef160f122b3344e3f2134c5cfc&w=900)",
          }}
        >
          <div className="hero-overlay bg-opacity-90"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Lets Connect</h1>
              <p className="mb-5">Feel free to connect with us.</p>
            </div>
          </div>
        </motion.div>

        <div className="hero min-h-screen px-20 px-4">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl font-bold mt-10"
              >
                Contact now!
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="py-6"
              >
                We believe that books have the power to inspire, educate, and
                transform lives.
              </motion.p>
            </div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card bg-base-100 w-full max-w-shrink-0 shadow-2xl dark:bg-slate-800 dark:text-white "
            >
              <form className="card-body ">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Mobile</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Mobile"
                    className="input input-bordered"
                    required
                  />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Message"
                  ></textarea>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="form-control mt-6"
                >
                  <button className="btn bg-pink-600 text-white">
                    Contact
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
    </>
  );
}

export default Contact;
