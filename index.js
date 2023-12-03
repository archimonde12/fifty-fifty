const button = document.getElementById("button")
const getReverseArray100 = (arr) => {
    const array_100 = Array(100).fill(0).map((n, i) => n + i)
    return array_100.filter(el => !arr.includes(el))
}
const reverse = () => {
    const req = document.getElementById("req").value
    let res = document.getElementById("res")
    let copy_btn = document.getElementById("copy-btn")
    const raw_message = req.trim()
    if (raw_message.split(" ").every(isNumeric)) {
        const message = raw_message.split(" ").map(Number)
        const value = getReverseArray100(message)
        const heatmap = document.getElementById("heatmap-output")
        let new_heatmap = ""
        for (let i = 0; i < 100; i++) {
            new_heatmap += (value.includes(i) ? `<p class="black-rec"></p>` : `<p class="white-rec"></p>`)
        }
        heatmap.innerHTML = new_heatmap
        res.value = value.map(el => el < 10 ? "0" + el : el).join(" ")
        copy_btn.innerHTML = `Sao chép ${value.length} số`
        copy_btn.disabled = false
    } else {
        res.value = "Dãy số không hợp lệ"
    }
 
}
button.onclick = () => reverse()

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
        alert("Nội dung sao chép: " + copyText.value);
    });
}
function copyInputText() {
    // Get the text field
    var copyText = document.getElementById("req");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value).then(function (x) {
        alert("Nội dung sao chép: " + copyText.value);
    });
}

const randomEngine = () => {
    let new_50_array = [getRandomNumberIn(0, 100)]
    for (let i = 0; i < 49; i++) {
        let value = new_50_array[0]
        while (
            new_50_array.includes(value)
        ) {
            value = getRandomNumberIn(0, 100)
        }
        new_50_array.push(value)
    }
    new_50_array.sort((a, b) => a - b)
    return new_50_array
}

const randomEngineFocus = () => {
    let random = getRandomNumberIn(0, 35)
    let range = 65
    let new_50_array = [getRandomNumberIn(random, random + range)]
    for (let i = 0; i < 44; i++) {
        let value = new_50_array[0]
        while (
            new_50_array.includes(value)
            // || ignore_values.includes(value)
        ) {
            value = getRandomNumberIn(random, random + range)
        }
        new_50_array.push(value)
    }
    for (let i = 0; i < 5; i++) {
        let value = new_50_array[0]
        while (
            new_50_array.includes(value)
            // || ignore_values.includes(value)
        ) {
            value = getRandomNumberIn(0, 100)
        }
        new_50_array.push(value)
    }
    new_50_array.sort((a, b) => a - b)
    // const array_100 = Array(100).fill(0).map((n, i) => n + i)
    // const reverse_new_50_array = array_100.filter(el => !new_50_array.includes(el))

    // for (let i = 0; i < 50; i++) {
    //     const found_index = reverse_new_50_array.findIndex(el => el === ignore_values[i])
    //     if (found_index >= 0) {
    //         let value = reverse_new_50_array[found_index]
    //         while (
    //             reverse_new_50_array.includes(value) ||
    //             value === ignore_values[i]
    //         ) {
    //             value = getRandomNumberIn0To99()
    //         }
    //         reverse_new_50_array[found_index] = value
    //     }
    // }
    return new_50_array
}

function random() {
    // Get the text field
    const random = randomEngine()
    printInput(random)
}

function randomFocus() {
    // Get the text field
    const random = randomEngineFocus()
    printInput(random)
}

function printInput(random) { 
    const req = document.getElementById("req")
    req.value = random.map(el => el < 10 ? "0" + el : el).join(" ")
    const heatmap = document.getElementById("heatmap-input")
    let new_heatmap = ""
    for (let i = 0; i < 100; i++) {
        new_heatmap += (random.includes(i) ? `<p class="black-rec"></p>` : `<p class="white-rec"></p>`)
    }
    heatmap.innerHTML = new_heatmap
    reverse()
}

function getRandomNumberIn(from, to) {
    return from + Math.floor(Math.random() * (to - from))
    // return getRandomNumberIn0To9() * 10 + getRandomNumberIn0To9()
}

function getRandomNumberIn0To9() {
    return Math.floor(Math.random() * 10)
}