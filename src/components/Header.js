import React from "react";

//css
import "../style/header.css";

function Header() {
  return (
    <nav>
      <h3> Albums-App</h3>

      <h3>
        <a
          target="_blank"
          href="https://github.com/sriramarumugham/Albums-react"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </h3>
    </nav>
  );
}

export default Header;
