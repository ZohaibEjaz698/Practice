const genColor = () => {
    const code = Math.floor(Math.random() * 16777215);
    const hex = "#" + code.toString(16);
    document.getElementById("code").innerText = hex;
    document.body.style.backgroundColor = hex;
    navigator.clipboard.writeText = hex;
}
genColor();

document.querySelector("#btn").addEventListener("click",genColor);