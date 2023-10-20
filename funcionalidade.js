function tabuada(){
    var num = window.document.getElementById("num")
    var end = window.document.getElementById("end")
    var n = Number(num.value)
    var e = Number(end.value)
    var x = 0
    var r = ""
    var res = window.document.getElementById("resposta")
    if (n == "" || e == ""){
        window.alert("DIGITE TODOS OS NÚMEROS SOLICITADOS")
    }else{
    res.innerHTML = `A tabuada do ${n} é: <br>`
    do{
        r= n*x
        res.innerHTML += `${x} X ${n} = ${r} <br>`
        x++
    }
    while (x <= e)
    }   
}