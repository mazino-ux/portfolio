// TYPING EFFECT==========================================================
const typingTextElement = document.getElementById('typing');
const words = ['Full-Stack Developer', 'Front-End Developer', 'Freelancer!', 'Back-End Developer!', 'Content Creator!', 'Web Developer', 'YouTuber!', 'Writer!',];
let currentIndex = 0;
let currentWord = '';
let charIndex = 0;
let isBackspacing = false;

function updateTypingText() {
  if (!isBackspacing) {
    if (charIndex < currentWord.length) {
      typingTextElement.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;
    } else {
      isBackspacing = true;
    }
  } else {
    if (charIndex > 0) {
      typingTextElement.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;
    } else {
      isBackspacing = false;
      currentIndex = (currentIndex + 1) % words.length;
      currentWord = words[currentIndex];
    }
  }
}
// typingTextElement.style.color = getRandomColor();
function startTypingEffect() {
  currentWord = words[currentIndex];
  setInterval(updateTypingText, 100);
}

startTypingEffect();

/*====================================portfolio POPUP=====================================*/
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", (e) => {
      if (e.target.classList.contains("work-button")) {
          togglePortfolioPopup();
          portfolioItemDetails(e.target.closest(".portfolio-item"));
      }
  });

  document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup);

  function togglePortfolioPopup() {
      document.querySelector(".portfolio-popup").classList.toggle("open");
  }

  function portfolioItemDetails(portfolioItem) {
      const thumbnailSrc = portfolioItem.querySelector(".portfolio-img img").src;
      const subtitleText = portfolioItem.querySelector(".work-title").innerHTML;
      const bodyContent = portfolioItem.querySelector(".aircon-item-details").innerHTML;

      document.querySelector(".pp-thumbnail img").src = thumbnailSrc;
      document.querySelector(".portfolio-popup-subtitle span").innerHTML = subtitleText;
      document.querySelector(".portfolio-popup-body").innerHTML = bodyContent;
  }
});

// ==========================PROGRESS JS
document.addEventListener("DOMContentLoaded", function (){
  let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if(pos > 190){
          scrollProgress.style.display = "grid";
      } else {
          scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(var(--skin-color) ${scrollValue}%, #00000071 ${scrollValue}%)`;
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;


  
});


/*==================================== ASIDE =====================================*/
document.addEventListener("DOMContentLoaded", function(){
  
  const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"), // Use querySelectorAll to select all list items
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection =allSection.length;
  
  for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(e) {
      for (let j = 0; j < totalNavList; j++) {
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
    });
  }
  function showSection(element){
    for(let i = 0; i < totalSection; i++){
      allSection[i].classList.remove("active")
    }
    element.getAttribute("href").split("#");
    document.querySelector("#" + target).classList.add("active")

  }

  
  
  });

    // create instance of kinet with custom settings
    const circle = document.getElementById('follower');
    const sparkles = document.querySelectorAll('.sparkle');
  
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      // Set the circle's position to follow the mouse
      circle.style.left = mouseX + 'px';
      circle.style.top = mouseY + 'px';
  
      // Set the sparkle positions
      sparkles.forEach((sparkle, index) => {
        const angle = (index / sparkles.length) * 360; // Distribute sparkles evenly in a circle
        const radius = 30; // Adjust the radius as needed
  
        const x = mouseX + radius * Math.cos((angle * Math.PI) / 180);
        const y = mouseY + radius * Math.sin((angle * Math.PI) / 180);
  
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
      });
    });



    /*----------------------------SCROLL REVEAL EFFECT-----------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    const lime = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    const hidden1Elements = document.querySelectorAll('.hidden1');
    const hidden2Elements = document.querySelectorAll('.hidden2');
    hiddenElements.forEach((el) => lime.observe(el));
    hidden1Elements.forEach((el) => lime.observe(el));
    hidden2Elements.forEach((el) => lime.observe(el));


    window.addEventListener('scroll', function() {
      const scrollPos = window.scrollY + 20;

      sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
              link.classList.add('active'); 
            }
          });
        }
      });

    }); 

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

    // Get the hire-me link element
const hireMeLink = document.querySelector('.hire-me');
const popped = document.getElementById('hire-me-popup');
const closePopped = document.querySelector('.close-popped');
const popContent = document.querySelector('.popped-content');
hireMeLink.addEventListener('click', (e) => {
    e.preventDefault();
    popped.style.display = "inline-block";
});
closePopped.addEventListener('click', () => {
   popped.style.display = "none";
});
window.addEventListener('click', (e) => {
    if (e.target === popped) {
        popped.style.display = "block";
    }
});


// Update the form position based on cursor movement
popContent.addEventListener('mousemove', (e) => {
  const offsetX = (e.clientX - pageCenterX) / pageCenterX;
  const offsetY = (e.clientY - pageCenterY) / pageCenterY;
  popContent.style.transform = `rotateX(${-offsetY * 10}deg) rotateY(${offsetX * 10}deg) translateZ(50px) scale(0.9)`;
});

// Reset the form position when the cursor leaves the popup
popContent.addEventListener('mouseleave', () => {
  popContent.style.transform = 'rotateX(0) rotateY(0) translateZ(0) scale(1)';
});

function sendEmail() {
  let email = 'mathena06@gmail.com'
  var emailAddress = 'mathena06@gmail.com';
  var subject = 'Subject of the email'; // You can change this to the desired subject
  var mailtoUrl = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);

  // Open the default email client
  window.location.href = mailtoUrl;
}



// Call the function when the page loads
window.onload = displayGeoLocation;
document.addEventListener("DOMContentLoaded", function () {
// Simulate delay (You can replace this with actual loading logic)
setTimeout(function () {
// Hide loader and show content
document.getElementById("loader-container").style.display = "none";
document.getElementById("content").style.display = "block";
}, 2000); // Replace 2000 with the desired delay in milliseconds
});

});

// Firebase Configuration (using environment variables)
document.addEventListener("DOMContentLoaded", function () {
    // Import the Firebase modules
   
  // Initialize Firebase
  const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  // Handle form submission
  document.getElementById('contactForm')?.addEventListener('submit', function(e) {
      e.preventDefault();

      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Reference to the 'messages' path in the database
      const messagesRef = database.ref('messages');
      const newMessageRef = messagesRef.push();
      
      newMessageRef.set({
          firstName: firstName,
          lastName: lastName,
          email: email,
          subject: subject,
          message: message,
          timestamp: firebase.database.ServerValue.TIMESTAMP
      }).then(() => {
          alert('Message sent successfully!');
          document.getElementById('contactForm').reset();
      }).catch((error) => {
          console.error('Error sending message:', error);
          alert('Error sending message. Please try again.');
      });
  });

});

// Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('home', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00e4d4" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#00e4d4", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });

  // ScrollReveal Configuration
  ScrollReveal().reveal('.home-info', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.home-img', {
    delay: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.btn', {
    delay: 700,
    scale: 0.85,
    easing: 'ease-in-out'
  });

  // Enhanced cursor follower
  const follower = document.getElementById('follower');
  const links = document.querySelectorAll('a, button, .hover-effect');
  
  document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  });

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      follower.style.transform = 'scale(3)';
      follower.style.backgroundColor = 'transparent';
      follower.style.border = '1px solid var(--skin-color)';
    });
    
    link.addEventListener('mouseleave', () => {
      follower.style.transform = 'scale(1)';
      follower.style.backgroundColor = 'var(--skin-color)';
      follower.style.border = 'none';
    });
  });
});