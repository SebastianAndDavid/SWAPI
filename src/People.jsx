import React from 'react';
import fetchPeople from './services/fetch-utils';

async function getPeople() {
  const result = await fetchPeople();
  return result;
}

console.log('getPeople()', getPeople());

function People() {
  return <div>People</div>;
}

export default People;
