class Menu {
    constructor(canvasId, lastScore = -1, lastSpeed = 15, lastSize = 20) {
        this.canvasId = canvasId;
        this.canv = document.getElementById(this.canvasId);
        this.ctx = this.canv.getContext("2d");
        this.canvWidth = this.canv.width;
        this.canvHeight = this.canv.height;
        this.gameSpeed = lastSpeed;
        this.gameSize = lastSize;
        this.lastScore = lastScore;
        this.showScore = this.lastScore > -1 ? ['main'] : [];

        this.buttons = [
            {
                text: 'Snake Canvas',
                fillStyle: 'green',
                alignment: 'center',
                font: '50px Comic Sans MS',
                position: { x: this.canvWidth / 2, y: 100 },
                menu: ['main'],
                redirect: null
            },
            {
                text: `Your last score was: ${this.lastScore}`,
                fillStyle: 'orange',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 440 },
                menu: this.showScore,
                redirect: null
            },
            {
                text: 'Play',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 250 },
                menu: ['main'],
                redirect: 'game'
            },
            {
                text: 'Instructions',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 300 },
                menu: ['main'],
                redirect: 'instructions'
            },
            {
                text: 'Settings',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 350 },
                menu: ['main'],
                redirect: 'settings'
            },
            {
                text: 'Credits',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 400 },
                menu: ['main'],
                redirect: 'credits'
            },
            {
                text: 'Back',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 400 },
                menu: ['instructions', 'settings', 'credits'],
                redirect: 'main'
            },
            {
                text: 'Use the arrow buttons',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 100 },
                menu: ['instructions'],
                redirect: null
            },
            {
                text: 'to move the snake.',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 140 },
                menu: ['instructions'],
                redirect: null
            },
            {
                text: 'Pick the red apples',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 200 },
                menu: ['instructions'],
                redirect: null
            },
            {
                text: 'and avoid eating yourself!',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 240 },
                menu: ['instructions'],
                redirect: null
            },
            {
                text: 'Difficulty:',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 100 },
                menu: ['settings'],
                redirect: null
            },
            {
                text: 'Easy',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2 - 100, y: 150 },
                menu: ['settings'],
                redirect: 'easy',
                appliesTo: 'gameSpeed',
                value: 8
            },
            {
                text: 'Medium',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 150 },
                menu: ['settings'],
                redirect: 'mediumSpeed',
                appliesTo: 'gameSpeed',
                value: 15
            },
            {
                text: 'Hard',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2 + 100, y: 150 },
                menu: ['settings'],
                redirect: 'hardSpeed',
                appliesTo: 'gameSpeed',
                value: 25
            },
            {
                text: 'Maze size:',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 220 },
                menu: ['settings'],
                redirect: null
            },
            {
                text: 'Small',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2 - 100, y: 270 },
                menu: ['settings'],
                redirect: 'easyMaze',
                appliesTo: 'gameSize',
                value: 10
            },
            {
                text: 'Medium',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 270 },
                menu: ['settings'],
                redirect: 'mediumMaze',
                appliesTo: 'gameSize',
                value: 20
            },
            {
                text: 'Large',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2 + 100, y: 270 },
                menu: ['settings'],
                redirect: 'hardMaze',
                appliesTo: 'gameSize',
                value: 40
            },
            {
                text: 'Author:',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 150 },
                menu: ['credits'],
                redirect: null
            },
            {
                text: 'Kristiyan Tanchev',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 190 },
                menu: ['credits'],
                redirect: null
            },
            {
                text: 'Licence: MIT',
                fillStyle: 'green',
                alignment: 'center',
                font: '30px Arial',
                position: { x: this.canvWidth / 2, y: 270 },
                menu: ['credits'],
                redirect: null
            }

        ];
        this.render('main');
    }

    render(filter) {
        this.ctx.clearRect(0, 0, this.canvWidth, this.canvHeight);
        $(this.canv).unbind();

        if (filter === 'game') {
            return new Game(this.canvasId, this.gameSize, this.gameSize, this.gameSpeed);
        }
        if (['main', 'instructions', 'settings', 'credits'].indexOf(filter) === -1) {
            this.setDifficulty(filter);
            return
        }

        this.highlightDifficulty();
        this.mouseClickEvent(filter);
        this.mouseOverEvent(filter);

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvWidth, this.canvHeight);

        this.buttons.filter((e) => {
            return e.menu.indexOf(filter) !== -1;
        }).forEach((item) => {
            this.renderItem(item);
        })
    }

    mouseClickEvent(filter) {
        $(this.canv).bind('click', function (ev) {
            let x = ev.pageX - $(this.canv).offset().left;
            let y = ev.pageY - $(this.canv).offset().top;
            this.buttons.filter((e) => {
                return e.menu.indexOf(filter) !== -1;
            }).forEach((item) => {
                if (x >= item.area.xStart && x <= item.area.xEnd && y >= item.area.yStart && y <= item.area.yEnd) {
                    if (item.redirect) {
                        this.render(item.redirect);
                    }
                }
            })
        }.bind(this))
    }

    mouseOverEvent(filter) {
        $(this.canv).bind('mousemove', function (ev) {
            let x = ev.pageX - $(this.canv).offset().left;
            let y = ev.pageY - $(this.canv).offset().top;
            this.buttons.filter((e) => {
                return e.menu.indexOf(filter) !== -1 && e.redirect;
            }).forEach((item) => {
                if (x >= item.area.xStart && x <= item.area.xEnd && y >= item.area.yStart && y <= item.area.yEnd) {
                    this.renderItem(item, true);
                } else {
                    item.fillStyle = item.fillStyle;
                    this.renderItem(item);
                }
            })
        }.bind(this))
    }

    setDifficulty(diff) {
        this.buttons.filter((e) => {
            if (e.redirect) {
                return e.redirect === diff;
            }
        }).forEach((item) => {
            this[item.appliesTo] = item.value;
        })
        this.highlightDifficulty();
        this.render('settings');
    }

    highlightDifficulty() {
        this.buttons.filter((e) => {
            if (e.value) {
                return true;
            }
        }).forEach((item) => {
            item.fillStyle = "green";
            if (item.value === this.gameSize || item.value == this.gameSpeed) {
                item.fillStyle = "white";
            }
        })
    }

    renderItem(item, highlight = false) {
        if (item.area) {
            this.ctx.fillStyle = 'black';
            let xLength = item.area.xEnd - item.area.xStart;
            let yLength = item.area.yEnd - item.area.yStart;
            this.ctx.fillRect(item.area.xStart, item.area.yStart, xLength, yLength);
        }
        this.ctx.fillStyle = item.fillStyle;
        if (highlight){
            this.ctx.fillStyle = 'Orange';
        }
        this.ctx.textAlign = item.alignment;
        this.ctx.font = item.font;
        item.area = {
            xStart: item.position.x - this.ctx.measureText(item.text).width / 2,
            xEnd: item.position.x + this.ctx.measureText(item.text).width / 2,
            yStart: item.position.y - parseInt(item.font.substr(0, 4)),
            yEnd: item.position.y + parseInt(item.font.substr(0, 4)) / 5
        }
        this.ctx.fillText(item.text, item.position.x, item.position.y);
    }
}