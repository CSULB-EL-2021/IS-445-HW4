const r = Number(prompt("Enter the circle radius:"));

class Circle {
    constructor(r) {
        this.r = r;
    }

    area() {
        return Math.PI * this.r * this.r;
    }

    circumference() {
        return 2 * Math.PI * this.r;
    }
}


const circle = new Circle(r);
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
