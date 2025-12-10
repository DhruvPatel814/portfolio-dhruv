import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center bg-white border-t mt-10">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Dhruv Patel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
