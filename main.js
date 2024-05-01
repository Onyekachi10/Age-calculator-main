
    
    "uses strict"

    const form = document.querySelector("#form")
    const day = document.querySelector("#day")
    const month = document.querySelector("#Month")
    const year = document.querySelector("#Year")
    
    

    form.addEventListener("click", () => {
         validateForm = () => {
      const date = new Date()
     const actualDay = date.getDate()
     const actualMonth = date.getMonth() + 1
     const actualYear = date.getFullYear()
     let formLock = false

       const dayLock = errorMessages(Number(day.value))
       const monthLock = errorMessagesMonth(Number(month.value))
       const yearLock = errorMessagesYears(Number(year.value))
       if (dayLock === false && monthLock === false 
         && yearLock === false && formLock === false) {
          formLock = true
          calculate()
       }

   function  calculate ()  {
        let yearGiven = actualYear - Number(year.value) - 1
        let monthGiven =11 - Number(month.value) + actualMonth
         if (monthGiven >= 12) {
            monthGiven -= 12
            yearGiven++
         }
    
         let dayGiven = 31 - Number(day.value) + actualDay
         if (dayGiven >= 31) {
            dayGiven -= 31
            monthGiven++
         }
    
console.log(yearGiven,monthGiven,dayGiven)
result(yearGiven,monthGiven,dayGiven)

     }
     

    function  leapYearCheck(year)  {
      return (year % 4 === 0 && year % 100 !== 0) || 
      year % 400 === 0
  }

   function daysExcess(months) {
       const leapYear = leapYearCheck(Number(day.value))
       if (months === 4 || months === 6 || 
         months === 9 || Number(`${month}`)) {
            return 1
     }

     else if (months === 2) {
      if (leapYear === false) {
         return 3
      }
      else {
         return 2
      }
     }

   else {
      return 0
   }

   }
 
    function errorMessages(days)  {
      let excess = daysExcess(Number(`${month.value}`))
      const dayError = document.querySelector(".day-err")
      const dayHead = document.querySelector(".dayh2")


      if (days === 0) {
         dayError.style.visiblilty = 'visible'
        dayError.innerHTML = "This field is required";
        dayHead.style.color = `hsl(0, 100%, 67%)`
        day.style.border = `1px solid hsl(0, 100%, 67%)`
      }

   else  if (days > 31 - excess || days < 1 || isNaN(days) ) {
      dayError.style.visiblilty = 'visible'
        dayError.innerHTML = "Must be a valid day"
        dayHead.style.color = `hsl(0, 100%, 67%)`
        day.style.border = "1px solid hsl(0, 100%, 67%)"
    }

    else {
    dayError.style.visiblilty = 'hidden'
      day.style.border = "1px solid hsl(259, 100%, 65%)"
      dayHead.style.color = `hsl(0, 0%, 8%)`
        return false
   }

     }
   
function  errorMessagesMonth(months) {
        const MonthError = document.querySelector(".month-err")
      const monthHead = document.querySelector(".monthh2")

      if (months == 0) {
         MonthError.style.visiblilty = 'visible'
         MonthError.innerHTML = "This field is required";
         monthHead.style.color = `hsl(0, 100%, 67%)`
         month.style.border = `1px solid hsl(0, 100%, 67%)`

         return true
      }

else if (months > 12 || months < 1 || isNaN(months) == true) {
   MonthError.style.visiblilty = 'visible'
   MonthError.innerHTML = "Must be a valid month";
   monthHead.style.color = `hsl(0, 100%, 67%)`
   month.style.border = `1px solid hsl(0, 100%, 67%)`

   return true
}

else {
   MonthError.style.visiblilty = 'hidden'
      month.style.border = "1px solid hsl(259, 100%, 65%)"
      monthHead.style.color = `hsl(0, 0%, 8%)`


        return false
}

  }


function errorMessagesYears (years) {
   const yearError = document.querySelector(".year-err")
   const yearHead = document.querySelector(".yearh2")

   if (years == 0) {
      yearError.style.visibility = "visible";
      yearError.innerHTML = "This field is required";
      yearHead.style.color = `hsl(0, 100%, 67%)`
      year.style.border = `1px solid hsl(0, 100%, 67%)`

      return true
   }

else if (years >= actualYear || years < 1 || isNaN(years) == true) {
   yearError.style.visibility = "visible";
   yearError.innerHTML = "Must be in the past";
   yearHead.style.color = `hsl(0, 100%, 67%)`
   year.style.border = `1px solid hsl(0, 100%, 67%)`

   return true
}

else {
   yearError.style.visiblilty = 'hidden'
   year.style.border = "1px solid hsl(259, 100%, 65%)"
   yearHead.style.color = `hsl(0, 0%, 8%)`


     return false
}


}


function result(yearGiven,monthGiven,dayGiven) {
  const resultsYear = document.querySelector("#yr")
  const resultsMonth = document.querySelector("#mon")
  const resultsDay = document.querySelector("#days")


  resultsDay.innerHTML = ""
  resultsMonth.innerHTML = ""
  resultsYear.innerHTML = ""

  let yearCounter = 0
  let monthCounter = 0
  let dayCounter = 0


  let yearInterval = setInterval(() => {
     resultsYear.innerHTML = Number(yearCounter)
     yearCounter++

     if (yearCounter > yearGiven) {
      clearInterval(yearInterval)

      monthResults()
     }
  }, 50);

  function monthResults() {
      let monthInterval = setInterval(() => {
         resultsMonth.innerHTML = Number(monthCounter)
           monthCounter++

           if (monthCounter > monthGiven) {
            clearInterval(monthInterval)

            daysResults()
           }
      }, 80);
  }

  function daysResults() {
   let daysInterval = setInterval(() => {
      resultsDay.innerHTML = Number(dayCounter)
      dayCounter++

      if (dayCounter > dayGiven) {
         clearInterval(daysInterval)

         formLock = false
      }
   }, 100);
  }
}


} 

         
 validateForm()

      })

 
