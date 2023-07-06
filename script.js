let sChar = "!@#$%^&*()_-"
let num = "0123456789"
let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
let upperAlphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let symbolCheckBox = document.getElementById("special-char")
let numberCheckBox = document.getElementById("number")
let lowerCheckBox = document.getElementById("lower-case")
let upperCheckBox = document.getElementById("upper-case")
let generateBtn = document.getElementById("generate-btn")

let includeUpperCase = false
let includeLowerCase = false
let includeNumber = false
let includeSChar = false


upperCheckBox.addEventListener("change", () => {
	if (upperCheckBox.checked) {
		includeUpperCase = true
		enableGenerateBtn()
	} else {
		includeUpperCase = false
		enableGenerateBtn()
	}
})

lowerCheckBox.addEventListener("change", () => {
	if (lowerCheckBox.checked) {
		includeLowerCase = true
		enableGenerateBtn()
	} else {
		includeLowerCase = false
		enableGenerateBtn()
	}
})

numberCheckBox.addEventListener("change", () => {
	if (numberCheckBox.checked) {
		includeNumber = true
		enableGenerateBtn()
	} else {
		includeNumber = false
		enableGenerateBtn()
	}
})

symbolCheckBox.addEventListener("change", () => {
	if (symbolCheckBox.checked) {
		includeSChar = true
		enableGenerateBtn()
	} else {
		includeSChar = false
		enableGenerateBtn()
	}
})

function enableGenerateBtn() {
	if (includeSChar == true || includeNumber == true || includeLowerCase == true || includeUpperCase == true) {
		generateBtn.classList.remove("disabled")
	} else {
		generateBtn.classList.add("disabled")
	}
}

function generatePassword(passSize) {
	let i = 1
	var password = ''
	while (i <= passSize) {
		if (includeLowerCase == true) {
			password += lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)]
			i++
		}
		if (includeSChar == true) {
			password += sChar[Math.floor(Math.random() * sChar.length)]
			i++
		}
		if (includeNumber == true) {
			password += num[Math.floor(Math.random() * num.length)]
			i++
		}
		if (includeUpperCase == true) {
			password += upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)]
			i++
		}
	}
	return password
}

function passwordSize() {
	let size = document.getElementById("size-text").value
	return size
}

let passSizeId = document.getElementById("size-text")
passSizeId.addEventListener("focus", () => {
	let errorMsg = document.getElementById("error-msg")
	errorMsg.style.display = 'none'
})

generateBtn.addEventListener("click", () => {
	let passSize = Number.parseInt(passwordSize())
	if (passSize >= 4 && passSize <= 20) {
		generateBtn.classList.add("pressed")
		setTimeout(() => { generateBtn.classList.remove("pressed") }, 200)
		let pass = generatePassword(passSize)
		document.getElementById("password-text").innerHTML = pass
	}
	else {
		document.getElementById("size-text").value = ""
		document.getElementById("password-text").innerHTML = "Your password will shown here."
		lowerCheckBox.checked = false
		upperCheckBox.checked = false
		numberCheckBox.checked = false
		symbolCheckBox.checked = false
		generateBtn.classList.add("disabled")
		let errorMsg = document.getElementById("error-msg")
		errorMsg.style.display = 'block'

	}
})