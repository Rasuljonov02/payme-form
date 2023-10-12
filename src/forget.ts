const forget: HTMLParagraphElement = document.querySelector(".forget")!;
const forgetemail: HTMLInputElement = document.querySelector("#forgetemail")!;
const forgetparol: HTMLInputElement = document.querySelector("#forgetparol")!;
const forgetbtn: HTMLButtonElement = document.querySelector("#forgetbtn")!;
const register: HTMLParagraphElement = document.querySelector(".register")!;
const forgetparoltakror: HTMLInputElement = document.querySelector("#forgetparoltakror")!;

let forgetPasswordInfo: { forgetemail: string; forgetparol: string; forgetparoltakror: string }[] = [];

forgetbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const forgetparolValue: string = forgetparol.value;
  const forgetemailValue: string = forgetemail.value;

  register.style.display = "block";
  forget.style.display = "none";
  forgetPasswordInfo.push({ forgetemail: forgetemailValue, forgetparol: forgetparolValue, forgetparoltakror: '' });
  console.log(forgetPasswordInfo);
});