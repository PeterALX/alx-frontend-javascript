let foo = {
  [Symbol.toPrimitive](hi) {
    console.log('hi:' + hi)
  }
}

let a = Number(foo)
console.log(a)
