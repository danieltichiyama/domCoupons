//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

function changeInnerHTML (id,str){
    var thing = document.getElementById (id);
    thing.innerHTML = str;
}

function makeElement (type, eyedee, string, par){
    var thing = document.createElement (type);
    thing.id = eyedee;
    thing.innerHTML = string;
    par.appendChild (thing);
}

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var disclaimer = document.getElementById ('disclaimer');
var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

disclaimer.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

var brand1 = document.getElementById('brand1');

brand1.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

changeInnerHTML('item1','Cheeseburger Oreos');

//4. Target the div element with the id of 'price1' and update the content to $8.99.
changeInnerHTML('price1','$8.99');

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

changeInnerHTML('discount1','Free fries with purchase!');

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

newDiv = document.createElement('div');
newDiv.innerHTML = "Hendrick's Gin";
document.getElementById('brand2').appendChild (newDiv);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

makeElement('div','price2','$34.99',brand2);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

var newButton = document.createElement ('button');
newButton.id = 'discount3';
newButton.innerHTML = '50% OFF Axe body soap!';
document.getElementsByClassName('block3')[0].appendChild (newButton);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
var panda = document.getElementsByClassName('block1')[1];
// console.log(panda);

panda.getElementsByClassName ('item')[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

var pandaButton = document.createElement ('button');
pandaButton.class = 'discount';
pandaButton.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
panda.appendChild (pandaButton);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

brandBox = document.getElementsByClassName('brand');

brandBox[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

let priceBox = document.getElementsByClassName ('price');
priceBox[1].innerHTML = '$10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

brandBox = document.createElement ('div')
brandBox.className = 'brand';
brandBox.innerHTML = 'Hifiman Shangri-La';

var boxieBox = document.getElementsByClassName('block3');
boxieBox[1].appendChild (brandBox);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

let itemBox = document.createElement ('div');
itemBox.className = 'item';
itemBox.innerHTML = 'Electronstatic Headphones';

boxieBox[1].appendChild (itemBox);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

let priceBox1 = document.createElement ('div');
priceBox1.className = 'price';
priceBox1.innerHTML = '$18,000';
boxieBox[1].appendChild (priceBox1);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

var newDisc = document.createElement ('button');
newDisc.className = 'discount';
newDisc.innerHTML = 'Free Barry Manilow CD with purchase!';
boxieBox[1].appendChild (newDisc);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
// debugger;

var tester = document.getElementsByClassName ('block1');
tester[2].getElementsByClassName('brand')[0].innerHTML = 'H&M';
tester[2].getElementsByClassName('item')[0].innerHTML = 'Unicorn-Head Slippers';
tester[2].getElementsByClassName('price')[0].innerHTML = '$21.99';
tester[2].getElementsByClassName('discount')[0].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

var tester = document.getElementsByClassName ('block2');
tester[2].getElementsByClassName('brand')[0].innerHTML = 'Frito Lay';
tester[2].getElementsByClassName('item')[0].innerHTML = "Poppin' Jalapeno Doritos";
tester[2].getElementsByClassName('price')[0].innerHTML = '$7.77';
tester[2].getElementsByClassName('discount')[0].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light.';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

var tester = document.getElementsByClassName ('block3');
tester[2].getElementsByClassName('brand')[0].innerHTML = 'Any Dog Breeder';
tester[2].getElementsByClassName('item')[0].innerHTML = "Baby Puggy";
tester[2].getElementsByClassName('price')[0].innerHTML = 'Priceless';
tester[2].getElementsByClassName('discount')[0].innerHTML = 'No Discounts. This cuite is worth every penny.';

//Final Boss 
//Create your own product for the last three sections.
