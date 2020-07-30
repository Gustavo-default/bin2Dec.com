window.onload = function() {
    var btn = document.getElementById("conv");
    var btn2 = document.getElementById("limpar");
    btn.addEventListener("click", comeco)
    btn2.addEventListener("click", apaga)
}
function apaga() {
    document.getElementById("bin").value = "";
    document.getElementById("dec").value = "";
    document.getElementById("bin").style.background = "#FFF";
}
function comeco() {
    var binary = document.getElementById("bin");
    if (teste(binary) == true) {
        var decimal = document.getElementById("dec");
        decimal.value = converte(binary);
    }
}
function teste(bn) {
    if (bn.value == "") {
        bn.focus();
        bn.style.background = "#F7F9F9";
        return false;
    }
    else if(bn !== ""){
        bn.style.background = "#FFF";
        for(var a=0; a<bn.value.length; a++){
            if ( bn.value.charAt(a) != 1 && bn.value.charAt(a) != 0){
                bn.style.background = "#fee6e6";
                bn.focus();
                return false;
            }
        }
        return true;
    }
}
function converte(bn) {
    var dc = 0;
    var cont = bn.value.length - 1;
    for (var a=0; a<bn.value.length; a++){
        dc += parseInt(bn.value.charAt(a), 10) * Math.pow(2, cont);
        cont--;
    }
    return dc;
}