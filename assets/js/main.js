const birthDate = document.getElementById("birthDate")
const calculateBtn = document.getElementById("calculate")
const resetBtn = document.getElementById("reset")
const resultContent = document.getElementById("result")

calculateBtn.addEventListener('click', function() {
   showAge()
})

resetBtn.addEventListener('click', function() {
    clearResult()
})


function calculateAge(dob) {
    //TODO Refactor the code
    const DEFAULT_UTC_YEAR = 1970    
    let birthTime = new Date(dob).getTime()
    //calculate month difference from current date in time  
    let month_diff = Date.now() - birthTime;  
    
    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);   
          
    //extract year from date      
    let year = age_dt.getUTCFullYear();  
          
    //now calculate the age of the user  
    let age = Math.abs(year - DEFAULT_UTC_YEAR); 

    return age;
}

function showAge(){
    let age = calculateAge(birthDate.value)
    if(isNaN(age)){
        resultContent.innerHTML = `<span style="color:red;">Birthdate is required.</span>`
    }else if(age === 0){
        resultContent.innerHTML = `<span style="color:red;">Birth year should not be current year.</span>`
    }else{
        resultContent.innerText = `Your age is ${age} year old`
    }
}


function clearResult() {
    resultContent.innerText = ''
}