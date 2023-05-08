import React, { useEffect, useState } from 'react';
import fetchPeople from './services/fetch-utils';
import './App.css';

function People() {
  const [people, setPeople] = useState([]);

  async function handleFetchPeople() {
    const response = await fetchPeople();
    setPeople(response);
    return response;
  }

  useEffect(() => {
    handleFetchPeople();
  }, []);

  return (
    <div className="people-container">
      {people.map((person, i) => (
        <div className="people-card" key={person.name + i}>
          <h5>{person.name}</h5>
          <p>Birthday: {person.birth_year}</p>
          <p>Gender: {person.gender}</p>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Homeworld: {person.homeworld}</p>
        </div>
      ))}
    </div>
  );
}

export default People;
