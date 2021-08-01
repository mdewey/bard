import React from 'react';
import { useMusicContext } from '../context/useMusicContext';
import { Chord } from './Chord';

const SelectedChords = () => {
  const { state, dispatch } = useMusicContext();
  const { scales } = state;
  console.log({ scales });
  if (scales.length === 0) {
    return <></>;
  }
  return <div>
    <ul className="current-chords">
      {scales.map((scale, i) => {
        return <Chord scale={scale} key={i} />
      })}
    </ul>
  </div>;
}

export default SelectedChords;
