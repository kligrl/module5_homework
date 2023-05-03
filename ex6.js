let arr = [1, 1, 1, 1, 1];
let check = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (check != arr[i]) {
    console.log("false");
    break;
  }

  if (i == arr.length - 1)
    console.log("true");
}