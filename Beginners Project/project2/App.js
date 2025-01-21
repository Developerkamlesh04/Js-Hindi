const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    // clear input fields
    form.reset();
  
  if (height === "" || height < 0 || isNaN(height)) {
      result.innerHTML = `Please given the valid height: ${height}`;
      
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please given the valid height: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result.innerHTML += `<p>Under Weight</p>`;
      result.style.color = "blue";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML += `<p>Normal Range</p>`;
      result.style.color = "green";
    } else {
      result.innerHTML += `<p>Over Weight</p>`;
      result.style.color = "red";
    }
  }
});
