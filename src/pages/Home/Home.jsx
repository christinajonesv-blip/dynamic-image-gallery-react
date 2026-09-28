import { useState } from "react";

import places from "../../data/placesList";
import ImageCard from "../../components/ImageCard";
import ImageModal from "../../components/ImageModal";

import "./Home.css";

function Home() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Cherry Blossom",
    "Mountains",
    "Coastal",
    "City",
    "Tropical",
    "Adventure",
    "Heritage",
  ];

  const filteredPlaces = places.filter((place) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      place.name.toLowerCase().includes(searchValue) ||
      place.country.toLowerCase().includes(searchValue);

    const matchesCategory =
      category === "All" || place.category === category;

    return matchesSearch && matchesCategory;
  });

  const japanPlaces = places.filter(
    (place) => place.country === "Japan"
  );

  return (
    <div className="wanderlust-page">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-mark">△</div>

          <div>
            <h2>Wanderlust</h2>
            <span>ONCE IN A LIFETIME</span>
          </div>
        </div>

        <nav>
          <a className="active" href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#journey">My Journey</a>
          <span className="heart">♥</span>
        </nav>

        <div className="nav-actions">
          <button className="search-icon">⌕</button>

          <button
            className="nav-explore"
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ◉ &nbsp; Explore
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="hero-small">
            THERE ARE PLACES YOU VISIT.
            <br />
            AND PLACES YOU NEVER FORGET.
          </p>

          <h1>
            A visual journey through
            <br />
            the world's most
            <br />
            breathtaking destinations.
          </h1>

          <p className="hero-description">
            Explore, dream and add your favourite
            <br />
            places to your journey.
          </p>

          <button
            className="hero-button"
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Destinations
            <span>→</span>
          </button>

        </div>
      </section>

      {/* JAPAN */}
      <section className="japan-section">

        <div className="japan-intro">

          <p className="featured-label">
            ✿ &nbsp; FEATURED JOURNEY
          </p>

          <h2>JAPAN</h2>

          <p className="japan-season">
            CHERRY BLOSSOM SEASON
          </p>

          <p className="japan-tagline">
            Where spring feels like a dream.
          </p>

          <div className="japan-links">
            Kyoto <span>•</span> Tokyo <span>•</span> Fuji
          </div>

          <button
            className="japan-button"
            onClick={() => {
              const kyoto = places.find(
                (place) => place.name === "Kyoto"
              );

              setSelectedPlace(kyoto);
            }}
          >
            Discover Japan
            <span>→</span>
          </button>

        </div>

        <div className="japan-cards">

          {japanPlaces.map((place) => (
            <div
              className="japan-mini-card"
              key={place.id}
              onClick={() => setSelectedPlace(place)}
            >
              <img src={place.image} alt={place.name} />

              <div className="mini-card-content">

                <h3>
                  <span>●</span>
                  {place.name}
                </h3>

                <p>
                  {place.name === "Kyoto"
                    ? "Maruyama Park & traditional streets"
                    : "Mt. Fuji framed by spring blossoms"}
                </p>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">

        <div className="gallery-title">

          <p>
            🍃 &nbsp; YOUR LIFETIME LIST
          </p>

          <h2>
            Places worth experiencing
            <br />
            at least once.
          </h2>

        </div>

        <div className="gallery-tools">

          <div className="search-container">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search a destination..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <div className="filter-buttons">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item ? "selected" : ""
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <div className="destination-grid">

          {filteredPlaces.map((place) => (
            <ImageCard
              key={place.id}
              place={place}
              onClick={setSelectedPlace}
            />
          ))}

        </div>

        <div className="quote-card">
          <span>✈</span>

          <p>
            "Collect moments,
            <br />
            not things."
          </p>

          <small>───</small>
        </div>

      </section>

      {/* MODAL */}
      {selectedPlace && (
        <ImageModal
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}

    </div>
  );
}

export default Home;