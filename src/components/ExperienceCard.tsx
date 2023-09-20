import "../styles/ExperienceCard.css"

type ExperienceProps = {
  id: number;
  position: string;
  title: string;
  logo: any;
  duties: string[];
  link: string;
};

function ExperienceCard(props: ExperienceProps) {
  return (
    <div className='experienceCard'>
      <span className="position">{props.position}</span>
      <span className="title">{props.title}</span>
      <img src={props.logo} alt="" className="img" />
      <ul>
        {props.duties.map((duty, index) => (
          <li key={index} className="duty">{duty}</li>
        ))}
      </ul>
      <a className="experienceLink" href={props.link} target="_blank" rel="noopener noreferrer">
        {props.link}
      </a>
    </div>
  );
}

export default ExperienceCard;