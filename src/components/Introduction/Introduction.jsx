import React from "react";
import styles from "./Introduction.module.scss";

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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          deserunt amet repellendus velit id reprehenderit atque cum animi
          nesciunt voluptatem recusandae repellat, quae nobis laboriosam hic
          temporibus obcaecati quaerat numquam?
        </p>
      </span>
    </div>
  );
};
