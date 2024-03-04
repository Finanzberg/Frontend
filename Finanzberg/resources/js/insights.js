function load_table() {
    send("GET", "data/statements", {}, function (response, status) {
        let json = JSON.parse(response);
        let table = document.getElementById("table");
        console.log(json);


        json.forEach(function (json) {
            console.log(json);
            let node = document.getElementById("insight-example").cloneNode(true);
            node.id = "";
            let date = new Date(json.date)
            let dateName = date.toLocaleDateString()
            node.innerHTML =
                "                                <td class='jump-" + json.date + "'>" + dateName + "</td>\n" +
                "                                <td>" + json.id + "</td>\n" +
                "                                <td>" + json.bankName + "</td>\n" +
                "                                <td>" + (json.deposit - json.withdrawal) + "</td>\n" +
                "                                <td>" + json.balance + "</td>\n" +
                "                                <td>" + json.category + "</td>\n" +
                "                                <td>" + json.description + "</td>\n";

            table.appendChild(node);
        })
    })
}