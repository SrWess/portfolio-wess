import styles from "../styles/components/CardProject.module.css";

export function CardProject() {
  return (
    <div className={styles.containerCard}>
      <div className={styles.cardImage}>
        <span>Imagem Card</span>
      </div>

      <div className={styles.cardInfo}>
        <h3>Title Card</h3>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>

        <a href="#">
          View Project <img src="/icons/arrow-right.svg" alt="" srcset="" />
        </a>

        <div className={styles.skills}>
          <span>Skill</span>
          <span>Skill</span>
          <span>Skill</span>
          <span>Skill</span>
          <span>Skill</span>
        </div>
      </div>
    </div>
  );
}
