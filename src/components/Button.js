import React from "react";
import { Link } from "react-router-dom";

function Button({ path, content, styles }) {
  return (
    <Link
      to={path}
      className={styles}
    >
      {content}
    </Link>
  );
}

export default Button;
