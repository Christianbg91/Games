class Game {
    constructor(canvasId, width = 20, height = 20, fps = 15) {
        this.canvasId = canvasId;
        this.canv = document.getElementById(this.canvasId);
        this.ctx = this.canv.getContext("2d");
        this.boardWidth = width;
        this.boardHeight = height;
        this.blockWidth = this.canv.width / this.boardWidth;
        this.blockHeight = (this.canv.height - 50) / this.boardHeight;
        this.fps = fps;
        this.snake = new Snake();
        this.apple = new Apple();
        this.active = true;
        this.initGame();
        this.gameInterval;
        this.eatSound = document.getElementsByClassName('eatSound')[0];
        this.dieSound = document.getElementsByClassName('dieSound')[0];
    }

    makeFrame() {
        switch (this.snake.move(this.apple.position, this.boardWidth, this.boardHeight)) {
            case 1:
                this.eatSound.play();
                this.apple.generateApple(this.boardWidth, this.boardHeight, this.snake.trail);
                break;
            case -1:
                this.dieSound.play();
                this.active = false;
                break;
        }
        this.checkState();
        this.render();
    }

    checkState() {
        if (!this.active) {
            $(document).unbind("keydown");
            setTimeout(function () {
                new Menu(this.canvasId, this.snake.size - 5, this.fps, this.boardWidth);
            }.bind(this), 4000);
            clearInterval(this.gameInterval);
        }
    }

    initGame() {
        this.addListeners();
        this.gameInterval = setInterval(this.makeFrame.bind(this), 1000 / this.fps);
    }

    render() {
        this.ctx.clearRect(0, 0, this.canv.width, this.canv.height);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canv.width, this.canv.height);
        this.snake.render(this.ctx, this.canv, this.blockWidth, this.blockHeight);
        this.apple.render(this.ctx, this.canv, this.blockWidth, this.blockHeight);
        this.renderScore();
    }

    renderScore() {
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(0, this.canv.height - 50, this.canv.width, this.canv.height);
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = 'left';
        this.ctx.font = "30px Arial";
        this.ctx.fillText(`Score: ${this.snake.size - 5}`, 10, this.canv.height - 10);
    }

    addListeners() {
        $(document).on("keydown", this.eventListener.bind(this));
    }

    eventListener(ev) {
        switch (ev.keyCode) {
            case 37:
                this.snake.addCommand('left')
                break;
            case 38:
                this.snake.addCommand('up');
                break;
            case 39:
                this.snake.addCommand('right');
                break;
            case 40:
                this.snake.addCommand('down');
                break;
        }
    }
}