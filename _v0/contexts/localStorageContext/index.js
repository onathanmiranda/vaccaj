import {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from "react";

const LocalStorageContext = createContext();

const namespace = "vaccaj";

const serializeMap = (map) => {
  try {
    return JSON.stringify(Array.from(map.entries()));
  } catch (e) {
    console.error(e);
    return null;
  }
};

const unserializeMap = (map) => {
  try {
    return new Map(JSON.parse(map));
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default function LocalStorageContextProvider({ children }) {
  let localStorageContextInitialState;

  if (typeof window !== "undefined") {
    localStorageContextInitialState = window.localStorage.getItem(namespace);
  }

  const state = useState(localStorageContextInitialState);

  return (
    <LocalStorageContext.Provider value={state}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export const useLocalStorageContext = () => {
  const [localStorageContextState, setLocalStorageContextState] =
    useContext(LocalStorageContext);

  useEffect(() => {
    if (!window.localStorage) return;
    if (!localStorageContextState) return;
    window.localStorage.setItem(namespace, localStorageContextState);
  }, [localStorageContextState]);

  const setItem = useCallback(
    (key, value) => {
      setLocalStorageContextState((prevState) => {
        try {
          let newState = prevState ? unserializeMap(prevState) : new Map();
          const valueIsMap = value instanceof Map;
          const _value = valueIsMap ? serializeMap(value) : value;
          newState.set(key, _value);
          newState = serializeMap(newState);
          return newState;
        } catch (e) {
          console.error(e);
          return null;
        }
      });
    },
    [setLocalStorageContextState]
  );

  const getItem = useCallback(
    (key) => {
      try {
        if (!localStorageContextState) return null;
        const unserializedStateMap = unserializeMap(localStorageContextState);
        const value = unserializedStateMap.get(key);
        const unserializedValue = unserializeMap(value);
        if (unserializedValue) return unserializedValue;
        return value;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    [localStorageContextState]
  );

  return {
    setItem,
    getItem,
  };
};
