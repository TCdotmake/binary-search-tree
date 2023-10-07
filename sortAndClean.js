import { mergesort } from "./mergesort.js";

export default function sortAndClean(arr) {
  let trimmed = [...new Set(arr)];
  mergesort(trimmed, 0, trimmed.length);
  return trimmed;
}
