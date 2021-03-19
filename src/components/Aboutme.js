import styles from "../styles/components/Aboutme.module.css";
import { Progressbar } from "./Progressbar";

export function Aboutme() {
  return (
    <section className={styles.container}>
      <h2>About me</h2>

      <div>
        <div className={styles.description}>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
        </div>

        <div className={styles.social}>
          <a href="#">
            <img src="/icons/email.svg" alt="Email" />
          </a>
          <a href="#">
            <img src="/icons/github.svg" alt="Github" />
          </a>
          <a href="#">
            <img src="/icons/linkedin.svg" alt="Linkedin" />
          </a>
        </div>
      </div>

      <div className={styles.skillContainer}>
        <h3>Skills &amp; Experience</h3>

        <div className={styles.skills}>
          <div className={styles.skillfront}>
            <Progressbar title="Front-End" percentage="85%" />
            <Progressbar title="HTML5 / CSS3" percentage="85%" />
            <Progressbar title="Javascript" percentage="60%" />
            <Progressbar title="React" percentage="50%" />
            <Progressbar title="Typescript" percentage="30%" />
            <Progressbar title="Gatsby / NextJs" percentage="40%" />
          </div>

          <div className={styles.skillback}>
            <Progressbar title="Back-End" percentage="50%" />
            <Progressbar title="Node.js" percentage="50%" />
            <Progressbar title="MySQL / PostgreSQL" percentage="35%" />
            <Progressbar title="Docker" percentage="20%" />
          </div>
        </div>

        <div className={styles.othersContainer}>
          <h4>Others</h4>

          <section className={styles.others}>
            <section>
              <Progressbar title="GIT" percentage="60%" />
              <Progressbar title="UI/UX Design" percentage="50%" />
            </section>

            <section>
              <Progressbar title="Responsive Deisgn" percentage="70%" />
              <Progressbar title="Figma" percentage="65%" />
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}
