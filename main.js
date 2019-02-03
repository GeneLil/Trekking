var colorsArray = ["rgb(42, 96, 179)", "rgb(252, 229, 52)", "rgb(83, 83, 83)"];
var type = "T-Shirt";
var productImage = "./img/tshirt.jpg";
var price = "5.00";
var currency = "\u20AC";
var renderCard = function () {
    var container = document.getElementById("main");
    var card = document.createElement("div");
    card.innerHTML = "\n    <div class=\"card\">\n        <div class='cardHeader'>\n            <div class='dropDown'>Size\n                <span class='arrow'/>\n            </div>\n            <div class='colors'>" + colorsArray.map(function (color) {
        return "<span class='color' style='background-color:" + color + "'></span>";
    }).join("") + "\n            </div>\n        </div>\n        <div class=\"cardBody\">\n            <img src=" + productImage + " />\n        </div>\n        <div class=\"cardFooter\">\n            <span>" + type + "</span>\n            <span class=\"price\">" + (price + currency) + "</span>\n        </div>\n    </div>";
    container.appendChild(card);
};
document.addEventListener("DOMContentLoaded", function () {
    renderCard();
});
