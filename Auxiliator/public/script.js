async function start() {
    document.getElementById("logo").style.display="block";
document.getElementById("input-container")
    .classList.add("fixed-bottom");
   

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


const rawHtml = marked.parse(data.reply);
const safeHtml = DOMPurify.sanitize(rawHtml);
chat.innerHTML += `
    <div class="message user">
        <div class="bubble">${message}</div>
    </div>

    <div class="message bot">
        <div class="bubble">${safeHtml}</div>
    </div>
`;
document.getElementById("typing")?.remove();
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
        btn.style.backgroundColor = "#3a5a8a";
btn.style.border = "1px solid white";
        
    } else {
        btn.style.backgroundColor = "black";
        btn.style.border = "0px";
    }
}
document.getElementById("attach-btn").addEventListener("click", () => {
    document.getElementById("attach").click();
});
    