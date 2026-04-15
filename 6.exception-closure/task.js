function parseCount(item) {
    if (isNaN(Number.parseFloat(item))) {
        throw new Error("Невалидное значение")

    } else {
        return Number.parseFloat(item)
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (Error) {
        return Error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.a + this.b) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    };

    get perimeter() {
        let P = this.a + this.b + this.c;
        return P;
    }

    get area() {
        let semiperimeter = 0.5 * (this.a + this.b + this.c);
        let S = Math.sqrt(semiperimeter * (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c));
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c)
        return triangle;
    } catch (Error) {
        return {
            get area() { return "Ошибка! Треугольник не существует" },
            get perimeter() { return "Ошибка! Треугольник не существует" },
        }
    }
}