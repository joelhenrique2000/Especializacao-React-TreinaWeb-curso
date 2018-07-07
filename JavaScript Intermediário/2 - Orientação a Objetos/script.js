function Pencil(color, length) {

    if(!(this instanceof Pencil))
        return new Pencil(color, length);

    this.color = color || 'red';
    this.length = length || 15;
    this.write = function(text) {
        console.log(text);
    }
}

var myPencil = new Pencil('blue','20');
Pencil.prototype.id = 0;