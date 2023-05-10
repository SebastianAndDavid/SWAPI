import React, { useEffect, useState } from 'react';
import { fetchPeople, fetchSinglePlanet } from './services/fetch-utils';
import './App.css';

function People() {
  const [people, setPeople] = useState([]);

  async function handleFetchPeople() {
    const people = await fetchPeople();

    const homeworldPromises = people.map((person) => handleFetchSinglePlanet(person.homeworld));

    const homeworlds = await Promise.all(homeworldPromises);

    const mappedOverPeople = people.map((person, i) => ({
      ...person,
      homeworld: homeworlds[i].name,
    }));
    setPeople(mappedOverPeople);
    console.log(people);
    return people;
  }

  async function handleFetchSinglePlanet(url) {
    const response = await fetchSinglePlanet(url);
    return response;
  }

  useEffect(() => {
    handleFetchPeople();
  }, []);

  function handleClick() {
    console.log('clicking');
  }

  return (
    <div className="people-container">
      {people.map((person, i) => (
        <div className="people-card" key={person.name + i} onClick={handleClick}>
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
