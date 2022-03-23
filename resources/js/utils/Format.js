//
export function lead_zero(num, length = 2, pad = "0") {
    return num.toString().padStart(length, pad)
}

//convert larevl timestamp to a readble date
export function timestampToDate(timestamp, time = false) {
    const date = new Date(timestamp);
    return (`${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${time ? `${lead_zero(date.getHours())}:${lead_zero(date.getMinutes())}:${lead_zero(date.getSeconds())}` : "" }`)
}

//decode an html entity and return a string
export function decodeEntity(inputStr) {
    let textarea = document.createElement("textarea");
    textarea.innerHTML = inputStr;
    return textarea.value;
}
