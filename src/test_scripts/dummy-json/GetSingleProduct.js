import { getSingleProduct } from "../../services/dummyJSON/product.js";

export let options = { vus: 5, duration: "5s" };

export default function () {
    getSingleProduct();
}