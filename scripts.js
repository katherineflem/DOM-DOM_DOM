window.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btntext = document.createTextNode("Add Square");
    button.appendChild(btntext);
    document.body.appendChild(button);


    var idNumber = 1
    button.addEventListener("click", function () {
        let div = document.createElement("div");
        div.id = ("id" + idNumber);
        idNumber++;
        div.className = "square";
        document.body.appendChild(div);

        div.addEventListener("mouseover", function () {
            console.log(idNumber)
            let divtxt = document.createTextNode(idNumber);
            div.appendChild(divtxt)
            div.style.textAlign = "center"
        })

        div.addEventListener("mouseout", function () {
        div.textContent.style.visibility = "hidden";
        })

        var colors = ["pink", "green", "turquoise", "orange", "red", "navy"]

        div.addEventListener("click", function () {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            return div.style.backgroundColor = randomColor
        })
    })
})