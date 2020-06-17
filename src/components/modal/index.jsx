import React from 'react';
import { useSelector } from 'react-redux';

export const ModalError = () => {
  const errors = useSelector((state) => state.reducerErrors.errors);
  if (errors) {
    return (
      <div className="errorModalWrap">
        <div className="errorModal">
          <h3>{errors}</h3>
        </div>
      </div>
    );
  }
  return null;
};

export const ModalSuccess = () => {
  return <div className="successModal">Success!</div>;
};
