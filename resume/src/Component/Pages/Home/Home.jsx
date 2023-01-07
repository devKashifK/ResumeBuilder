import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css"

export default function Home() {
  const navigate = useNavigate();


  return (
    <div className={styles.resumeHome}>
      <div className={styles.details}>
      <h3>The Best Free Online Resume Builder</h3>
      <p>
        A Quick and Easy Way to Create Your Professional Resume. 30+
        Professional Resume Templates Choose from over thirty modern and
        professional templates. All of which can be customized to your liking.
        Fast and Easy to Use Our resume builder lets you easily and quickly
        create a resume using our resume wizard.
      </p>
      <button onClick={() => navigate("/getStarted")}>Create My Resume Now</button>
      <img className={styles.homeImg} src="/images/desktop-with-resume-.svg" alt="" />
      <h4>A Free, Quick and Easy Way to Create Your Professional Resume.</h4>
      </div>
      

  
     
    </div>
  );
}
