class Pencil{
    constructor(color) {
        this.color = color || 'black';
    }

    write(text) {
        console.log(text);
    }

    nome() {
        console.log('Pencil');
    }
}

class ColorPencil extends Pencil {
    static tinta() {
        return 10;
    }

    desenhar() {
        console.log('desenhando');
    }

    nome() {
        console.log('Color pencil');
    }
}

var myPencil = new Pencil();