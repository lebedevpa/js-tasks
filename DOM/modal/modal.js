const openButton = document.querySelector("#openOverlay");
const body = document.body;
const successModal = createModal("Вопросики обкашливаются!");

openButton.addEventListener ("click", e => {
    body.appendChild(successModal);
})

function createModal (content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    overlayElement.addEventListener("click", e => {
      if (!e.target.classList.contains("content")) {
        closeElement.click();
      }
   })

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href="#";

    closeElement.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    })

    contentElement.innerHTML = content;

    overlayElement.appendChild(containerElement);
    contentElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    
    return overlayElement;
}