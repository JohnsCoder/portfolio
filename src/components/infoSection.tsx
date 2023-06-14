import styles from "../styles/components/infoSection.module.css";
export default function () {
  return (
    <div className={styles["info-section"]}>
      <aside className={styles["left-aside"]}>
        <h1>PORTFOLIO</h1>
        <div>
          <p>OLÁ MEU NOME É</p>
          <p>JOÃO PEDRO</p>
          <p>SOU DESENVOLVEDOR FULLSTACK</p>
        </div>
      </aside>

      <section className={styles.profile}>
        <header>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-pereira-dos-santos-7187b9189/"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
            Linkedin
          </a>
          <a href="https://github.com/JohnsCoder" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            Github
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWhHHBlfsgWLWbfvHtqPpctccFgPfCHfCzvdPlgTPWFCLngtsZPKQxJXdtJFjkVLzlSjB"
            target="_blank"
          >
            <img src="./src/assets/icons/mail.svg" alt="" />
            Email
          </a>
        </header>
        <div>
          <img
            className={styles.picture}
            src="./src/assets/profile/profile-pic (12).png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
