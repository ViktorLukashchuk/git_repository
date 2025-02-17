export abstract class Triangle {
    public a = 0;
    public b = 0;
    public c = 0;
   
    public constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public calcPerimeter(): number {
        return this.a + this.b + this.c;
    }

    public abstract calcSquare(): number;
}

export class EquilateralTriangle extends Triangle {
    public constructor(a: number) {
        super(a, a, a);
    }

    public calcSquare(): number {
        return (Math.sqrt(3) / 4) * Math.pow(this.a, 2);
    }
}

export class IsoscelesTriangle extends Triangle {
    public constructor(a: number, b: number) {
        super(a, b, a);
    }

    public calcSquare(): number {
        let h = Math.sqrt(this.a ** 2 - (this.b / 2) ** 2);
        return (1 / 2) * this.b * h;
    }
}
