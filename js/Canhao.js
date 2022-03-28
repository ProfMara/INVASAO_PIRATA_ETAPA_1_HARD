class Cannon {
    constructor(x, y, width, height, angle) {
        var parado = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, parado);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

    }

    display() {

    }
}