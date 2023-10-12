const login1: HTMLParagraphElement = document.querySelector(".login")!;
const registrfirstname: HTMLInputElement = document.querySelector("#registrfirstname")!;
const registrlasname: HTMLInputElement = document.querySelector("#registrlasname")!;
const registrtel: HTMLInputElement = document.querySelector("#registrtel")!;
const registremail: HTMLInputElement = document.querySelector("#registremail")!;
const registrparol: HTMLInputElement = document.querySelector("#registrparol")!;
const registrparoltakror: HTMLInputElement = document.querySelector("#registrparoltakror")!;
const registrbtn: HTMLButtonElement = document.querySelector("#registrbtn")!;

const register1: HTMLParagraphElement = document.querySelector("#register")!;
const forget1: HTMLParagraphElement = document.querySelector("#forget")!;

let malumotlar1: {
	name: string;
	lastname: string;
	tel: string;
	email: string;
	password: string;
	takrorparol: string;
}[] = [];

registrbtn.addEventListener("click", (e) => {
	e.preventDefault();
	const firstnameValue: string = registrfirstname.value;
	const lastnameValue: string = registrlasname.value;
	const telValue: string = registrtel.value;
	const emailValue: string = registremail.value;
	const passwordValue: string = registrparol.value;
	const takrorparolValue: string = registrparoltakror.value;

	malumotlar1.push({
		name: firstnameValue,
		lastname: lastnameValue,
		tel: telValue,
		email: emailValue,
		password: passwordValue,
		takrorparol: takrorparolValue,
	});
	console.log(malumotlar1);

	register1.style.display = "none";
	login1.style.display = "none";
	forget1.style.display = "grid";
});
