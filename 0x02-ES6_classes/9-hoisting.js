foo = {
  [Symbol.toPrimitive]() {
    return 'hihi'
  }
}

let a = Number(foo)
console.log(a)
