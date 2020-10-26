import React, { createContext, FC, useReducer } from 'react';

import backgroound from 'static/images/background.jpg';

type S = typeof initialState;

type NewStateAction = Partial<S> | ((prevState: S) => Partial<S>);

type ContextValue = {
  globalState: S;
  setGlobalState: (newState: NewStateAction) => void;
};

const initialState = {
  background: backgroound,
};

export const Store = createContext({} as ContextValue);

const reducer = (prev: S, newState: NewStateAction) => {
  const _newState = typeof newState === 'function' ? newState(prev) : newState;
  return { ...prev, ..._newState };
};

export const Provider: FC<{}> = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};
