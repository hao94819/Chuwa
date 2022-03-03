if (1 === 1) {
  console.log("yes");
}

const numbrs = [1, 2, 3, 4, 5];

console.log(
  numbrs.every((ele) => {
    return ele > 0;
  })
);
console.log(
  numbrs.some((ele) => {
    return ele > 4;
  })
);

numbrs.forEach((ele) => console.log(ele * 2));
console.log(
  numbrs.map((ele) => {
    return ele * 2;
  })
);

function showText() {
  const content = document.getElementById("inputBox2").value;
  console.log(content);
}
