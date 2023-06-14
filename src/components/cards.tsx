import styles from "../styles/components/cards.module.css";
import icons from "../utils/icons";
interface props {
  icon: string;
  title: string;
  link: string;
  description: string;
  language: string;
}

export default (props: props) => {
  const linktext = props.link.split("//")[1];
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div>
          <img src={props.icon} />
          <h4 id={styles.h4}>{props.title}</h4>
          <span>{linktext}</span>
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.language.toLowerCase()}/${props.language.toLowerCase()}-plain.svg`}
          />
          <span>{props.language}</span>
        </div>
        <p>{props.description}</p>
      </div>
      <div className={styles.navigate}>
        <a href={props.link} target="_blank">
          <img src={icons.worldIcon} alt="" />
        </a>
        <hr />
        <a
          href={`https://github.com/JohnsCoder/${props.title}`}
          target="_blank"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </a>
      </div>
    </div>
  );
};
