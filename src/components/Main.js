import Particles from "react-particles-js";

import styles from "../styles/components/Main.module.css";

export function Main() {
  return (
    <main className={styles.container}>
      <Particles
        height="80vh"
        params={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#FFF" },
            opacity: {
              value: 0.3,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 1,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              repulse: { distance: 154.29467033725558, duration: 0.4 },
            },
          },
          retina_detect: true,
        }}
      />
      <h1>
        Olá, eu sou o <span>Wesley</span> 👋, desenvolvedor Front-End
      </h1>

      <a href="#" className={styles.arrowLink}>
        <img
          className={styles.arrowdown}
          src="/icons/arrow-down.svg"
          alt="Seta para rolagem"
        />
        <p>Scroll</p>
      </a>
    </main>
  );
}
