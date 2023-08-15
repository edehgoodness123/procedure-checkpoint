// Function to calculate the dot product of two vectors
function dot_product(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error("Vectors must have the same length");
  }

  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }

  return product;
}

// Function to check if two vectors are orthogonal
function areOrthogonal(v1, v2) {
  const product = dot_product(v1, v2);
  return product === 0;
}

// Example vectors
const vector1 = [3, 1];
const vector2 = [-1, 3];

// Check if the vectors are orthogonal
if (areOrthogonal(vector1, vector2)) {
  console.log("The vectors are orthogonal.");
} else {
  console.log("The vectors are not orthogonal.");
}




function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const currentElement = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example array
  const unsortedArray = [12, 11, 13, 5, 6];
  const sortedArray = insertionSort(unsortedArray);
  
  console.log("Sorted Array:", sortedArray); // Output: [5, 6, 11, 12, 13]
  