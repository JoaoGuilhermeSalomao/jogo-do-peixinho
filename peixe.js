var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600, 

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}

var game = new Phaser.Game(config)
var peixinho;

// carregar imagem
function preload(){
    this.load.image("mar", "assets/bg_azul-escuro.png");
    this.load.image("baiacu", "assets/peixes/baiacu.png");
    this.load.image("serio", "assets/peixes/peixe_serio.png");
    this.load.image("peixe", "assets/peixes/tartaruga.png");
    this.load.image("turquesa", "assets/peixes/peixe_turquesa.png");
    this.load.image("tubarao", "assets/peixes/tubarao.png");
    this.load.image("areia", "areia.png");
    this.load.image("logo", "assets/logo-inteli_azul.png");
    
}
// adicionar imagem ao jogo
function create(){
    this.add.image(400, 300, "mar");
    this.add.image(500, 350, "baiacu");
    this.add.image(300, 200, "serio");
    this.add.image(450, 210, "areia").setScale(0.5);
    peixinho = this.add.image(400, 300, "peixe"); // guardar o peixe em uma variavel
    peixinho.setFlip(true, false); // transformando a variavel
    this.add.image(150, 300, "turquesa");
    this.add.image(650, 200, "tubarao");
    this.add.image(400, 550, "logo").setScale(0.5);
}

function update(){ // repete a cada fps
peixinho.x = this.input.x; // posição x do mouse - this.input.x
peixinho.y = this.input.y; // posição y do mouse - this.input.y //d
} 