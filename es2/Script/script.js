function crea() {
    let output="";
    let stabilità="";
    let num;
    let c1=0;
    let c2=0;
    let r=0;
    let tabella = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ];

    for(let i=0;i<tabella.length;i++){
        c1=0;
        output+="<tr>";
        for(let j=0;j<tabella[i].length;j++){
            num=Math.floor(Math.random()*2);
            tabella[i][j]=num;
            output+="<td>"+tabella[i][j]+"</td>";
            if(num==1){
                c1++;
            }
        }
        if(i!=0 && r!=1){
            if(c1==c2){
                stabilità="Il campo di energia è STABILE";
            }
            else{
                stabilità="Il campo di energia è INSTABILE";
                r=1;
            }
        }
        c2=c1;
        output+="</tr>";
    }

    document.getElementById("output").innerHTML = "<table>"+output+"</table>";
    document.getElementById("stabilità").innerHTML = "<br>" + stabilità;
}
