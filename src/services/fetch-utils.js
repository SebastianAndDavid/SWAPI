import fetch from 'cross-fetch';

async function fetchPeople() {
  const data = await fetch('https://swapi.dev/api/people/1/');
  const response = await data.json();
  return response;
}

export default fetchPeople;
