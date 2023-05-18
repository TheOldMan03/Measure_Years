
function calculate(){
    const date=new Date();

    let yearInput=document.getElementById("YEAR");
    let monthInput=document.getElementById("MONTH");
    let dayInput=document.getElementById("DAY");

    let yearOuput=document.getElementById("y");
    let monthOutput=document.getElementById("m");
    let dayOutput=document.getElementById("d");

    yearOuput.innerHTML=date.getFullYear()-yearInput.value;
    monthOutput.innerHTML=Math.abs(date.getMonth()-monthInput.value);
    dayOutput.innerHTML=Math.abs(date.getDate()-dayInput.value);

}