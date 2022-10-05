//NPM Packages
import { useState, Dispatch, SetStateAction } from "react";

type SetValue<T> = Dispatch<SetStateAction<T>>;

export default function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const sessionStorageItems = sessionStorage.getItem(key);
      return sessionStorageItems
        ? JSON.parse(sessionStorageItems) as T
        : initialValue;
    } catch (error: any) {
      console.error("Error occured: ", +error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      setStoredValue(value);
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error: any) {
      console.error("Error occured: ", +error);
    }
  };
  return [storedValue, setValue];
}

// export default function useSessionStorage<T>(
//   key: string,
//   initialValue: T
// ): {
//   value: T;
//   setValue: (value: T) => void;
// } {
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     try {
//       const sessionStorageItems = sessionStorage.getItem(key);
//       return sessionStorageItems
//         ? JSON.parse(sessionStorageItems)
//         : initialValue;
//     } catch (error: any) {
//       console.error("Error occured: ", + error);
//       return initialValue;
//     }
//   });

//   const setValue = (value: T) => {
//     try {
//       setStoredValue(value);
//       sessionStorage.setItem(key, JSON.stringify(value));
//     } catch (error: any) {
//       console.error("Error occured: ", +error);
//     }
//   };
//   return { value: storedValue, setValue };
// }
