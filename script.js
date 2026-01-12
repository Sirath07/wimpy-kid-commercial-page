// Hero Button
function showAlert() {
  alert("Welcome to the Wimpy Kid world! 🚀");
}

// Fun Zone Quiz
function startQuiz() {
  const characters = [
    "Greg Heffley – The Wimpy Kid himself!",
    "Rowley Jefferson – Loyal and cheerful best friend!",
    "Rodrick Heffley – The mischievous older brother!",
    "Fregley – The weird but funny classmate!",
    "Susan Heffley – Greg’s overprotective mom!",
    "Frank Heffley – Greg’s strict but caring dad!",
    "Manny Heffley – The spoiled younger brother!",
    "Holly Hills – Greg’s crush!",
    "Chirag Gupta – Greg’s clever classmate!",
    "Mr. Jefferson – Rowley’s strict dad!"
  ];

  // Shuffle characters
  const shuffled = characters.sort(() => Math.random() - 0.5);

  // Pick one random after shuffle
  const randomCharacter = shuffled[Math.floor(Math.random() * shuffled.length)];

  // Show result bigger + styled
  const resultBox = document.getElementById("quiz-result");
  resultBox.innerText = "🎉 You are most like: " + randomCharacter;
  resultBox.style.fontSize = "20px";
  resultBox.style.color = "#e63946";;
  resultBox.style.fontWeight = "bold";
  resultBox.style.marginTop = "15px";
}

// Joke Generator
function tellJoke() {
  const jokes = [
    "Greg: My life is basically homework, humiliation, and hope. 😂",
    "Rowley: Zoo-Wee Mama! That joke never gets old! 🤪",
    "Rodrick: I told mom I cleaned my room... I just shoved everything under the bed. 😎",
    "Fregley: Wanna see my secret freckle? (Don’t ask where... 😳)",
    "Manny: Bubby! That’s all I need to say. 👶",
    "Dad: Back in my day, we didn’t have video games... we had chores! 😤",
    "Mom: ‘Family road trip!’ = 8 hours of Greg screaming in the back seat. 🚗💨",
    "Chirag: Remember when Greg said I was invisible? Well, I’m still here! 👻",
    "Holly: Sorry Greg, I don’t even remember your name. 💁‍♀️",
    "Rodrick’s Band: Löded Diper is gonna be BIG one day… trust us! 🎸"
  ];

  // Shuffle jokes for variety
  const shuffled = jokes.sort(() => Math.random() - 0.5);
  
  // Pick random joke
  const randomJoke = shuffled[Math.floor(Math.random() * shuffled.length)];

  // Style + show joke
  const jokeBox = document.getElementById("joke-result");
  jokeBox.innerText = "😂 " + randomJoke;
  jokeBox.style.fontSize = "18px";
  jokeBox.style.fontWeight = "bold";
  jokeBox.style.color = "#ff7f11";
  jokeBox.style.marginTop = "15px";
}

// Doodle Challenge (with images)
function randomDoodle() {
  const doodles = [
    "cup.png",
    "star.png",
    "glass.png",
    "plane.png",
    "beach.png",
    "game.png",
    "letter.png",
    "electric-guitar.png",
    "drums.png",
    "arrow.png",
    "pencil.png",
    "push-pins.png",
    "game-controller.png",
    "squiggle.png",
    "snapshot.png"
  ];
  const random = doodles[Math.floor(Math.random() * doodles.length)];
  document.getElementById("doodle-display").innerHTML = `<img src="${random}" alt="Random Doodle" style="width:80px;">`;
}

// Newsletter
function subscribe(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email").value;
  const msg = document.getElementById("subscribe-msg");
  if(emailInput.includes("@")){
    msg.style.color = "green";
    msg.innerText = "🎉 Thanks for subscribing, check your inbox soon!";
  } else {
    msg.style.color = "red";
    msg.innerText = "⚠️ Please enter a valid email address.";
  }
}

// Carousel
let currentIndex = 0;
function showBooks() {
  const container = document.getElementById("book-container");
  const card = container.querySelector(".book-card");
  const cardWidth = card.offsetWidth + 20;
  container.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}
function nextBook() {
  const container = document.getElementById("book-container");
  const totalBooks = container.children.length;
  if(currentIndex < totalBooks - 3){
    currentIndex++;
    showBooks();
  }
}
function prevBook() {
  if(currentIndex > 0){
    currentIndex--;
    showBooks();
  }
}

// Doodle Scroll Animation
function showDoodlesOnScroll() {
  const doodles = document.querySelectorAll(".doodle");
  doodles.forEach(d => {
    const rect = d.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) d.classList.add("show");
  });

  const boxes = document.querySelectorAll(".fun-zone .quiz-box, .fun-zone .joke-box, .fun-zone .doodle-game");
  boxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) box.classList.add("show");
  });
}
window.addEventListener("scroll", showDoodlesOnScroll);

// Show doodles on scroll
function showDoodles() {
  const doodles = document.querySelectorAll(".doodle");
  doodles.forEach(d => {
    const rect = d.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      d.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showDoodles);
window.addEventListener("load", showDoodles);

