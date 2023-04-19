// script.js

//function -> 
//          a,b -> (a.b)
const add = (a, b) =>  a + b

//                a,b -> (a.b)
const multiply = (a, b) =>  a * b 

function internal() {
	//                     this.a -> this.internal.a
	const added = this.add(this.internal.a, this.internal.b)
	// created multiplied variable
	const multiplied = this.multiply(added, this.internal.c)
	//return multiplied
	return console.log(multiplied)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()