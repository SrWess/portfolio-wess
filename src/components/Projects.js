import styles from "../styles/components/Projects.module.css";
import { CardProject } from "./CardProject";

export function Projects() {
  return (
    <section className={styles.container}>
      <h2>Projetos</h2>

      <CardProject/>
    </section>
  )
}