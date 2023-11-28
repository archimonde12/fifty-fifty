const button = document.getElementById("button")
button.onclick = () => {
    const req = document.getElementById("req").value
    let res = document.getElementById("res")
    const array_100 = Array(100).fill(0).map((n, i) => n + i)
    const message = req.replace(/ /g, '').replaceAll("\n", "").split(",").map(Number)
    console.log({ message })
    res.value = array_100.filter(el => !message.includes(el))
}

function copyText() {
    // Get the text field
    var copyText = document.getElementById("res");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value).then(function (x) {
        alert("Link copied to clipboard: " + copyText.value);
    });
}