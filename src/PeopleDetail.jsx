import { useNavigate } from 'react-router-dom';
import './App.css';

function PeopleDetail({ people }) {
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
    </div>
  );
}

export default PeopleDetail;
