import http from "k6/http";
import { check } from "k6";

export const getSingleProductURL = "https://dummyjson.com/products/1";

export function getSingleProduct() {
    const response = http.get(getSingleProductURL);
    if (response.status != 200) {
        console.log("Get single product failed - Status code is: " + response.status);
        console.log("Get single product failed - Body: " + response.body);
    }
    check(response, { "Get single product code MUST be 200": (res) => res.status == 200});
    return response;
}