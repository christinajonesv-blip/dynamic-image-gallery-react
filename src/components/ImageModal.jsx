import "./ImageModal.css";

function ImageModal({ place, onClose }) {
  if (!place) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="travel-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="modal-image">
          <img src={place.image} alt={place.name} />
        </div>

        <div className="modal-content">
          <span className="modal-category">
            ✿ {place.category}
          </span>

          <h2>{place.name}</h2>

          <p className="modal-country">
            {place.country}
          </p>

          <div className="modal-details">
            <div>
              <span>◷</span>
              <p>{place.season}</p>
            </div>

            <div>
              <span>✦</span>
              <p>Best time: {place.bestTime}</p>
            </div>
          </div>

          <p className="modal-description">
            {place.description}
          </p>

          <div className="experiences">
            {place.experiences.map((experience) => (
              <span key={experience}>
                ◇ {experience}
              </span>
            ))}
          </div>

          <div className="modal-actions">
            <button className="journey-btn">
              ♡ &nbsp; Add to My Journey
            </button>

            <button className="share-btn">
              ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;