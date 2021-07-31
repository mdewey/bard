import { Scale } from '@tonaljs/tonal';
import React from 'react';
import { useMusicContext } from '../context/useMusicContext';
import { Button } from '@material-ui/core';
import { useCallback } from 'react';

const CurrentScale = () => {
  const { state } = useMusicContext();
  const { selectedScale } = state
  const onClick = useCallback(() => {
    console.log(selectedScale);
  }, [selectedScale]);

  if (!selectedScale) {
    return (
      <></>
    );
  }
  const scale = Scale.get(`${selectedScale.root} ${selectedScale.name}`).notes;
  console.log({ state, scale });

  return (
    <div className={'selected-scale'}>
      <h2>{selectedScale.root} {selectedScale.name}</h2>
      <ul>
        {scale.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
      <Button onClick={() => onClick()}>Add Scale</Button>
    </div>
  );
}

export default CurrentScale;
