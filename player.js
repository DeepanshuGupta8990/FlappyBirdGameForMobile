class Player{
    constructor(game){
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width;
        this.height;
    }

    draw(){
        this.game.ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    update(){
        this.x += 1;
        if(this.y < this.game.height - this.height){
            this.y += this.game.gravity
        }
    }

    resize(){
        this.width = this.spriteWidth * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
    }
}