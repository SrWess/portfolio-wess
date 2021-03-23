import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

import styles from "../styles/components/Header.module.css";

export function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <a href="#">
          <img src="/logo.svg" alt="Wesley Anjos" />
        </a>
      </div>

      <div className={styles.menu}>
        <RiMenuFill
          className={styles.menuMobile}
          size={25}
          onClick={() => setOpen(!isOpen)}
        />

        {isOpen && (
          <div className={styles.overlayMenu}>
            <RiCloseFill
              className={styles.menuMobileClose}
              size={30}
              onClick={() => setOpen(!isOpen)}
            />

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
        )}
      </div>
    </header>
  );
}
