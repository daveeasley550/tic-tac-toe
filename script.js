const boxes = document.querySelectorAll(".box");
console.log(boxes)
const resetButton = document.querySelector(".reset-button")

let checkWinner = function () {
    window.alert("Winner winner chicken dinner!")
}
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function (e) {
        e.preventDefault()
        if (boxes[i].style.background === "") {
            boxes[i].style.background = "blue"
        } else if (boxes[i].style.background == "blue") {
            boxes[i].style.background = "red"
        
        } else if (boxes[0].style.background == boxes[1].style.background &&
        boxes[1].style.background == boxes[2].style.background && 
        boxes[0].style.background != "" ){
            window.alert("Winner winner chicken dinner!")
    } else if (boxes[3].style.background == boxes[4].style.background &&
        boxes[4].style.background == boxes[5].style.background && 
        boxes[4].style.background != "") {
        checkWinner()
    }else if (boxes[6].style.background == boxes[7].style.background &&
        boxes[7].style.background == boxes[8].style.background && 
        boxes[6].style.background != "") {
        checkWinner()
    }else if (boxes[0].style.background == boxes[3].style.background &&
        boxes[3].style.background == boxes[6].style.background && 
        boxes[0].style.background != "") {
        checkWinner()
    }else if (boxes[1].style.background == boxes[4].style.background &&
        boxes[4].style.background == boxes[7].style.background && 
        boxes[1].style.background != "") {
        checkWinner()
    }else if (boxes[2].style.background == boxes[5].style.background &&
        boxes[5].style.background == boxes[8].style.background && 
        boxes[2].style.background != "") {
        checkWinner()
    }else if (boxes[0].style.background == boxes[4].style.background &&
        boxes[4].style.background == boxes[8].style.background && 
        boxes[0].style.background != "") {
        checkWinner()
    }else if (boxes[2].style.background == boxes[4].style.background &&
        boxes[4].style.background == boxes[6].style.background && 
        boxes[2].style.background != "") {
        checkWinner()
    }else boxes[i].style.background = ""
    resetButton.addEventListener("click", function (e) {
        e.preventDefault()
        boxes[i].style.background = ""
    })
})
}

