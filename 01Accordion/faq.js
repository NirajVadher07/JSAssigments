const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

function showFaq() {
  createFaq();  
}

function createFaq() {
  let container = document.querySelector(".accordian_body")
  faqData.forEach((element) => {
    let faq =  document.createElement("div");
    faq.classList.add("faq");

    let faq_header = document.createElement("div");
    faq_header.classList.add("faq_header");
    
    let h3 = document.createElement("h3");
    const text =  document.createTextNode(element.question);

    let button = document.createElement("button");
    button.classList.add("show_btn");
    button.innerText = " + "

    let para = document.createElement("p");
    para.classList.add("hidden")
    let text1 =  document.createTextNode(element.answer)
    
    para.appendChild(text1)
    h3.appendChild(text);
    faq_header.appendChild(h3)
    faq_header.appendChild(button);
    faq.appendChild(faq_header);
    faq.appendChild(para);
    container.appendChild(faq)

    button.addEventListener("click" , ()=>{
      if (para.style.display == 'none') {
        para.style.display = "inline";
        button.innerText = " - ";
      } else {
        para.style.display = "none";
        button.innerText = " + ";    
      }
    })
  })
}

showFaq();
