// merge sort
// no return value
// side effect: sorts given array in place

export function mergesort(
  arr,
  start,
  end,
  fn = (a, b) => {
    return a < b;
  }
) {
  //base case, only looking at one item
  if (end - start === 1) {
    //do nothing
  } else {
    //divide arr in half and sort those halves
    let m = Math.trunc((end - start) / 2) + start;
    mergesort(arr, start, m, fn);
    mergesort(arr, m, end, fn);
    // clone the halves, replace element in original arr in place
    // while merging / sorting the halves
    merge(arr, start, m, end, fn);
  }
}

function merge(arr, start, m, end, fn) {
  const left = structuredClone(arr.slice(start, m));
  const right = structuredClone(arr.slice(m, end));
  let x = 0;
  let y = 0;
  let z = start;
  while (x < left.length && y < right.length) {
    if (fn(left[x], right[y])) {
      arr[z] = left[x];
      x += 1;
    } else {
      arr[z] = right[y];
      y += 1;
    }
    z += 1;
  }
  // put leftover into original array
  if (x >= left.length) {
    while (y < right.length) {
      arr[z] = right[y];
      y += 1;
      z += 1;
    }
  }
  if (y >= right.length) {
    while (x < left.length) {
      arr[z] = left[x];
      x += 1;
      z += 1;
    }
  }
}
