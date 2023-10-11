
const button:HTMLButtonElement = document.querySelector("button")!,
      toast:HTMLParagraphElement = document.querySelector(".toast")!,
      closeIcon:HTMLParagraphElement = document.querySelector(".close")!,
      progress:HTMLParagraphElement = document.querySelector(".progress")!;

      let timer1:any, timer2:any;

      button.addEventListener("click", () => {
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      });

      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");

        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
      });