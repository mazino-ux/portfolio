
/*  -------------------------------------------- toggle style switcher -----------------------------------------*/
document.addEventListener("DOMContentLoaded", function(){
  const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
  styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
      document.querySelector(".style-switcher").classList.remove(".open");
    }
  });

  
/* .............................THEME COLOR.................................... */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute('disabled');
        }else{
            style.setAttribute('disabled','true');
        }
    })
}
 

})


const bubble = document.getElementById('bubble');
const burst = document.getElementById('burst');

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Adjust the scroll threshold and burst size as needed
  if (scrollY > 200) {
    bubble.style.display = 'none';
    burst.style.display = 'block';
    burst.style.animation = 'none'; // Stop the wobbling animation before bursting
  } else {
    bubble.style.display = 'block';
    burst.style.display = 'none';
    burst.style.animation = 'burstBubble 0.5s ease-in-out forwards'; // Restart the burst animation
  }
});

let buttons = document.querySelectorAll(".color");
for (var button of buttons) {
  button.addEventListener("click", (e) => {
    let target = e.target;
    let open = document.querySelector(".open");
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    target.classList.add("active");

    // ---------------------------------------------------
    let root = document.querySelector(":root"),
      dataColor = target.getAttribute("data-color"),
      color = dataColor.split(" ");
  });
}

console.log(buttons);



const elements = document.querySelectorAll('.scroll-element[data-unset="true"]');
        
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.removeAttribute('data-unset'); // Remove the attribute to prevent reanimation
            observer.unobserve(element); // Stop observing this element
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});

