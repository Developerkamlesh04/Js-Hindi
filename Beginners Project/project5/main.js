const isstatu = document.querySelector("h5");
const addFrind = document.querySelector("#add");
let statu = 0;

addFrind.addEventListener("click", function () {
  if (statu == 0) {
    isstatu.innerText = "Friend";
    isstatu.style.color = "green";
    statu = 1;
  } else {
    isstatu.innerText = "Stranger";
    isstatu.style.color = "red";
    statu = 0;
  }
});

const like = document.querySelector("#Like");
let count = 0;
like.addEventListener("click", function () {
  count++;
  like.innerText = count;
});
