import React from 'react';

function Signout({ handleSignout }) {
  return (
    <div>
      <h1>Signout Page</h1>
      <p>Are you sure you want to sign out?</p>
      <button onClick={() => handleSignout()}>Sign Out</button>
    </div>
  );
}

export default Signout;


