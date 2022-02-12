const birthDate = document.getElementById("birthDate")
const calculateBtn = document.getElementById("calculate")
const resetBtn = document.getElementById("reset")
const resultContent = document.getElementById("result")

calculateBtn.addEventListener('click', function(){
    let age = calculateAge(birthDate.value)
    resultContent.innerText = `Your age is ${age}`
})

resetBtn.addEventListener('click', function(){
    clearResult()
})

function calculateAge(dob) {
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

function clearResult() {
    resultContent.innerText = ''
}