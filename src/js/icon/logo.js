import * as React from "react";

function Logo(props) {
  return (
    <svg
      viewBox="0 0 112 112"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#817977" d="M6 6h100v100H6z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.452 41.741a6.812 6.812 0 0112.54-5.323l8.596 20.25 9.037-20.297a6.804 6.804 0 015.009-3.933 6.814 6.814 0 017.788 3.98l8.596 20.25 9.037-20.297A6.812 6.812 0 1192.5 41.912L77.548 75.497a6.805 6.805 0 01-5.041 3.938 6.813 6.813 0 01-8.261-3.853l-8.378-19.737-8.75 19.652a6.805 6.805 0 01-5.04 3.938 6.813 6.813 0 01-8.262-3.853l-14.364-33.84z"
        fill="#DEDDD8"
      />
    </svg>
  );
}

export default Logo;

