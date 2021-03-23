import styles from "../styles/components/Projects.module.css";
import { CardProject } from "./CardProject";

export function Projects() {
  return (
    <section className={styles.container}>
      <h2>Projetos</h2>

      <CardProject
        title="Project One"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit."
        listSkill={[
          "JavaScript",
          "TypeScript",
          "Nodejs",
          "Docker",
          "ReactJs",
          "PostgreSQL",
        ]}
      />
    </section>
  );
}
