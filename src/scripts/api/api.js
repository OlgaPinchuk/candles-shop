// Project files
import { getCollection } from "../firebase/fireStore";

const ENDPOINT = "products";

const API = {
  productsPath: ENDPOINT,
  async getProducts(onSuccess, onError) {
    try {
      const data = await getCollection(this.productsPath);
      onSuccess(data);
    } catch (e) {
      onError(e);
    }
  },
};

export default API;
