document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

function startAdventure() {
    alert("Welcome to IQTOPIA! Let's start your journey.");
}

function startGame(gameType) {
    if (gameType === "memory") {
        alert("Memory Match: Find matching pairs of images!");
    } else if (gameType === "puzzle") {
        alert("Puzzle Quest: Solve the puzzle to reveal a magical story!");
    }
}

function startIQTest() {
    let score = 0;
    let q1 = prompt("What is 2 + 2?");
    if (q1 == "4") score++;
    let q2 = prompt("Which image matches the first one? (Visual selection needed)");
    score++; 
    alert("Your IQ Test Score: " + score + "/2");
}
