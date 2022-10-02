import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

import useWindowSize from "../../../hoocks/useWindowSize";

const Navbar = () => {
  const [colapsed, setColapsed] = useState(true);
  const [width, height] = useWindowSize();

  return (
    <div className={styles.navbar_container}>
      <nav className={styles.navbar_navbar}>
        <div className={styles.navbar_mobile_head}>
          <div
            className={styles.navbar_logo}
            onClick={() => setColapsed(colapsed ? colapsed : !colapsed)}
          >
            <Link href="/">D</Link>
          </div>
          <div
            className={styles.navbar_breadcrumb}
            onClick={() => setColapsed(!colapsed)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul
          style={{
            transform:
              colapsed && (width < 720 || width === 720)
                ? "translateX(110" + "vw)"
                : "translateY(0" + "vw)",
            transition:
              colapsed && (width < 720 || width === 720)
                ? "0.5" + "s"
                : "0.5" + "s"
          }}
        >
          <li onClick={() => setColapsed(!colapsed)}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => setColapsed(!colapsed)}>
            <Link href="/experiance">Experiance</Link>
          </li>
          <li onClick={() => setColapsed(!colapsed)}>
            <Link href="/projects">Projects</Link>
          </li>
          <li onClick={() => setColapsed(!colapsed)}>
            <Link href="/contact">Contact</Link>
          </li>
          <li
            className={styles.navbar_resume}
            onClick={() => setColapsed(!colapsed)}
          >
            <Link href="https://drive.google.com/uc?export=download&id=1TU67syaWgEa4qv6mQiOV12Ush_dkBWR0">Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
