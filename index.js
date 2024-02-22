class Game{
    constructor(canvas,context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height/this.baseHeight;
        this.player = new Player(this);
        this.gravity = 1;

        this.resize(window.innerWidth,window.innerHeight);

        window.addEventListener('resize',(e)=>{
         this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        })
    }
    resize(width,height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = this.height/this.baseHeight;
        this.player.resize();
    }
    render(){
        this.player.draw();
    }
}

window.addEventListener("load",()=>{
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");
    canvas.width = 720;
    canvas.height = 720;

    const game = new Game(canvas,context);
    
    game.render()

    function animation(){
     game.ctx.clearRect(0,0,canvas.width,canvas.height);
     game.player.update();
     game.render();
     requestAnimationFrame(animation);   
    }

    animation();


})