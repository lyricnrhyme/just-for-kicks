// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
var details = document.getElementById("details");
details.addEventListener("click", notHawaii);

function notHawaii() {
    alert("Not Available in Hawaii");
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
var name1 = document.getElementById("name1");
name1.addEventListener("mouseover", showDescrip1);
name1.addEventListener("mouseout", hideDescrip1);
var descrip1 = document.getElementById("descrip1");

function showDescrip1() {
    descrip1.style.display = "block";
}

function hideDescrip1() {
    descrip1.style.display = "none";
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'
var name2 = document.getElementById("name2");
var descrip2 = document.createElement("div");
descrip2.id = "decrip2";
descrip2.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
name2.appendChild(descrip2);
descrip2.style.display = "none";
name2.addEventListener("click", showHideDescrip2);

function showHideDescrip2() {
    if (descrip2.style.display === "none") {
        descrip2.style.display = "block";
    } else {
        descrip2.style.display = "none";
    }
}

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 


//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
var thumbs = document.getElementsByClassName("far fa-thumbs-up");
console.log(thumbs);
for (var i=0; i<thumbs.length; i++) {
    thumbs[i].addEventListener("click", likeCount);
    var count = document.createElement("div");
    count.className = "count";
    thumbs[i].appendChild(count);
}

function likeCount() {
    var thisCount = this.querySelector(".count");
    if ((thisCount.innerHTML)) {
        thisCount.innerHTML = parseFloat(thisCount.innerHTML) + 1;
    } else {
        thisCount.innerHTML = 1;
    }
    // console.log("test");
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
var price4 = document.getElementById("price4");
var plus = document.getElementById("increase");
plus.addEventListener("click", increase);

function increase() {
    price4.innerHTML = parseFloat(price4.innerHTML) + 1;
    //Number(price) 
    price4.appendChild(plus);
}


//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.
var price5 = document.getElementById("price5");
var minus = document.getElementById("decrease");
minus.addEventListener("click", decrease);

function decrease() {
    price5.innerHTML = parseFloat(price5.innerHTML) - 1;
    price5.appendChild(minus);
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
var colorImage = document.createElement("IMG");
colorImage.setAttribute("src", "http://thesneakerauthority.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/6/8/689479-405.jpg");
colorImage.setAttribute("alt", "Try Blue!");
var airJordan11 = document.getElementsByTagName("img")[6];
// var originalImage = document.createElement("IMG");
// originalImage.src = airJordan11.src;
airJordan11.addEventListener("mouseover", showColor);
colorImage.addEventListener("mouseout", normalColor)
var airJordan11Div = document.getElementsByClassName("block3 col-sm-4")[1];

function showColor() {
    airJordan11Div.replaceChild(colorImage, airJordan11);    
}

function normalColor() {
    // var otherColor = document.getElementsByTagName("img")[6];
    airJordan11Div.replaceChild(airJordan11, colorImage);
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.