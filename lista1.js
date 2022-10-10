function calcularLanche(){

    let quantsand = parseInt(prompt("informe a quantidade de sanduiches a ser fabricada"));
    let qntpres = quantsand*0.1;
    let qntque = quantsand*0.05;
    let qnthamb = quantsand*0.1;
    
    console.log("A quantidade de presunto é:",qntpres);
    console.log("A quantidade de queijo é:",qntque);
    console.log("A quantidade de hamburger é:",qnthamb);

}
function converterTemp(){
    let celcius = parseInt(prompt("Informe a temperatura em graus Celcius:"));
    let fahrenheit = (celcius*1.8)+32;

    console.log("A temperatura em Fahrenheit é: ",fahrenheit);
}   
