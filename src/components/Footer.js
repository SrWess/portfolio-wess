import styles from '../styles/components/Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <section className={styles.email}>
          <p>Contact</p>

          <div>
            <p>wanjos.andrade@gmail.com</p>
            <button>Copy</button>
          </div>
        </section>

        <section className={styles.social}>
          <p>Social Links</p>

          <a href="#">GitHub</a>
          <a href="#">Linkedin</a>
        </section>

        <section className={styles.resume}>
          <p>External Links</p>

          <a href="#">Resume</a>
        </section>

      </div>
    </footer>
  )
}