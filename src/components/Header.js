import styles from "../styles/components/Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <a href="#">
          <img src="/logo.svg" alt="Wesley Anjos" />
        </a>
      </div>

      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Currículo</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
