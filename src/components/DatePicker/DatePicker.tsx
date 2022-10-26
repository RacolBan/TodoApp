import React from 'react';

interface DealineProps {
  deadline: string
  onChangeDeadline: React.Dispatch<React.SetStateAction<string>>
}

export const DatePicker = ({ deadline, onChangeDeadline }: DealineProps): JSX.Element => {
  return (
    <>
      <input className='input date'
        type='datetime-local'
        name='deadline'
        value={deadline}
        onChange={(e) => onChangeDeadline(e.target.value)}
      />
    </>
  );
};
