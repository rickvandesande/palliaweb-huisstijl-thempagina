let toggle = document.querySelector('#toggle1');
let text = document.querySelector('#uitklapper1');
let svg = document.querySelector('#toggle1 svg');

function toggleText() {
    text.classList.toggle("visible");
}
function rotateSVG() {
    svg.classList.toggle("rotate");
}
toggle.addEventListener("click", () => {
    toggleText();
    rotateSVG();
});