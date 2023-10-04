
const input = document.querySelector(".input-text");
document.querySelectorAll(".button").forEach((button)=>{
    button.addEventListener("click" , (e)=>{
        var a = button.innerHTML;
        input.value = a;
    })
})