// Testing through Vanilla JS
const h1Tag = document.createElement("h1");
h1Tag.innerText = "Hello World";
document.querySelector("#jsRoot").appendChild(h1Tag);
// Testing Through React
const reactEle = React.createElement("h1", { className: "class1", id: "test1" }, React.createElement("p", null, "Hello World"));
ReactDOM.render(reactEle, document.querySelector("#root"));
