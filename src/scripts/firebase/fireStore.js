// NPM packages
import { collection, getDocs, query, orderBy } from "firebase/firestore/lite";

// Project files
import { fireStoreDatabase } from "./firebase";

// Read collection
export async function getCollection(path) {
  const collectionReference = collection(fireStoreDatabase, path);
  const collectionQuery = query(
    collectionReference,
    orderBy("discount", "desc")
  );
  const snapshot = await getDocs(collectionQuery);
  if (snapshot.empty) {
    throw new Error("Something goes wrong. Please check the endpoint");
  }

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
