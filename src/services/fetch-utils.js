import fetch from 'cross-fetch';

async function fetchPeople() {
  const data = await fetch('https://swapi.dev/api/people');
  const response = await data.json();
  return response.results;
}

export default fetchPeople;
