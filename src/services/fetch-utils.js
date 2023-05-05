import fetch from 'cross-fetch';

async function fetchPeople() {
  const data = await fetch('https://swapi.dev/api/people');
  const { results } = await data.json();
  return results;
}

export default fetchPeople;
