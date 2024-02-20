import LikeButton from './LikeButton';

const Slide = (props) => {

  console.log(props)
  return (
    <article className="slide">
      <img src={props.cardData.imageUrl} alt={props.cardData.name} />
      <div className="info">
        <h3>{props.cardData.name} </h3>
        <p>{props.cardData.team}</p>
        <ul>
          <li>Position: {props.cardData.position}</li>
          <li>Games Played: {props.cardData.stats.gamesPlayed}</li>
          <li>Goals: {props.cardData.stats.goals}</li>
          <li>Assists: {props.cardData.stats.assists}</li>
          <li>Points: {props.cardData.stats.points}</li>
        </ul>
        <LikeButton id={props.cardData.id} like={props.cardData.like} likeCard={props.likeCard}/>
      </div>
    </article>
  );
};

export default Slide;
