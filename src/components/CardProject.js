import styles from "../styles/components/CardProject.module.css";

export function CardProject({ title, description, listSkill }) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.cardImage}> 
      
      </div>

      <div className={styles.cardInfo}>
        <h3>{title}</h3>

        <p>
          {description}
        </p>

        <a href="#">
          View Project <img src="/icons/arrow-right.svg" alt="Ver Projeto"/>
        </a>

        <div className={styles.skills}>
          {
            listSkill.map((skill) => {
              return <span key={skill}>{ skill }</span>;
            })
          }
        </div>
      </div>
    </div>
  );
}
