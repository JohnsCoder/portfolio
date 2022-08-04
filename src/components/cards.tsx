import "../styles/components/cards.css";
interface props {
  icon: string;
  title: string;
  link: string;
  description: string;
}

export default (props: props) => {
  const linktext = props.link.split('//')[1]
console.log(linktext)
  return (
      <a href={props.link} target="_blank">
    <div className="card">
        <div>
          <img src={props.icon} />
          <h4>{props.title}</h4>
          <span>{linktext}</span>
        </div>
        <p>{props.description}</p>
    </div>
      </a>
  );
};
