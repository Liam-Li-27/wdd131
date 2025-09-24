const newParagraph = document.createElement("p");
newParagraph.innerText="Added with JavaScript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img")
newImage.setAttribute("src","https://picsum.photos/200")
newImage.setAttribute("alt","Random Picture")
document.body.appendChild(newImage)

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const section3 = document.createElement("section")
section3.innerHTML="<h2>DOM Basics</h2> <p>This was added through Javascript</p>";
document.body.appendChild(section3)
