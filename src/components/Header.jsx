// import styles from "./Header.module.css";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import Home from "./Home";

// export default function Header() {
//   const [active, setActive] = useState("navmenu");
//   const navToggle = () => {
//     active === "navmenu"
//       ? setActive("navmenu navactive")
//       : setActive("navmenu");
//   };

//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   const handlehomeClick = () => {
//     setTimeout(() => {
//       window.location.href = window.location.href;
//     }, 200);
//     navigate("/");
//   };

//   const handleSignupClick = () => {
//     navigate("/signup");
//   };

//   const handleBgremoveClick = () => {
//     navigate("/bgremove");
//     console.log("clicked");
//   };

//   const handleContactClick = () => {
//     navigate("/contact");
//   };
//   const handleAboutClick = () => {
//     navigate("/about");
//   };

//   return (
//     <>
//       <div className={styles.header}>
//         <div className={styles.head1} onClick={handlehomeClick}>
//           <h1 onClick={handlehomeClick}>
//             <span className={styles.icon}>
//               <i className="fa-solid fa-eraser"></i>
//             </span>
//             remove<span className={styles.bg}>bg</span>
//           </h1>
//         </div>

//         <div className={styles.head2}>
//           <ul>
//             <li onClick={handleBgremoveClick}>
//               <a href="">Remove Background</a>
//             </li>
//             <li onClick={handleAboutClick}>
//               <a href="">About Us</a>
//             </li>
//             <li onClick={handleContactClick}>
//               <a href="">Contact Us</a>
//             </li>
//           </ul>
//         </div>

//         <div className={styles.head3}>
//           <button onClick={handleLoginClick}>Login</button>
//           <button onClick={handleSignupClick}>Signup</button>
//         </div>
//       </div>
//     </>
//   );
// }

import styles from "./Header.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    setMenuOpen(false); // Close menu on navigation
    navigate(path);
  };

  return (
    <div className={styles.header}>
      <div className={styles.head1} onClick={() => handleNavigation("/")}>
        <h1>
          <span className={styles.icon}>
            <i className="fa-solid fa-eraser"></i>
          </span>
          remove<span className={styles.bg}>bg</span>
        </h1>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Navigation Menu */}
      <div className={`${styles.navmenu} ${menuOpen ? styles.navActive : ""}`}>
        <ul>
          <li>
            <a href="#" onClick={() => handleNavigation("/Bgremove")}>
              Remove Background
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavigation("/about")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavigation("/contact")}>
              Contact Us
            </a>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <button onClick={() => handleNavigation("/login")}>Login</button>
          <button onClick={() => handleNavigation("/signup")}>Signup</button>
        </div>
      </div>
    </div>
  );
}
