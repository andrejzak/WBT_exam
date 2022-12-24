import React from "react";
import { Link } from "react-router-dom";

function Button({ path, name }) {
  return (
    <Link
      to={path}
      className="text-center w-36 start-button font-bold cursor-pointer border-none px-6 py-2 rounded-md text-white"
    >
      {name}
    </Link>
  );
}

export default Button;
