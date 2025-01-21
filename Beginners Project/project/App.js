const buttons = document.querySelectorAll(".button");
document.querySelector("body");


buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        // console.log(event);
        // console.log(event.currentTarget);
        if (event.currentTarget.id === "grey") {
            document.body.style.backgroundColor = "grey"    
        }
        if (event.currentTarget.id === "white") {
          document.body.style.backgroundColor = "white";
        }
        if (event.currentTarget.id === "blue") {
          document.body.style.backgroundColor = "blue";
        }
        if (event.currentTarget.id === "red") {
          document.body.style.backgroundColor = "red";
        }        
    })
    
})



// console.log(buttons);//
