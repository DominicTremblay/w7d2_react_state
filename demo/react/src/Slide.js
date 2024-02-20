import LikeButton from "./LikeButton";

const Slide = (props) => {
  return (
    <article className="slide">
      <img src="/images/card.png" alt="Player Name" />
      <div className="info">
        <h3>Loading </h3>
        <p></p>
        <ul>
          <li>Position:</li>
          <li>Games Played:</li>
          <li>Goals:</li>
          <li>Assists:</li>
          <li>Points:</li>
        </ul>
        <LikeButton />
      </div>
    </article>
  );
};

export default Slide;
