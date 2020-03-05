class Ship{
    contructor(color,life,type,attack){
        this.color = color;
        this.life = life;
        this.type = type;
        this.attack = attack;
    }
    disparar(xCord,yCord){
        alert(xCord+"yayyy"+yCord);
    }
    getLife(){
        return this.life;
    }
    setLife(newLife){
        life = newLife;
    }

}