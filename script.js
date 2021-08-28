// Time configuration with correct Input validation 

// Get the elements from product page 
const timeSelection = document.querySelectorAll("input.timeSelection")
const inputAreaTime = document.querySelectorAll("div.flex-time")

// Function to set the rigth Input field for timestamp selection with attributes
const setInputinAllForms = (value) => {
    inputAreaTime.forEach(div => {

        const newInputOne = document.createElement("input")
        const newInputTwo = document.createElement("input")
        newInputTwo.setAttribute("id","notSet")
        newInputOne.setAttribute("class","changeInput")
        newInputTwo.setAttribute("class","changeInput")

        timeSelection.forEach(val => {
            console.log(value)
            if (value === "year") {
                newInputOne.setAttribute('type', 'number')
                newInputOne.setAttribute('id', 'year')
                newInputOne.setAttribute('min', '2010')
                newInputOne.setAttribute('max', '2021')
                newInputOne.setAttribute('placeholder', '2015')
                newInputTwo.setAttribute("id","notSet")
            }
            if (value === "month") {
                newInputOne.setAttribute('type', 'month')
                newInputOne.setAttribute('id', 'month')
                newInputTwo.setAttribute("id","notSet")
            }
            if (value === "day") {
                newInputOne.setAttribute('type', 'date')
                newInputOne.setAttribute('id', 'date')
                newInputTwo.setAttribute("id","notSet")
            }
            if (value === "hour") {
                newInputOne.setAttribute('type', 'date')
                newInputOne.setAttribute('id', 'date-hour')
                newInputTwo.setAttribute('type', 'time')
                newInputTwo.setAttribute('id', 'hour-hour')
            }
            }) 

            if(div.children.length > 2) {
                const childInputs = document.querySelectorAll('input.changeInput')
                childInputs.forEach(input => {
                    input.remove()
                })
            }
            if(div.children.length == 2) {
                div.appendChild(newInputOne)
            }
            if(value == "hour") {
                div.appendChild(newInputTwo)
            }
    })
} 

setInputinAllForms("year")

timeSelection.forEach(e => {
    e.addEventListener("click", e => (setInputinAllForms(e.target.value)))
})

// Additional Trade Options 
const tradeCheck = document.querySelector("input.checkTrade")
const optionalTradeField = document.querySelector("div.optionalTrade")

const openField = () => {
    if (tradeCheck.checked) {
        optionalTradeField.setAttribute("class", "open")
    } else {
        optionalTradeField.setAttribute("class", "close")
    }
}

tradeCheck.addEventListener("click", openField)