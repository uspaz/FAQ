let questions = document.getElementsByClassName("content__question");
let arr = new Set(questions);

arr.forEach(e => {
  e.addEventListener("click", () =>{
    arr.forEach(el => {
      el !== e && el.classList.remove("active")
    })
    e.classList.toggle("active");
  })
})


