function ImageCard({ person }) {
  return (
    <div className="person-card">
      <img
        src={person.image}
        alt={person.name}
        className="profile-image"
      />

      <div className="person-info">
        <h2>{person.name}</h2>
        <p>{person.message}</p>
      </div>

      <div className="person-right">
        <span className="time">{person.time}</span>
        <span className="status">✓</span>
      </div>
    </div>
  );
}

export default ImageCard;