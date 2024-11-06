var message = document.querySelector('#welcome')

const hours = new Date().getHours()

const isMorning= hours >= 4 && hours < 12
const isAfternoon = hours >= 12 && hours < 17
const isEvening = hours >= 17 || hours < 4

if (isMorning) 
{
    message.textContent = "Good Morning, Welcome to Ismael's Page"
}
else if (isAfternoon) 
{
    message.textContent = "Good Afternoon, Welcome to Ismael's Page"
}
else if (isEvening) 
{
    message.textContent = "Good Evening, Welcome to Ismael's Page"
 }


 localStorage.setItem("It's a secret to everybody", "Donald Trump won the elections")