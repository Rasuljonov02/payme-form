import "./main.css";
// import * as yup from "yup";
import "./register";
import "./forget";

const login: HTMLDivElement = document.querySelector(".login")!;
const parol: HTMLInputElement = document.querySelector("#loginparol")!;
const email: HTMLInputElement = document.querySelector("#loginemail")!;
const loginbtn: HTMLButtonElement = document.querySelector("#loginbtn")!;
const register: HTMLDivElement = document.querySelector(".register")!;
let malumotlar: { email: string; password: string }[] = [];

loginbtn.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  const emailValue: string = email.value;
  const parolValue: string = parol.value;

  register.style.display = "block";
  login.style.display = "none";
  malumotlar.push({ email: emailValue, password: parolValue });
  console.log(malumotlar);
});
