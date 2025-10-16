export class SeedService {
  private randomFn?: () => number;

  constructor(private seed = getDailySeed()) {
    this.resetRandom();
  }

  setSeed(seed: string) {
    if (this.seed === seed) {
      return;
    }
    this.seed = seed;
    this.resetRandom();
  }

  getRandomNumber() {
    if (!this.randomFn) {
      return Math.random();
    }
    return this.randomFn();
  }

  resetRandom() {
    this.randomFn = mulberry32(hashCode(this.seed));
  }
}

export function getDailySeed() {
  const today = new Date();
  const year = today.getFullYear().toString().slice(-2);
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
}

const hashCode = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
};

const mulberry32 = (a: number) => {
  return () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};
