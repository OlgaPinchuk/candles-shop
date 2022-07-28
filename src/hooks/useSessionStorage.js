//NPM Packages
import { useState } from "react";

export default function useSessionStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {

    try {
      const sessionStorageItems = sessionStorage.getItem(key);
      return sessionStorageItems ? JSON.parse(sessionStorageItems) : initialValue;
    } 
    catch (error) {
      console.error("Error occured: ", + error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error occured: ", + error);
    }
  };
  return [storedValue, setValue];
}