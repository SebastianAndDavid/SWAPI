import React from 'react';

function PeopleDetail() {
  return (
    <div>
      People Detail Component
      {/* one div will render people details w/o any endpoint */}
      {/* other div will render multiple <components/> that catch props to render the endpoint info */}
      {/* <component vehicle={vehicle} homeworld={homeworld}/> */}
    </div>
  );
}

export default PeopleDetail;
