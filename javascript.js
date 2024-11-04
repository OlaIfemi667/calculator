const NUMBERS = document.querySelectorAll(".number");
let firstVar = "";
let secondVar = ""
function main(){
    textBrowser = document.querySelector("#textBrowser");
    NUMBERS.forEach(element => {
        element.addEventListener("click", () =>{
            firstVar += element.value;
            console.log(element.value)
            textBrowser.textContent = firstVar;

        })
        console.log("inputs onclick set")
    });
}

main();