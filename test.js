 //exercise1

 for (let i = 1; i <= 100; i++) {
     console.log(i);
     if (i % 3 == 0 && i % 5 == 0) {
         console.log("Jackpot");
     } else if (i % 3 == 0) {
         console.log("This is divisibleby 3");

     } else if (i % 5 == 0) {
         console.log("This is divisibleby 5");
     }
 }

 //exercise 2
 //Using JavaScript, create a button and add it to the html (the document).
 //When the button is clicked, insert an <img> tag to the html with a random image.



 let btn = document.createElement("button");
 btn.innerHTML = "Click me!";
 let div = document.getElementById("mydiv");
 div.appendChild(btn);

 btn.addEventListener('click', () => {
     let img = document.createElement('img');
     img.src =
         'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
     div.appendChild(img);

 })

 //exercise 3 API




 fetch('https://reqres.in/api/users')
     .then(response => response.json())
     .then(data => {


         for (j = 0; j < 3; j++) {
             console.log(data.first_name);

             let li = document.createElement("li");
             li.innerHTML = data.first_name;
             div.appendChild(li);


         }

     });

 //exercise 4

 /*Create a class called Product. The constructor should have 2 parameters called name
and price. It should have 1 method called logProduct that should log: 'NAME is PRICE
kr'
Here is an example:
const table = new Product('table', 1200);
table.logProduct(); // 'Table costs 1200 kr'*/

 class Product {
     constructor(name, price) {
         this.name = name;
         this.price = price;
     }

     logProduct() {
         console.log(this.name + " is " + this.price)
     }
 }

 const table = new Product('table', 1200);
 table.logProduct();

 const computer = new Product('PC', 3000);
 computer.logProduct();