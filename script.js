function ageCalc(yearInput,monthInput,dayInput){
    let yearOutput=document.getElementById("y")
    let monthOutput=document.getElementById("m")
    let dayOutput=document.getElementById("d")

    const date=new Date()
    let currYear=date.getFullYear()
    let currMonth=date.getMonth()+1
    let currDay=date.getDate()

    yearOutput.innerHTML=currYear-yearInput.value
    monthOutput.innerHTML=Math.abs(currMonth-monthInput.value)
    dayOutput.innerHTML=Math.abs(currDay-dayInput.value)
}

function dateChecker(yearInput,monthInput,dayInput,dError,elog){

    if(monthInput.value<8){
        if(monthInput.value%2!=0 && monthInput.value!=2){
            if(dayInput.value>31 || dayInput.value<1){
                dError.innerHTML="Must be a valid date"
                dayInput.style.borderColor="rgb(255, 87, 87)"
                elog=true
            }

            else{
                dError.innerHTML=''
                dayInput.style.borderColor="rgb(0,0,0)"
            }
        }

        else if(monthInput.value==2){
            if(yearInput.value%4==0){
                if(dayInput.value>29 || dayInput.value<1){
                    dError.innerHTML="Must be a valid date"
                    dayInput.style.borderColor="rgb(255, 87, 87)"
                    elog=true

                }

                else{
                    dError.innerHTML=''
                    dayInput.style.borderColor="rgb(0,0,0)"
                }
            }

            else{
                if(dayInput.value>28 || dayInput.value<1){
                    dError.innerHTML="Must be a valid date"
                    dayInput.style.borderColor="rgb(255, 87, 87)"
                    elog=true

                }

                else{
                    dError.innerHTML=''
                    dayInput.style.borderColor="rgb(0,0,0)"
                }
            }
        }

        else{
            if(dayInput.value>30 || dayInput.value<1){
                dError.innerHTML="Must be a valid date"
                dayInput.style.borderColor="rgb(255, 87, 87)"
                elog=true

            }

            else{
                dError.innerHTML=''
                dayInput.style.borderColor="rgb(0,0,0)"
            } 
        }
    }

    else{
        if(monthInput.value%2!=0){
            if(dayInput.value>30 || dayInput.value<1){
                dError.innerHTML="Must be a valid date"
                dayInput.style.borderColor="rgb(255, 87, 87)"
                elog=true

            }

            else{
                dError.innerHTML=''
                dayInput.style.borderColor="rgb(0,0,0)"
            } 
        }

        else{
            if(dayInput.value>31 || dayInput.value<1){
                dError.innerHTML="Must be a valid date"
                dayInput.style.borderColor="rgb(255, 87, 87)"
                elog=true
            }

            else{
                dError.innerHTML=''
                dayInput.style.borderColor="rgb(0,0,0)"
            }
        }
    }

    if(elog){
        return elog
    }

    return false

}


function validity(yearInput,monthInput,dayInput,yError,mError,dError){
    const date=new Date();
    var currYear=date.getFullYear()
    var errorLog=false
    // Checking Year validity

    if(yearInput.value>=currYear){
        yError.innerHTML="Must be in the year";
        yearInput.style.borderColor="rgb(255, 87, 87)"
        errorLog=true
    }

    else{
        yError.innerHTML=''
        yearInput.style.borderColor="rgb(0,0,0)"
    }

    // Checking month validity

    if((monthInput.value>12 || monthInput.value<0) && !errorLog){
        mError.innerHTML="Must be a valid month"
        monthInput.style.borderColor="rgb(255, 87, 87)"
        errorLog=true
    }

    else{
        mError.innerHTML=''
        monthInput.style.borderColor="rgb(0,0,0)"
    }

    // checking day validity (skull emoji)
    if(!errorLog){
        var result=dateChecker(yearInput,monthInput,dayInput,dError,errorLog)
        
        if(result){
            return;
        }
    }


    if(errorLog){
        return
    }

    ageCalc(yearInput,monthInput,dayInput)

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

    validity(yearInput,monthInput,dayInput,yError,mError,dError)
}

