
/*  -------------------------------------------- toggle style switcher -----------------------------------------*/
// style-switcher.js
function initStyleSwitcher() {
  const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
  const styleSwitcher = document.querySelector(".style-switcher");
  
  if (styleSwitcherToggle && styleSwitcher) {
      // Toggle switcher
      styleSwitcherToggle.addEventListener("click", () => {
          styleSwitcher.classList.toggle("open");
      });

      // Hide on scroll
      window.addEventListener("scroll", () => {
          if (styleSwitcher.classList.contains("open")) {
              styleSwitcher.classList.remove("open");
          }
      });

      // Theme colors
      const colors = document.querySelectorAll(".color");
      colors.forEach(color => {
          color.addEventListener("click", function() {
              const colorValue = this.getAttribute("data-color") || this.style.backgroundColor;
              if (colorValue) {
                  document.documentElement.style.setProperty('--skin-color', colorValue);
                  document.documentElement.style.setProperty('--skinlight', `${colorValue}29`);
                  localStorage.setItem('selectedColor', colorValue);
              }
          });
      });

      // Load saved color
      const savedColor = localStorage.getItem('selectedColor');
      if (savedColor) {
          document.documentElement.style.setProperty('--skin-color', savedColor);
          document.documentElement.style.setProperty('--skinlight', `${savedColor}29`);
      }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStyleSwitcher);
} else {
  initStyleSwitcher();
}
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

