window.onload = function () {
	console.log(document.querySelector('form[name="reg"]'))
	let errors = [
		
		["email","Поле email не очень"],
		["about","Поле about не очень"],
		//["login","Поле login не очень asd asd asd asd"],
		//["login","Поле login не очень asd asd asd asd"],
		//["login","Поле login не очень asd asd asd asd"],
		//["login","Поле login не очень asd asd asd asd"],
		//["login","Поле login не очень asd asd asd asd"],

		["login","Поле login не очень asd asd asd asd"],
	]

	function getErrorMessage(name) {
		for (let index = 0; index < errors.length; index++) {
			 // ["email","Поле email не очень"],
			if(errors[index][0]==name) return errors[index][1];
		}
	}


	function checkLimit() {
		if(this.value.length >20){
			
			//document.querySelector('form[name="reg"]').reset();
			this.value = this.value.slice(0, 20);

		} 

		this.nextElementSibling.innerHTML=`${this.value.length}/20`
		
	}
	

	function checkTextFields() {
		if(this.value==""){
			this.focus()
			this.classList.add("error")
			let text = getErrorMessage(this.name)
			if(!this.parentElement.querySelector("span")) {
				let message = ce('span',text)
				this.parentElement.append(message)
			}
			
		}
		else {
			
			this.classList.remove("error")
			this.disabled = true;
			if(this.parentElement.querySelector("span")) {
				this.parentElement.querySelector("span").remove()
			}
		}
	} 


	function changeFile() {
		console.log(this.value)
	}

	let elems = document.querySelectorAll(`input , textarea`)
	
	elems[0].focus();
	for (let index = 0; index < elems.length; index++) {
		
		if(elems[index].tagName==="TEXTAREA"){
			elems[index].addEventListener("blur", checkTextFields);
			elems[index].addEventListener("input", checkLimit);
			let count = ce("div","0/20");
			elems[index].parentElement.append(count);
		}else if(elems[index].type=="text" || elems[index].type=="email"){
			elems[index].addEventListener("blur", checkTextFields);
		}else {
			elems[index].addEventListener("change", changeFile);
		}
	}

	
}





function ce(name,text,className,event,fn) {
	let element = document.createElement(name);
	if(text!=undefined) {
		element.innerHTML = text;
	}

	if(className!=undefined) {
		element.className = className;
	}

	if(event!=undefined && fn!=undefined) {
		element.addEventListener(event,fn);
		// element.addEventListener(event,()=>{
		// 	console.log(`some ${event}`)
		// })
	}

	return element;
}






function random(min, max) {
	return Math.floor(min + Math.random() * (max - min));
}


