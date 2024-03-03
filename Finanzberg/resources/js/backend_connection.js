let api = "https://api.finanzberg.online/api/v1/";

function send(method, apiSection, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open(method, api + apiSection, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText, xhr.status);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

async function load_profile_picture(){
    send("GET", "account/avatar", {}, function (response, status) {
        if (status === 200) {
            localStorage.setItem("profile_picture", response);
            document.getElementsByClassName('avatar').forEach(element => {
                element.style = 'background-image: '+ response;
            });
        }
        
    })
}
