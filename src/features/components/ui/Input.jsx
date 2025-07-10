import React from "react";
import { FaPaperPlane } from "react-icons/fa";

function Input() {
  return (
    <div className="join">
      <div>
        <label className="input validator join-item  pr-12">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <form
            action="mailto:mail@site.com"
            method="post"
            encType="text/plain"
          >
            <input
              className="text-neutral dark:text-gray-400"
              type="email"
              placeholder="mail@site.com"
              required
            />
            <button className="btn btn-info btn-sm ">
              <FaPaperPlane color="white" />
            </button>
          </form>
        </label>

        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
    </div>
  );
}

export default Input;
