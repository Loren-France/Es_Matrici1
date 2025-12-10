function crea() {
let output="";
let val=[
    [210,310],
    [230,280]
];

val[0][0] = val[0][0] + (val[0][0] * 20 / 100);
val[0][1] = val[0][1] + (val[0][1] * 20 / 100);
val[1][0] = val[1][0] + (val[1][0] * 20 / 100);
val[1][1] = val[1][1] + (val[1][1] * 20 / 100);

output = tabella(val);

document.getElementById("output").innerHTML = output;
}

function tabella(val) {
    let table = "";

    table += "<caption>Costi dopo la campagna pubblicitaria:</caption>";
    table += "<tr><th></th><th>A</th><th>B</th></tr>";
    table += "<tr><th>1</th><td>" + val[0][0] + "</td><td>" + val[0][1] + "</td></tr>";
    table += "<tr><th>2</th><td>" + val[1][0] + "</td><td>" + val[1][1] + "</td></tr>";

    return table;
}
