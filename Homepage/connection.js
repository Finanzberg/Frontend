let api = "http://localhost:8080/api/v1/";

function send(method, apiSection, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, api + apiSection, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText, xhr.status);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.withCredentials = true;
    xhr.send(data);
}
