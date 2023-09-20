import '../App.css'
import Stars from "../components/img/Stars.jpg"

function InfoCard() {
    return (
        <div className='infoCard'>
            <span className="cardTitle">Title</span>
            <img src={Stars} alt="" className="cardImg" />
            <p className="cardDesc">Description</p>
            <button className="cardButton">Read More</button>
        </div>
    );
}

export default InfoCard;
