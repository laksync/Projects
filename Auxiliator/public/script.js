async function start() {
    document.getElementById("logo").style.display="block";
document.getElementById("input-container")
    .classList.add("fixed-bottom");
    console.log("START CALLED");

    const message =
        document.querySelector(".text").value;

    if(message.trim() === "") return;
const mascot = document.getElementById("mascot");

if (mascot) {
    mascot.remove();
}

    document.getElementById("chat-container")
        .style.display = "block";

   

    const response = await fetch("/chat", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: message
        })
    });

    const data = await response.json();

    const chat =
    document.getElementById("chat-container");
document.getElementById("chat-container").style.paddingTop="10px";

console.log("APPENDING");
console.log(message);
console.log(data.reply);
chat.innerHTML += `
    <div class="message">
        <b>You:</b> ${message}
    </div>

    <div class="message">
        <b>Auxiliator:</b> ${data.reply}
    </div>
`;
document.querySelector(".text").value = "";
window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
});
}
function handleEnter(event){
    if(event.key === "Enter"){
        start();
    }
}
let pdfMode = false;

function pdf() {
    pdfMode = !pdfMode;

    const btn = document.getElementById("press");

    if (pdfMode) {
        btn.style.backgroundColor = "#444";
btn.style.border = "1px solid white";
        
    } else {
        btn.style.backgroundColor = "black";
        btn.style.border = "0px";
    }
}
document.getElementById("attach-btn").addEventListener("click", () => {
    document.getElementById("attach").click();
});
    