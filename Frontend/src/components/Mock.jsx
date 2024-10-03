import React from "react";

function Mock() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 mb-20">
        <div className="mockup-browser bg-base-300 border dark:bg-slate-900 dark:text-white dark:">
          <div className="mockup-browser-toolbar">
            <div className="input">https://bookstore.com</div>
          </div>
          <div className="bg-base-200 font-bold text-3xl flex justify-center px-4 py-16" >
            Enjoying Reading!
          </div>
        </div>
      </div>
    </>
  );
}

export default Mock;
