var a = "teste"

var linkElement = document.createElement("button")
linkElement.setAttribute("onclick", "alert(a)")

var textButton = document.createTextNode("Botao Criado Via JavaScript")
linkElement.appendChild(textButton)

var containerElement = document.querySelector("#js")
containerElement.appendChild(linkElement)