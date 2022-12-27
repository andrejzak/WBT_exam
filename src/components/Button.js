import React from "react";
import { Link } from "react-router-dom";

function Button({ path, name, styles }) {
  return (
    <Link
      to={path}
      className={styles}
    >
      {name}
    </Link>
  );
}

export default Button;
