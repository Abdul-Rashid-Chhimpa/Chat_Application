const socket = io();
const input = document.getElementById("message");
const btn = document.getElementById("btn");
const displayMsg = document.getElementById("displayMsg");
const Exit = document.getElementById("exit");





socket.on("message", (message) => {
    const label1 = document.createElement("label");
    label1.className = "chat-outgoing flex gap-2 ml-2 py-2 w-64  items-end";

    label1.innerHTML = `
     <img src="./IMG/chatbot1.png" alt="" class="h-6 w-6">
        <ul class="w-60 shadow-lg rounded py-3 md:w-auto" >
            <li class="text-sm ml-2 text-slate-100 mr-2">${message}</li>
        </ul>
        <br>
    `;
    displayMsg.appendChild(label1);

});

btn.addEventListener("click", () => {

    const message = input.value;
    socket.emit("user-message", message);
    // console.log(`hello 1 : ${message}`);

    const label = document.createElement("label");
    label.className = "chat-incoming flex gap-2 justify-end  mr-1 ml-30 items-end";
    label.innerHTML = `
     <ul class="w-60 shadow-lg rounded py-3 md:w-auto">
        <li class="text-sm ml-2 text-slate-400 mr-2">${message}</li>
    </ul>
    <img src="./IMG/i-am.png" class="h-6 w-6" alt="">
    <br>
    `;
    displayMsg.appendChild(label);
    input.value = "";
    // console.log(message);

});