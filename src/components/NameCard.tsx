import React from 'react';
import { Result } from './interfaces';

interface NameCardProps {
  result?: Result;
}

const NameCard: React.FC<NameCardProps> = ({ result }) => {
  const name = result?.name
    ? result?.name.charAt(0).toUpperCase() + result.name.slice(1)
    : '';

  if (!name || !result?.gender || !result?.age || !result?.nationality) {
    return (
      <>
        <h2>No results found...</h2>
      </>
    );
  }

  return (
    <>
      <h2>Result:</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h3>{name}</h3>
          <small>
            Link:{' '}
            {`${window.location.protocol}//${window.location.host}${window.location.pathname}?name=${result.name}`}
          </small>
          <p className="mt-3 mb-1">Gender: {result.gender}</p>
          <p className="mb-1">
            Nationality:{' '}
            {result.nationality ? result.nationality.join(', ') : ''}
          </p>
          <p className="mb-1">Age: {result.age}</p>
        </div>
      </div>
    </>
  );
};

export default NameCard;
