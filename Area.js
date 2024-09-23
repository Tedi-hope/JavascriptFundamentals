function calculateTriangleArea(side1, side2, side3) 
{
    // Calculating the Semi-perimeter
    var semiPerimeter = (side1 + side2 + side3) / 2;

    // Calculate the area using Heron's formula
    var area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));

    return area;
}

// Sides of a triangle
var sidea = 5, sideb=6, sidec=7;


// Calculate and display the area
var area = calculateTriangleArea(sidea, sideb, sidec);
console.log("The area of the triangle is: " + area.toFixed(2));
console.log("The area of the triangle is: " + area);