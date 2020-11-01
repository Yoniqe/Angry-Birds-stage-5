class Bird extends BaseClass {//this has the properties of the baseclass
  constructor(x,y){//x and y taken
    super(x,y,50,50);//x,y,width,height passed to base class
    this.image = loadImage("sprites/bird.png");//image added to the bird
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();//display the bird according to the base class
  }
}
