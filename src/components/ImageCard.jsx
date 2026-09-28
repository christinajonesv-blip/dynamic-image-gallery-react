import "./ImageCard.css";

function ImageCard({ place, onClick }) {
  return (
    <article
      className="place-card"
      onClick={() => onClick(place)}
    >
      <img
        src={place.image}
        alt={place.name}
      />

      <div className="place-card-overlay">
        <span className="place-category">
          {place.category}
        </span>

        <div className="place-card-bottom">
          <div>
            <h3>{place.name}</h3>
            <p>{place.country}</p>
          </div>

          <button
            className="explore-card-btn"
            onClick={(event) => {
              event.stopPropagation();
              onClick(place);
            }}
          >
            Explore <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ImageCard;