// Project files
import useSessionStorage from "./useSessionStorage";

import { Favorite } from "../interfaces/interfaces";

export default function useFavorites() {
  const STORAGE_KEY = "favorites";
  return useSessionStorage<Array<Favorite>>(STORAGE_KEY, []);
}
