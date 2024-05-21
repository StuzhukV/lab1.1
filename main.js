var m = document.querySelector('.input-metr'),
	sm = document.querySelector('.output_sm'),
	btn = document.querySelector('.convert'),
	number = document.querySelector('.input__number'),
	divError = document.querySelector('.error'),
	quatityText = document.querySelector('.quantity__text'),
	btnQuantity = document.querySelector('.result__quantity'),
	quantityOutout = document.querySelector('.quantity__output')

// Task 1
btn.addEventListener('click', () => {
	let a = 0,
		b = 1,
		c
	for (let i = 2; i <= m.value; i++) {
		c = a + b
		a = b
		b = c
		console.log(c)
	}
	sm.innerHTML = `Число Фібоначі номер ${m.value} дорівнює ${c}`
})

// Task 2
number.addEventListener('input', function () {
	var input = this.value
	let numberArray = input.split('').map(function (item) {
		return parseInt(item.trim(), 10)
	})

	let uniqNumber = new Set(numberArray)

	if (uniqNumber.size !== numberArray.length) {
		divError.style.visibility = 'visible'
	} else {
		divError.style.visibility = 'hidden'
	}
})

// Task 3
btnQuantity.addEventListener('click', function () {
	quantityOutout.innerHTML = quatityText.value.split(' ').length
})
