import { useNavigate, useParams } from 'react-router-dom';
import './App.css';
import People from './People.jsx';

function PeopleDetail({ people }) {
  const { id } = useParams();
  console.log('id', id);
  console.log('people', people);
  const navigate = useNavigate();

  const singlePerson = people.find((person) => person.height === id);

  console.log('singlePerson', singlePerson);
  return (
    <div className="detail-page">
      <header>
        <div className="button" onClick={() => navigate('/')}>
          Go Back
        </div>
      </header>
      <h4>Check out {singlePerson.name}s details!</h4>
      <div className="people-card">
        {/* this should be a reusable component */}
        <h5>{singlePerson.name}</h5>
        <p>Birthday: {singlePerson.birth_year}</p>
        <p>Gender: {singlePerson.gender}</p>
        <p>Height: {singlePerson.height}</p>
        <p>Mass: {singlePerson.mass}</p>
        <p>Homeworld: {singlePerson.homeworld}</p>
      </div>
    </div>
  );
}

export default PeopleDetail;
