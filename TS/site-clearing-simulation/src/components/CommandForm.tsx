import React, { useState } from 'react';
import { useMap } from '../context/MapProvider';
import { advance, changeDir, endSimulation } from '../actions';

export default function CommandForm(): JSX.Element {
  const [command, setCommand] = useState('');
  const { state, dispatch } = useMap();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const commArray = command.split(' ');
    if (commArray[0].length) {
      const comm = commArray[0];

      if (comm === 'a') {
        if (state.currRow === 0 && state.currCol === -1 && (state.currentDirection !== 'E')) {
          setCommand('');
          return dispatch(endSimulation('Command Exceeds Site Bounds'));
        }
        let steps: number = parseInt(commArray[1]);
        setCommand('');
        dispatch(advance(state, steps));
      } else if (comm === 'q') {
        setCommand('');
        dispatch(endSimulation('Simulation Ended'));
      } else {
        setCommand('');
        dispatch(changeDir(state, comm));
      }
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="text" className="commField" onChange={onChangeHandler} value={command} />
    </form>
  );
}