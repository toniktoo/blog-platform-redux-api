import React from 'react';

export const ModalError = ({ errors }) => {
  return (
    <div className="errorModal">
      <h3>{errors}</h3>
    </div>
  );
};

export const ModalSuccess = () => {
  return <div className="successModal">Success!</div>;
};
