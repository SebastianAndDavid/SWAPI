import { useNavigate, useParams } from 'react-router-dom';
import './App.css';

function PeopleDetail({ people }) {
  const id = useParams();
  console.log('id', id);
  console.log('peopleDetail', people);

  const navigate = useNavigate();

  return (
    <div className="detail-page">
      <header>
        <div className="button" onClick={() => navigate('/')}>
          Go Back
        </div>
      </header>
      <div>People Detail Component</div>
      <p>{people[1].name}</p>
    </div>
  );
}

export default PeopleDetail;
