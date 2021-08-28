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
//






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
//







// Search Engine goes here 
const searchInput = document.getElementById("searchField")
const resultsSearch = document.getElementById("resultsSearch")
let childBtnsGet = ""
let lengthValue = 0

const handleCrawler = (value) => {
    const length = value.length
    const results = aktien.filter(i => {
        if(value.toLowerCase() == i[0].toLowerCase().substring(0, length)) {
            return i
        }
    })
    
    const childBtns = document.querySelectorAll('button.btn-result-chart')
    childBtns.forEach(btns => {
        btns.remove()
    })
    
    if(searchInput.value.length > 0) {
        lengthValue = searchInput.value.length
        results.forEach(result => {
            const btn = document.createElement("button")
            btn.setAttribute("class","btn-result-chart")
            btn.setAttribute("id","btn-result-chart")
            btn.setAttribute("value",`${result[0]}: ${result[1]}`)
            btn.innerHTML = `${result[0]}: ${result[1]}`
            resultsSearch.appendChild(btn)
        })
    }
    
}
searchInput.addEventListener("keyup", e => handleCrawler(e.target.value))


// search selection 
document.addEventListener("click", e => {
    if(e.target.id === "btn-result-chart") {
        handleClickBtn(e.target.value)
    }
})

const handleClickBtn = (val) => {
    const childBtnsGet = document.querySelectorAll("button.btn-result-chart")
    searchInput.value = val
    childBtnsGet.forEach(btns => {
        btns.remove()
    })
}
//




const aktien = [
    ["1ett","dünn"], 
    ["fetta","dünna"],
    ["fetts","dünns"],
    ["fettd","dünnd"],
    ["fettd","dünnd"],
]