let GetDobElement = document.getElementById('dob');
GetDobElement.addEventListener('change', ()=>{
    let DateOfBirth = document.getElementById('dob').value;
    let [year, month , date] = DateOfBirth.split("-");
    year = Number(year);
    month = Number(month);
    date = Number(date);
    let current  = new Date();
    let currentYear = current.getFullYear();  
    let currentMonth = current.getMonth()+1;  
    let currentDate = current.getDate();  
    
    let yearage =  currentYear - year;
    let monthage;
    let dateage;

    if (currentMonth >= month)          
        monthage = currentMonth - month;  
    else {  
        yearage--;  
        monthage = 12 + currentMonth - month;  
    }  

    if (currentDate >= date)  
        //get days when the current date is greater  
        dateage = currentDate - date;  
    else {  
      monthage--;  
      dateage = 31 + currentDate - date;  
  
      if (monthage < 0) {  
        monthage = 11;  
        yearage--;  
      }  
    }  
    if(yearage < 0 ){
        document.querySelector('.error').style.display = 'block';
    }
    else{
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.desc').style.display = 'block';
        document.querySelector('.age').style.display = 'block';
        document.getElementById('years').innerText = yearage;
        document.getElementById('months').innerText = monthage;
        document.getElementById('days').innerText = dateage;
    }
})