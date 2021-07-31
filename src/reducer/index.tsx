// state is the current value of our state object

import {
  AppContextInterface,
  AppState,
} from '../context/useMusicContext'

type Action =
  | { type: 'SCALE_ROOT_CHANGED'; root: string }
  | { type: 'SCALE_NAME_CHANGED'; name: string }
  | { type: 'SCALE_ADDED_TO_SONG'; name: string }


// action is the data we received from our dispatch
const reducerFunction = (state: AppState, action: Action): AppState => {
  console.log('dispatched', { action, state });

  switch (action.type) {
    case 'SCALE_ROOT_CHANGED':
      return {
        ...state,
        selectedScale: {
          ...state.selectedScale,
          root: action.root,
        },
      }
    case 'SCALE_NAME_CHANGED':
      return {
        ...state,
        selectedScale: {
          ...state.selectedScale,
          name: action.name,
        },
      }
    case 'SCALE_ADDED_TO_SONG':
      return {
        ...state,
        scales: state.scales.concat(action.name),
      }
    default:
      // Returns a new COMPLETE state
      // or I could throw an error
      return state
  }
}

export default reducerFunction
