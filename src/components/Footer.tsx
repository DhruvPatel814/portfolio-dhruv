import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="
        py-6 mt-10 text-center border-t
        bg-white text-gray-600 border-gray-200
        dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700
        transition-colors duration-300
      "
    >
      <p>
        © {new Date().getFullYear()} Dhruv Patel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
