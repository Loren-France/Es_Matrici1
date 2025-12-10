function crea() {
let output="";
let val=[
    [210,310],
    [230,280]
];

val[1][1] = val[1][1] + (val[1][1]*20/100);
val[1][2] = val[1][2] + (val[1][2]*20/100);
val[2][1] = val[2][1] + (val[2][1]*20/100);
val[2][2] = val[2][2] + (val[2][2]*20/100);

output = tabella(val);

document.getElementById("output").innerHTML = output;
}

function tabella(val) {
let table="";

    table+="<caption>Costi dopo la campagna pubblicitaria: <caption>";
    table+="<tr><th></th><th>A</th><th>B</th></tr>";
    table+="<tr><th>1</th><td>220</td><td>310</td></tr>";
    table+="<tr><th>2</th><td>230</td><td>280</td></tr>";

    return table;
}