import fetch from 'cross-fetch';

async function fetchPeople() {
  const data = await fetch('https://swapi.dev/api/people');
  const { results } = await data.json();
  return results;
}

async function fetchSinglePlanet(url) {
  const data = await fetch(url);

  const result = await data.json();

  return result;
}

export { fetchPeople, fetchSinglePlanet };
