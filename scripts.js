let button = document.createElement("button");
let btntext = document.createTextNode("Add Square");
button.appendChild(btntext);
document.body.appendChild(button);

let boxdiv = document.createElement("div");
document.body.appendChild(boxdiv)

button.style.display = "block"
var idNumber = 0
button.addEventListener("click", function () {
    let div = document.createElement("div");
    div.id = ("id" + idNumber);
    idNumber++;
    div.className = "square";
    boxdiv.appendChild(div);
    let divtxt = document.createTextNode(idNumber);

    div.addEventListener("mouseover", function () {
        console.log(idNumber)
        div.appendChild(divtxt)
        div.style.textAlign = "center"
        div.style.lineHeight = "200px"
        div.style.color = "white"
    })

    div.addEventListener("mouseout", function () {
        div.removeChild(divtxt);
    })

    var colors = ["pink", "green", "turquoise", "orange", "red", "navy"]

    div.addEventListener("click", function () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        div.style.backgroundColor = randomColor
    })


    div.addEventListener("dblclick", function () { //added click event
        if (idNumber % 2 == 0) {
            if (this.nextSibling === null) {
                alert("no square exists after");
                return;
            } else {
                boxdiv.removeChild(this.previousSibling);
            }
        } else {
            if (this.previousSibling === null) {
                alert("no square exists before");
                return;
            } else {
                boxdiv.removeChild(this.nextSibling);
            }
        }
    })
})

