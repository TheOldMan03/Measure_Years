function validity(yearInput,monthInput,dayInput,yError,mError,dError){
    const date=new Date();
    var currYear=date.getFullYear();

    if(yearInput.value>=currYear){
        yError.innerHTML="Must be in the year";
        yearInput.style.borderColor="rgb(255, 87, 87)"
        errorLog=true
    }

    else{
        yError.innerHTML=''
        yearInput.style.borderColor="rgb(0,0,0)"
    }

    if(monthInput.value>12 || monthInput.value<0){
        mError.innerHTML="Must be a valid month"
        monthInput.style.borderColor="rgb(255, 87, 87)"
        errorLog=true
    }

    else{
        mError.innerHTML=''
        monthInput.style.borderColor="rgb(0,0,0)"
    }


    if(dayInput.value>31 || dayInput.value<1){
        dError.innerHTML="Must be a valid date"
        dayInput.style.borderColor="rgb(255, 87, 87)"
        errorLog=true
    }

    else{
        dError.innerHTML=''
        dayInput.style.borderColor="rgb(0,0,0)"
    }

    if(errorLog){
        return
    }
}

function NullError(){

    var errorLog=false

    var yearInput=document.getElementById("YEAR")
    var monthInput=document.getElementById("MONTH")
    var dayInput=document.getElementById("DAY");

    var yError=document.getElementById("error-year")
    var mError=document.getElementById("error-month")
    var dError=document.getElementById("error-day")

    if(yearInput.value==='' || monthInput.value==='' || dayInput.value===''){
        if(yearInput.value===''){
            yError.innerHTML="This field is required"
            yearInput.style.borderColor="rgb(255, 87, 87)"
        }

        if(monthInput.value===''){
            mError.innerHTML="This field is required"
            monthInput.style.borderColor="rgb(255, 87, 87)"
        }

        if(dayInput.value===''){
            dError.innerHTML="This field is required"
            dayInput.style.borderColor="rgb(255, 87, 87)"
        }

        errorLog=true
    }

    else{
        yError.innerHTML=''
        mError.innerHTML=''
        dError.innerHTML=''

        yearInput.style.borderColor="rgb(0,0,0)"
        monthInput.style.borderColor="rgb(0,0,0)"
        dayInput.style.borderColor="rgb(0,0,0)"

    }

    if(errorLog){
        console.log("There is an error")
        return 
    }
    console.log("No error")
    validity(yearInput,monthInput,dayInput,yError,mError,dError)
}

