export class Hero {
  id: number;
  name: string;
  score: number;

  constructor(attrs: { id: number, name: string, score: number }) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.score = attrs.score;
  }

  classNames() {
    const c = {}
    c[this.bucket()] = true
    return c;
  }

  private bucket() {
    if (this.score < 0) {
      return "negative";
    }
    if (this.score == 0) {
      return "zero";
    }
    return "positive";
  }
}

