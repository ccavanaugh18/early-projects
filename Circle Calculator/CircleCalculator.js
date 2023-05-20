let radius;
let circumference;
let roundedCircumference;

// Input, calculations, and output
radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

if (radius === 0) {
    circumference = 0;
} else {
    circumference = 2 * Math.PI * radius;   
}

roundedCircumference = Math.round(circumference);

if (radius === 0) {
    console.log("The circumference is 0 units");
} else {
    console.log("The circumference is approximately " + roundedCircumference + " units.");
}