let i, j, n, len, text;;

n = prompt("please write number of nav button you want");

const cars = ["BMW", "Volvo", "Saab", "Ford", "Toyota", "Honda"];

// cars[cars.length] = prompt("please Write Down items");

for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i];
}

for (i = 1; i<=1; i++) {
    document.write("<ul>");
    for (j = 1; j<=n; j++) {
      if (n >= cars.length-1) {
       cars[cars.length] = "Home";
      }
        document.write (`<li> <a href="#"> ${cars[j-1]} </a> </li>`);  // array item print in to nav bar
    }
    document.write("</ul>");
}