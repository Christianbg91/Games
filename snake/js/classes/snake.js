class Snake{

    constructor(startPosition = { x: 10, y: 10 }, size = 5) {
        this.position = startPosition;
        this.trail = [];
        this.size = size;
        this.commands = [];
        this.direction = 'right';
    }

    render(ctx, canv, blockWidth, blockHeight) {
        ctx.fillStyle = "lime";
        for (var i = 0; i < this.trail.length; i++) {
            ctx.fillRect(this.trail[i].x * blockWidth + 1, this.trail[i].y * blockHeight + 1, blockWidth - 2, blockHeight - 2);
        }
    }

    eat() {
        this.size++;
        return 1;
    }

    move(apple, boardWidth, boardHeight) {
        if (this.commands.length > 0) {
            this.direction = this.commands.splice(0, 1)[0];
        }
        switch (this.direction) {
            case 'left':
                this.position.x--;
                break;
            case 'up':
                this.position.y--;
                break;
            case 'right':
                this.position.x++;
                break;
            case 'down':
                this.position.y++;
                break;
        }

        if (this.position.x >= boardWidth){
            this.position.x -= boardWidth;
        }
        if (this.position.x < 0){
            this.position.x += boardWidth;
        }
        if (this.position.y >= boardHeight){
            this.position.y -= boardHeight;
        }
        if (this.position.y < 0){
            this.position.y += boardHeight;
        }

        for (let pos of this.trail){
            if (pos.x === this.position.x && pos.y === this.position.y){
                return -1;
            }
        }

        this.trail.push(Object.assign({}, this.position));


        if (apple.x === this.position.x && apple.y === this.position.y){
            return this.eat();
        }
        while(this.trail.length > this.size){
            this.trail.splice(0,1);
        }
        return 0;
    }

    addCommand(direction) {
        let commandsLength = this.commands.length;
        let lastMove;
        if (commandsLength > 1) {
            return;
        } else if (commandsLength === 1) {
            lastMove = this.commands[commandsLength - 1];
        } else {
            lastMove = this.direction;
        }

        switch (direction) {
            case 'left':
                if (lastMove !== 'left' &&
                    lastMove !== 'right') {
                    this.commands.push(direction);
                }
                break;
            case 'up':
                if (lastMove !== 'up' &&
                    lastMove !== 'down') {
                    this.commands.push(direction);
                }
                break;
            case 'right':
                if (lastMove !== 'left' &&
                    lastMove !== 'right') {
                    this.commands.push(direction);
                }
                break;
            case 'down':
                if (lastMove !== 'up' &&
                    lastMove !== 'down') {
                    this.commands.push(direction);
                }
                break;
        }
    }

}