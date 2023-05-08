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
          {person.name}
        </div>
      ))}
    </div>
  );
}

export default People;
