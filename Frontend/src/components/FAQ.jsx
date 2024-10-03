import React from "react";
import { motion } from "framer-motion";
function FAQ() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-bold text-3xl text-center mt-4 mb-10"
          >
            Frequently Asked Questions
          </motion.h1>
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="collapse collapse-arrow bg-base-200 mt-4 mb-4 dark:bg-slate-900 dark:text-white dark:"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I return any product if any issue arouses?
          </div>
          <div className="collapse-content">
            <p>Yes! you can definitely return it.</p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="collapse collapse-arrow bg-base-200 mt-4 mb-4 dark:bg-slate-900 dark:text-white dark:"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What if payment gateway fails?
          </div>
          <div className="collapse-content">
            <p>
              Our Team will reach to you whenever such issue happens. Don't
              worry your money will be with you only.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="collapse collapse-arrow bg-base-200 mt-4 mb-4 dark:bg-slate-900 dark:text-white dark:"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can i gift a book to someone?
          </div>
          <div className="collapse-content">
            <p>
              Yes you can gift the book as we have a special option for that
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="collapse collapse-arrow bg-base-200 mt-4 mb-4 dark:bg-slate-900 dark:text-white dark:"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can you translate the book in various languages?
          </div>
          <div className="collapse-content">
            <p>
              No currently the feature is in prototype phase. We will bring
              soon.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="collapse collapse-arrow bg-base-200 mt-4 mb-4 dark:bg-slate-900 dark:text-white dark:"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can i upload any of my books to the website?
          </div>
          <div className="collapse-content">
            <p>Yes you can upload the book as we have a option for that</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default FAQ;
