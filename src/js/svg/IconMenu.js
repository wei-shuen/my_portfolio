import * as React from "react";

function SvgMenu(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 16h4v4h-4v-4zm-6 0h4v4h-4v-4zm-6 0h4v4H4v-4zm12-6h4v4h-4v-4zm-6 0h4v4h-4v-4zm-6 0h4v4H4v-4zm12-6h4v4h-4V4zm-6 0h4v4h-4V4zM4 4h4v4H4V4z"
      />
    </svg>
  );
}

export default SvgMenu;