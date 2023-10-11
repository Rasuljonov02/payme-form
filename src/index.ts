import "./main.css";
import { faker } from "@faker-js/faker";
import * as yup from "yup";

const btn: HTMLButtonElement = document.querySelector(".btn")!;
const span: HTMLParagraphElement = document.querySelector(".span")!;
const contener: HTMLDivElement = document.querySelector(".contener")!;
const name: HTMLParagraphElement = document.querySelector(".name")!;
const email: HTMLParagraphElement = document.querySelector(".email")!;
const input: HTMLInputElement = document.querySelector("#kasb")!;
const xasb: HTMLParagraphElement = document.querySelector(".xasb")!;
const biol: HTMLParagraphElement = document.querySelector(".biol")!;
const h4: HTMLParagraphElement = document.querySelector("h4")!;
const tel: HTMLParagraphElement = document.querySelector(".tel")!;

const schema = yup.object().shape({
	name: yup
		.string()
		.matches(/^[A-Za-z\s]+$/, "Please enter only name ")
		.required("Name is required"),
});

btn.addEventListener("click", (e) => {
	const inputValue = input.value.trim();
	const numberr = !isNaN(Number(inputValue));

	if (numberr) {
		h4.innerText = "hato qiymat kirittingiz strung kiriting";
		input.className = "hato";

		return;
	}
	h4.innerText = "";

	const formData = {
		name: inputValue,
	};
	let s: number = 3;
	schema
		.validate(formData)
		.then(() => {
			const ll = setInterval(() => {
				if (s === 0) {
					input.className = "";
					clearInterval(ll);
				}
				s--;
			}, 1000);

			input.className = "zor";
		})
		.catch((error) => {
			const ll = setInterval(() => {
				if (s === 0) {
					input.className = "";
					clearInterval(ll);
				}

				s--;
			}, 1000);
			input.className = "hato";
		});
	const randomName = faker.person.fullName();
	const randomEmail = faker.internet.email();
	const randomBio = faker.lorem.paragraphs();

	const randomtel = faker.phone.number();
	tel.innerText = ` ${randomtel}`;
	xasb.innerText = inputValue;
	name.innerText = ` ${randomName}`;
	biol.innerText = ` ${randomBio}`;
	email.innerText = ` ${randomEmail}`;
	span.style.display = "flex";
	contener.style.gap = "20px";
	console.log("Button clicked!");
	console.log(randomName);
	console.log(randomEmail);
});
