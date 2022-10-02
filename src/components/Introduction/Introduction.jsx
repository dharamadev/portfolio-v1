import React from "react";
import styles from "./Introduction.module.scss";
import Link from "next/link";
import Router from "next/router";

export const Introduction = () => {
  return (
    <div className={styles.intro_container}>
      <span className={styles.intro_container_hi}>Hi, my name is</span>
      <span className={styles.intro_container_name}>
        <h2>Dharmendra Awasthi.</h2>
      </span>
      <span className={styles.intro_container_designation}>
        <h2>I am a full stack engineer.</h2>
      </span>
      <span className={styles.intro_container_details}>
        <p>
        A strategic professional with a dynamic career of 6 years that reflects pioneering experience from Requirement gathering to Deployment using technologies Java, Spring Boot, Spring Data JPA, Hibernate, MongoDB, SQL, Angular, SASS, CSS, HTML, and have a good knowledge and experience in project development frameworks and tools e.g. Agile, CI/CD and TDD.
        </p>
      </span>
      <span className={styles.hire_me_button_wrapper}>
        <button className={styles.button} onClick={redirectContact}>Contact me</button>
      </span>
      <span>
        <img  alt="Github" src="./github.svg" />
        <img  alt="Github" src="./linkedin.svg" />
      </span>
    </div>
  );
};

function redirectContact() {
  Router.push("/contact");
}