import { useState, useContext, createContext, useCallback } from "react";

const GuidesContext = createContext();

const initialState = {
  shown: false,
};

export default function GuidesContextProvider({ children }) {
  const state = useState(initialState);

  return (
    <GuidesContext.Provider value={state}>{children}</GuidesContext.Provider>
  );
}

export const useGuidesContext = () => {
  const [guidesContextState, setGuidesContextState] = useContext(GuidesContext);

  const setGuidesVisibility = useCallback(
    (payload) => {
      if (typeof payload === "undefined") return;
      setGuidesContextState((oldState) => ({
        ...oldState,
        shown: payload,
      }));
    },
    [setGuidesContextState]
  );

  return { guidesContextState, setGuidesVisibility };
};
