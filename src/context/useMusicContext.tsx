import { createContext, useContext } from 'react'


export interface AppState {
  selectedScale: {
    name: string,
    root: string
  }
}

export interface AppContextInterface {
  state: AppState
  dispatch: any
}

// Used to setup the provider
export const MusicContext = createContext<AppContextInterface>(
  {} as AppContextInterface
)

// Used to be able to get data from the context
export const useMusicContext = () => useContext(MusicContext)
