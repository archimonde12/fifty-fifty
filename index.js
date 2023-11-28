const button = document.getElementById("button")
button.onclick = () => {
    const req = document.getElementById("req").value
    let res = document.getElementById("res")
    let copy_btn = document.getElementById("copy-btn")
    const array_100 = Array(100).fill(0).map((n, i) => n + i)
    const raw_message = req.trim()
    if(raw_message.split(" ").every(isNumeric)){

        const message = raw_message.split(" ").map(Number)
        const value = array_100.filter(el => !message.includes(el))
        res.value = value.map(el=>el<10?"0"+el:el).join(" ")
        copy_btn.innerHTML= `Copy ${value.length} số`
        copy_btn.disabled=false
    } else {
        res.value= "Dãy số không hợp lệ"
    }
    
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
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