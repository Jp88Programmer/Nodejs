function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function divided(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function percentage(total, part) {
  return (part / total) * 100;
}

function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function hcm(a, b) {
  return gcd(a, b);
}

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

function areaOfRectangle(length, width) {
  return length * width;
}

function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}

export {
  add,
  sub,
  multi,
  divided,
  modulo,
  isPrime,
  percentage,
  lcm,
  hcm,
  areaOfCircle,
  areaOfRectangle,
  areaOfTriangle,
  gcd
};
