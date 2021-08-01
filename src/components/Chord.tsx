import { Scale } from '@tonaljs/tonal';
import React from 'react';



interface IChordProps {
  scale: string
}

const Chord = ({ scale }: IChordProps) => {
  const notes = Scale.get(scale).notes;

  return (
    <li>
      <h3>{scale}</h3>
      <ul>
        {notes.map(note => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </li>
  );
}

export { Chord };
