import React, { useEffect, useState } from 'react';
import fetchPeople from './services/fetch-utils';

function People() {
  const [people, setPeople] = useState({});

  async function handleFetchPeople() {
    const response = await fetchPeople();
    setPeople(response);
    console.log(people);
    return response;
  }

  useEffect(() => {
    const variable = handleFetchPeople();

    console.log('variable', variable);
  }, []);

  return <div>My name is {people.name}</div>;
}

export default People;
