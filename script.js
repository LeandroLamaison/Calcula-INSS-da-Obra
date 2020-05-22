
function inssObra() {
    var val = document.getElementById('val').value;
    var area = document.getElementById('area').value;

    if(isNaN(parseFloat(val)) || isNaN(parseFloat(area))) return alert("Os campos precisam conter valores numéricos");
    if(parseFloat(val) < 0 || parseFloat(area) < 0) return alert("Os campos precisam conter valores positivos");

    
    var result;
    if(area < 100) {
        result = val * area * 0.04;
    }
    else if(area < 200) {
        result = (100 * 0.04  + (area - 100) * 0.08) * val;
    }
    else if(area < 300) {
        result = (100 * 0.04 + 100 * 0.08 + (area - 200) * 0.14) * val;
    }
    else {
        result = (100 * 0.04 + 100 * 0.08 + 100 * 0.14 + (area - 300) * 0.2) * val;
    }


    var patronal = result * 0.2;
    var segurado = result * 0.08;
    var rat = result * 0.03;
    var others = result * 0.058;

    var total = patronal + segurado + rat + others;

    document.getElementById('patronal').innerHTML = "R$" + patronal.toFixed(2);
    document.getElementById('segurado').innerHTML = "R$ " + segurado.toFixed(2);
    document.getElementById('rat').innerHTML = "R$ " + rat.toFixed(2);
    document.getElementById('others').innerHTML = "R$ " + others.toFixed(2);
    document.getElementById('total').innerHTML = "R$ " + total.toFixed(2);

}

function submitForm(e) {
    e.preventDefault();
    inssObra();
}

document.getElementById('form').onsubmit = function(e) {submitForm(e)};