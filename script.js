let initialPrice = document.querySelector("#buy-price")
let stocksQuantity = document.querySelector("#stocks-qty")
let currentPrice = document.querySelector("#current-price")
let submitBtn = document.querySelector("#submit-btn")
let outputDiv = document.querySelector("#output")


submitBtn.addEventListener('click', buttonHandler);

function buttonHandler(e){
    e.preventDefault();
    let ip = Number(initialPrice.value)
    let qty = Number(stocksQuantity.value)
    let cp = Number(currentPrice.value)

    if(ip === 0 || qty === 0 || cp === 0){
        outputDiv.innerHTML = "<p>Please fill all the fields.</p>"
    }
    else{
        calculateProfitAndLoss(ip, qty, cp)
    }
}

function calculateProfitAndLoss(initial, quantity, current){
    if(current > initial){
        let profit = (current - initial) * quantity
        let profitPercentage = (profit / initial) *100
        outputDiv.style.color = "green"
        outputDiv.innerHTML = "Your profit is "+ profit.toFixed(2) +" and profit percentage is "+ profitPercentage.toFixed(2) + "%"
    }else if(current < initial){
        let loss = (initial - current) * quantity
        let lossPrecentage = (loss / initial) *100
        outputDiv.style.color = "red"
        outputDiv.innerHTML = "Your loss is "+ loss.toFixed(2) +" and loss percentage is "+ lossPrecentage.toFixed(2) + "%"
    }else{
        outputDiv.innerHTML = "<p>The world is round boss. Neither profit, nor loss.</p>"
    }
}

