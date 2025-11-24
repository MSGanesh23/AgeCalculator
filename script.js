

function displayDate () {

const dob = document.getElementById("birthday");

const dobValue = dob.value;

const dobDate = new Date(dobValue);

const birthYear = dobDate.getFullYear();

const birthMonth = dobDate.getMonth()+1;

const birthDate = dobDate.getDate();

 const today = new Date();

const year = today.getFullYear();

const month = today.getMonth()+1;

const date = today.getDate();

// alert(`Today Date : ${year}/${month}/${date} `);

// alert(`Birthday Date : ${birthYear}/${birthMonth}/${birthDate} `);

const yearDiff = year-birthYear;

const age = document.getElementById("yourage");

if(birthdayHasPassed(month,date,birthMonth,birthDate))
{
    age.innerHTML = yearDiff;
}
else
{
    age.innerHTML = yearDiff-1;
}



}


function birthdayHasPassed(month,date,birthMonth,birthDate) {

    if(month>=birthMonth && date>=birthDate)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function reloadPage () {
    window.location.reload();
    document.getElementById("form").reset();
    
}










