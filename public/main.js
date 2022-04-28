// Focus div based on nav button click

// Flip one coin and show coin image to match result when button clicked
function flipOneCoin() {
    document.getElementById("flipACoinRes").innerHTML = "Flipping..."
    document.getElementById("singleFlipRes").src="assets/img/coin.png";
    fetch("http://localhost:5000/app/flip/")
        .then(res => res.json())
        .then(data => {
            const result = data.flip.toString()
            setTimeout(function(){
                document.getElementById("singleFlipRes").src="assets/img/"+result+".png";
                document.getElementById("flipACoinRes").innerHTML = "Result: " + result + "!"
            }, 1000);
        })
}
// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series
function flipMultipleCoins(val) {
    val = Number(val)
    if (!Number.isInteger(val)) {
        alert("Error! Please enter an integer value for number of flips")
        return
    }
    else {
        val = parseInt(val, 10)
    }
    fetch("http://localhost:5000/app/flips/"+val)
        .then(res => res.json())
        .then(data => {
            const result = data.raw
            const summary = data.summary
            setTimeout(function(){
                let table = document.getElementById("displayTable");
                for (let i = 0; i < parseInt(summary.tails) + parseInt(summary.heads); i++) {
                    table.insertRow(-1);
                    
                }
            }, 1000);
        })

}

// Guess a flip by clicking either heads or tails button
function guessFlip(val) {
    val = val.toString()
    document.getElementById("guessRes").innerHTML = "Flipping..."
    document.getElementById("guessResImg").src="assets/img/coin.png";
    document.getElementById("guessVal").innerHTML = "Your guess: "+val
    document.getElementById("guessValImg").src="assets/img/"+val+".png";
    fetch("http://localhost:5000/app/flip/call/"+val)
        .then(res => res.json())
        .then(data => {
            const result = data.flip.toString()
            const winOrLoss = data.result.toString()
            let winStatement = ""
            if (winOrLoss === "win") {
                winStatement = "Congratulations, you win!"
            }
            else if (winOrLoss === "lose") {
                winStatement = "Unfortunately, you lose!"
            }
            else {
                alert("Error!")
            }
            setTimeout(function(){
                document.getElementById("guessResImg").src="assets/img/"+result+".png";
                document.getElementById("guessRes").innerHTML = "Result: " + result
                document.getElementById("winStatement").innerHTML = winStatement
            }, 1000);
        })
}