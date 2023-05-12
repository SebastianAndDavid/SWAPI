import './App.css';
import { useNavigate } from 'react-router-dom';

function People({ people }) {
  const navigate = useNavigate();

  return (
    <>
      <h2>SWAPI - The Starwars API</h2>
      <div className="people-container">
        {people.map((person, i) => (
          <div
            className="people-card"
            key={person.name + i}
            onClick={() => navigate(`detail/${person.height}`)}
          >
            <h5>{person.name}</h5>
            <p>Birthday: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Homeworld: {person.homeworld}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default People;
