import React from 'react';
import { Nullable } from '../types';

interface NameInputProps {
  name: Nullable<string>;
  setName: (name: string) => void;
  handleForm: () => void;
}

export const NameInput: React.FC<NameInputProps> = ({
  name,
  setName,
  handleForm,
}) => {
  return (
    <>
      <div className="form-group text-left">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Enter first name"
            value={name ?? ''}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleForm}
              disabled={name ? false : true}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
