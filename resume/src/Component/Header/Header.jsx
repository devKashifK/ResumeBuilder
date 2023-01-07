import styles from "./Header.module.css";
import { MdBuild, MdOutlineAdd } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [show, setShow] = useState(false)
  return (
    <div className={styles.header}>
        <Link to="/">
      <div className={styles.logo}>
        <MdBuild />
        <h4>Resume Builder</h4>
        <div className={styles.iconRotate}>
          <MdBuild />
        </div>
      </div>
      </Link>
      <div className={styles.seeMore}>
        <ul className={`${styles.ul} ${show ? styles.showUl : ""}`}>
            <Link to="/resume01">
        <li className={styles.icon}>
          <p className={styles.text}>Designs</p>
          <SiMaterialdesign />
        </li>
        </Link>
        <Link to="/form01">
        <li className={styles.icon}>
          <p className={styles.text}>Create New</p>
          <MdOutlineAdd />
        </li>
        </Link>
        <Link to="/account">
        <li className={styles.icon}>
          <p className={styles.text}>Login</p>
          <FaUser />
        </li>
        </Link>
        </ul>
        <div className={styles.iconShow} onClick={()=>setShow(!show)}>
          <AiOutlineMenuUnfold />
        </div>
      </div>
    </div>
  );
}
