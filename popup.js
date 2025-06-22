document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const p = document.getElementById("display");

    button.addEventListener("click", () => {
        p.innerText = "Clicked!";
    });
    console.log("hello");

});

