import { mergesort } from "./mergesort.js";
import randomNum from "./randomNum.js";
export function app() {
  const arr = [];
  for (let i = 0; i < 21; i++) {
    arr.push(randomNum(99));
  }
  console.log(arr);
  mergesort(arr, 0, arr.length);
  console.log(arr);
}
