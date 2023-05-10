import React, { useEffect, useState } from 'react';
import { fetchPeople, fetchSinglePlanet } from './services/fetch-utils';
import './App.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function People() {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

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
    navigate('detail');
  }

  return (
    <>
      <h2>SWAPI - The Starwars API</h2>
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
        <Outlet />
      </div>
    </>
  );
}

export default People;
