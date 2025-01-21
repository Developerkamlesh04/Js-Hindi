const city = document
  .getElementById("city")
  .addEventListener("click", function () {
    alert("You clicked on city");
  });

const food = document
  .getElementById("food")
  .addEventListener("click", function () {
    alert("You clicked on food");
  });

const animal = document
  .getElementById("animal")
  .addEventListener("click", function () {
    alert("You clicked on animal");
  });

const nature = document
  .getElementById("nature")
  .addEventListener("click", function () {
    alert("You clicked on nature");
  });

const tech = document
  .getElementById("tech")
  .addEventListener("click", function () {
    alert("You clicked on tech");
  });

document.getElementById("google").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    alert("You clicked on google");
  });

//? click the image to see the deleted image

document.querySelector("#images").addEventListener("click", function (e) {
    let removeItem = e.target.parentNode;
    removeItem.remove();

    //! removeItem.parentNode.removeChild(removeItem);
});