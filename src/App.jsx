import { useState } from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";

function App() {
  const people = [
    {
      id: 1,
      name: "Jessica Koel",
      message: "Hey, Joel! I'm here to help you out, please...",
      time: "11:25",
      image: "https://i.pravatar.cc/100?img=47",
    },
    {
      id: 2,
      name: "Komeial Bolger",
      message: "I will send you all documents as soon as...",
      time: "12:05",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 3,
      name: "Tamaara Suiale",
      message: "Are you going to the meeting later today?",
      time: "12:45",
      image: "https://i.pravatar.cc/100?img=32",
    },
    {
      id: 4,
      name: "Sam Nielson",
      message: "Thank you for your help yesterday!",
      time: "13:20",
      image: "https://i.pravatar.cc/100?img=14",
    },
    {
      id: 5,
      name: "Caroline Nexon",
      message: "Can you please check the project details?",
      time: "14:10",
      image: "https://i.pravatar.cc/100?img=44",
    },
    {
      id: 6,
      name: "Patrick Koeler",
      message: "I will get back to you shortly.",
      time: "14:35",
      image: "https://i.pravatar.cc/100?img=11",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="page">
        <div className="chat-container">

          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <span className="search-icon">⌕</span>
          </div>

          <div className="people-list">
            {filteredPeople.map((person) => (
              <ImageCard
                key={person.id}
                person={person}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;