class Apple {
    constructor() {
        this.position = { x: 2, y: 5 };
    }

    generateApple(boardWidth, boardHeight, snakeTrail) {
        //TODO add check if apple is on the snake
        let position = {
            x: parseInt(Math.random() * boardWidth),
            y: parseInt(Math.random() * boardHeight)
        }
        for(let pos of snakeTrail){
            if (pos.x === position.x && pos.y === position.y){
                this.generateApple(boardWidth, boardHeight, snakeTrail);
                return;
            }
        }
        this.position = position;
    }

    render(ctx, canv, blockWidth, blockHeight) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x * blockWidth + 1, this.position.y * blockHeight + 1, blockWidth - 2, blockHeight - 2);
    }
}