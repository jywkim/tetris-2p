class Player {
  constructor() {
    this.pos = {x: 0, y: 0};
    this.matrix = null;
    this.score = 0;
  }

  move(dir) {
    this.pos.x += dir;
    if (collide(arena, this)) {
      this.pos.x -= dir;
    }
  }
}
