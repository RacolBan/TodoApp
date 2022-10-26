import React from 'react';
import { InputForm } from '../Input/InputForm';
export default function Header (): JSX.Element {
  return (
    <div className='header flexRow'>
      <div className="header-title flexColumn">
        <h1>TODO APP </h1>
        <InputForm />
      </div>
    </div>
  );
}
