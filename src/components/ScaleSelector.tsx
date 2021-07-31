import { Button, ButtonGroup } from '@material-ui/core';
import { useMusicContext } from '../context/useMusicContext';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useRef, useEffect, useState } from 'react';


const ScaleSelector = () => {
  const thingRef = useRef("major");
  const scales = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const names = ["major", "minor"];
  const context = useMusicContext();
  const { dispatch } = context
  const [selectedName, setSelectedName] = useState("major");
  const onClick = (root: string) => {
    console.log({ root });
    dispatch({ type: 'SCALE_ROOT_CHANGED', root });
  }

  const handleChange = (event: any) => {
    const name = event.target.value;
    setSelectedName(name);
  }

  useEffect(() => {
    if (selectedName) {
      dispatch({ type: 'SCALE_NAME_CHANGED', name: selectedName });
    }
  }, [selectedName, dispatch]);

  return (
    <div>
      <div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {scales.map(scale => (
            <Button key={scale} onClick={() => onClick(scale)}>{scale}</Button>
          ))}
        </ButtonGroup>
        <FormControl >
          <Select
            ref={thingRef}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedName}
            onChange={handleChange}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default ScaleSelector;
