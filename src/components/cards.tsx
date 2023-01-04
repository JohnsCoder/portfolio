import "../styles/components/cards.css";
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
    <a href={props.link} target="_blank">
      <div className="card">
        <div>
          <img src={props.icon} />
          <h4>{props.title}</h4>
          <span>{linktext}</span>
          <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.language.toLowerCase()}/${props.language.toLowerCase()}-plain.svg`} />
          <span>{props.language}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </a>
  );
};
