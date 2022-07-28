// Project files
import useSessionStorage from './useSessionStorage';

export default function useFavorites() {
  const STORAGE_KEY = "favorites";

  return useSessionStorage(STORAGE_KEY, []);
}
