const lessons = {
    conjunctions: {
        title: "🧩 Conjunctions Kingdom",
        emoji: "🔗✨",
        explanation: `
            <h3>Let's Learn About Connectors! 🌉</h3>
            <p>Conjunctions are words that connect parts of sentences:</p>
            <div class="example">
                <p>🐵 <strong>AND</strong> - joins similar ideas<br>
                <em>"Monkeys eat bananas <u>and</u> jump in trees"</em></p>
                
                <p>🦁 <strong>OR</strong> - shows choice<br>
                <em>"Should we see lions <u>or</u> tigers first?"</em></p>
                
                <p>🐻 <strong>BUT</strong> - shows contrast<br>
                <em>"Bears look fluffy <u>but</u> can be dangerous"</em></p>
            </div>
        `,
        exercises: [
            {q: "Zebras are black ___ white 🦓", o: ["and", "or", "but"], a: "and"},
            {q: "Should I read a book ___ watch TV? 📚📺", o: ["and", "or", "but"], a: "or"},
            {q: "I want ice cream, ___ I'm not hungry 🍦", o: ["and", "or", "but"], a: "but"},
            {q: "We need milk ___ eggs 🥛🥚", o: ["and", "or", "but"], a: "and"},
            {q: "Is your birthday in July ___ August? 🎂", o: ["and", "or", "but"], a: "or"}
        ]
    },
    questionWords: {
        title: "❓ Question Quest",
        emoji: "🔍🐾",
        explanation: `
            <h3>Asking Questions is Fun! 🕵️♀️</h3>
            <div class="word-list">
                <p>🐶 <strong>WHO</strong> - About people<br>
                <em>"<u>Who</u> is your friend?"</em></p>
                
                <p>🏠 <strong>WHERE</strong> - About places<br>
                <em>"<u>Where</u> is the library?"</em></p>
                
                <p>⏰ <strong>WHEN</strong> - About time<br>
                <em>"<u>When</u> is lunch time?"</em></p>
                
                <p>📚 <strong>WHAT</strong> - About things<br>
                <em>"<u>What</u> are you reading?"</em></p>
                
                <p>🤔 <strong>WHY</strong> - About reasons<br>
                <em>"<u>Why</u> is the sky blue?"</em></p>
            </div>
        `,
        exercises: [
            {q: "___ is hiding behind the tree? 🌳", o: ["Who", "Where", "What"], a: "Who"},
            {q: "___ do birds fly south? 🕊️", o: ["Why", "When", "What"], a: "Why"},
            {q: "___ is the school picnic? 🧺", o: ["When", "Who", "Where"], a: "When"},
            {q: "___ is in your lunchbox? 🍎", o: ["What", "Where", "Why"], a: "What"},
            {q: "___ are my glasses? 👓", o: ["Where", "What", "Who"], a: "Where"}
        ]
    },
    canCant: {
        title: "🐾 Animal Abilities",
        emoji: "🦁🐬",
        explanation: `
            <h3>What Can Animals Do? 🦸♂️</h3>
            <p>Let's learn about animal capabilities:</p>
            <div class="animal-facts">
                <p>🐝 Bees <strong>can</strong> fly!<br>
                🐧 Penguins <strong>can't</strong> fly!<br>
                🐘 Elephants <strong>can</strong> swim!<br>
                🐍 Snakes <strong>can't</strong> blink!</p>
            </div>
        `,
        exercises: [
            {q: "Dogs ___ bark 🐶", o: ["can", "can't"], a: "can"},
            {q: "Fish ___ climb trees 🐠", o: ["can", "can't"], a: "can't"},
            {q: "Birds ___ sing 🐦", o: ["can", "can't"], a: "can"},
            {q: "Cats ___ drive cars 🚗", o: ["can", "can't"], a: "can't"},
            {q: "Monkeys ___ swing 🐒", o: ["can", "can't"], a: "can"}
        ]
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    createMenu();
});

function createMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    Object.entries(lessons).forEach(([key, lesson]) => {
        const btn = document.createElement('button');
        btn.className = 'menu-btn';
        btn.innerHTML = `${lesson.emoji} ${lesson.title}`;
        btn.addEventListener('click', () => showLesson(key));
        menuGrid.appendChild(btn);
    });
}

function showLesson(lessonKey) {
    const lesson = lessons[lessonKey];
    const section = document.querySelector('.lesson-section');
    
    section.innerHTML = `
        <button class="back-btn" onclick="showMenu()">← Back to Menu</button>
        <h2>${lesson.emoji} ${lesson.title}</h2>
        <div class="explanation">${lesson.explanation}</div>
        ${lesson.exercises.map((ex, index) => `
            <div class="exercise-card">
                <h3>Exercise ${index + 1}</h3>
                <p>${ex.q}</p>
                <div class="options-grid">
                    ${ex.o.map(opt => `
                        <button class="option-btn" 
                                onclick="checkAnswer(this, '${opt}', '${ex.a}')">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
                <div class="feedback"></div>
            </div>
        `).join('')}
    `;
    
    document.querySelector('.welcome').classList.remove('active');
    section.style.display = 'block';
    window.scrollTo(0, 0);
}

function showMenu() {
    document.querySelector('.welcome').classList.add('active');
    document.querySelector('.lesson-section').style.display = 'none';
}

function checkAnswer(button, selected, correct) {
    const feedback = button.parentElement.nextElementSibling;
    feedback.style.display = 'block';
    
    if (selected === correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = '🎉 Correct! Great job! 🌟';
        button.style.background = '#C8F7C5';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = '😟 Try again! You can do it! 💪';
        button.style.background = '#FFD8D2';
    }
}
