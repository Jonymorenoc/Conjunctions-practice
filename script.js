const lessons = {
    conjunctions: {
        title: "🔗 Conjunctions Practice",
        emoji: "🧩",
        explanation: 
            `<div class="explanation">
                <h3>Connecting Words Fun! 🌉</h3>
                <p><strong>AND</strong> - Joins similar ideas<br>
                <strong>OR</strong> - Shows choices<br>
                <strong>BUT</strong> - Shows contrast</p>
                <div class="example">
                    <p>🐵 "Monkeys eat bananas <u>and</u> jump."<br>
                    🦁 "Lions <u>or</u> tigers?"<br>
                    🐻 "Big <u>but</u> friendly."</p>
                </div>
            </div>`,
        exercises: [
            // Existing exercises
            {q: "Zebras are black ___ white 🦓", o: ["and", "or", "but"], a: "and"},
            {q: "Pancakes ___ waffles? 🥞", o: ["and", "or", "but"], a: "or"},
            {q: "I want ice cream, ___ I'm full 🍦", o: ["but", "or", "and"], a: "but"},
            {q: "Book: table ___ shelf? 📚", o: ["or", "and", "but"], a: "or"},
            {q: "Baby: hungry ___ tired 👶", o: ["and", "but", "or"], a: "and"},
            {q: "TV broken ___ they watch 📺", o: ["but", "and", "or"], a: "but"},
            {q: "Baseball bat missing ___ ⚾", o: ["but", "or", "and"], a: "but"},
            // New exercises
            {q: "Apples ___ oranges? 🍎🍊", o: ["or", "and", "but"], a: "or"},
            {q: "Sunny ___ raining? 🌞🌧️", o: ["but", "and", "or"], a: "but"},
            {q: "Pizza ___ pasta 🍕🍝", o: ["and", "or", "but"], a: "and"},
            {q: "Want milk ___ juice? 🥛🧃", o: ["or", "but", "and"], a: "or"},
            // Additional exercises
            {q: "Dogs ___ cats get along 🐶🐱", o: ["and", "but", "or"], a: "and"},
            {q: "Would you like tea ___ coffee? ☕🍵", o: ["and", "but", "or"], a: "or"},
            {q: "He is tall ___ strong 💪", o: ["and", "but", "or"], a: "and"},
            {q: "She wanted to play, ___ it was raining ☔", o: ["and", "but", "or"], a: "but"}
        ]
    },
    questionWords: {
        title: "❓ Question Words",
        emoji: "🔍",
        explanation: 
            `<div class="explanation">
                <h3>Asking Questions 🕵️‍♀️</h3>
                <div class="word-list">
                    <p>👦 <strong>WHO</strong> - People<br>
                    🏠 <strong>WHERE</strong> - Places<br>
                    ⏰ <strong>WHEN</strong> - Time<br>
                    📦 <strong>WHAT</strong> - Things<br>
                    🤔 <strong>WHY</strong> - Reasons</p>
                </div>
            </div>`,
        exercises: [
            // Existing exercises
            {q: "___ is crying? 😢", o: ["Why", "Who", "Where"], a: "Who"},
            {q: "___ is backpack? 🎒", o: ["Where", "What", "When"], a: "Where"},
            {q: "___ is she doing? 📚", o: ["What", "Who", "Why"], a: "What"},
            {q: "___ in kitchen? 👨🍳", o: ["Who", "Where", "When"], a: "Who"},
            {q: "___ birthday? 🎂", o: ["When", "What", "Why"], a: "When"},
            // New exercises
            {q: "___ is your teacher? 👩🏫", o: ["Who", "Where", "What"], a: "Who"},
            {q: "___ is the park? 🌳", o: ["Where", "When", "Why"], a: "Where"},
            {q: "___ is lunch time? 🕛", o: ["When", "What", "Who"], a: "When"},
            {q: "___ is the sky blue? 🌌", o: ["Why", "Where", "How"], a: "Why"},
            // Additional exercises
            {q: "___ are you going? 🚌", o: ["Where", "Why", "Who"], a: "Where"},
            {q: "___ is your favorite color? 🎨", o: ["What", "When", "Who"], a: "What"},
            {q: "___ do you like pizza? 🍕", o: ["Why", "Where", "Who"], a: "Why"},
            {q: "___ is your birthday? 🎉", o: ["When", "What", "Who"], a: "When"}
        ]
    },
    canCant: {
        title: "🐾 Can/Can't",
        emoji: "🦁",
        explanation: 
            `<div class="explanation">
                <h3>Animal Abilities 🦸‍♂️</h3>
                <div class="animal-facts">
                    <p>🐝 <strong>CAN</strong> fly!<br>
                    🐧 <strong>CAN'T</strong> fly!<br>
                    🐘 <strong>CAN</strong> swim!<br>
                    🐍 <strong>CAN'T</strong> blink!</p>
                </div>
            </div>`,
        exercises: [
            // Existing exercises
            {q: "Seals ___ clap 🦭", o: ["can", "can't"], a: "can"},
            {q: "Cows ___ speak 🐮", o: ["can't", "can"], a: "can't"},
            {q: "Parrots ___ talk 🦜", o: ["can", "can't"], a: "can"},
            {q: "Bees ___ hide 🐝", o: ["can't", "can"], a: "can't"},
            {q: "Spiders ___ spin 🕷️", o: ["can", "can't"], a: "can"},
            {q: "Whales ___ land 🐳", o: ["can't", "can"], a: "can't"},
            {q: "Goats ___ sing 🐐", o: ["can't", "can"], a: "can't"},
            {q: "Dolphins ___ click 🐬", o: ["can", "can't"], a: "can"},
            // New exercises
            {q: "Frogs ___ jump 🐸", o: ["can", "can't"], a: "can"},
            {q: "Fish ___ walk 🐠", o: ["can't", "can"], a: "can't"},
            {q: "Bats ___ see 🦇", o: ["can", "can't"], a: "can"},
            {q: "Pigs ___ fly 🐷", o: ["can't", "can"], a: "can't"},
            // Additional exercises
            {q: "Kangaroos ___ hop 🦘", o: ["can", "can't"], a: "can"},
            {q: "Snakes ___ have legs 🐍", o: ["can't", "can"], a: "can't"},
            {q: "Eagles ___ soar high 🦅", o: ["can", "can't"], a: "can"},
            {q: "Turtles ___ run fast 🐢", o: ["can't", "can"], a: "can't"}
        ]
    },
    progressive: {
        title: "🔄 Present Progressive",
        emoji: "⏳",
        explanation: 
            `<div class="explanation">
                <h3>Right Now Actions 🏃‍♂️</h3>
                <p>Form questions with:<br>
                <strong>Am/Is/Are</strong> + verb+ing + ?<br>
                Example: "She <u>is playing</u> → Is she playing?"</p>
            </div>`,
        exercises: [
            // Existing exercises
            {q: "He is working → ? 💼", a: "Is he working?", t: "text"},
            {q: "We are eating → ? 🍽️", a: "Are we eating?", t: "text"},
            {q: "You are running → ? 🏃‍♀️", a: "Are you running?", t: "text"},
            {q: "They are learning → ? 📖", a: "Are they learning?", t: "text"},
            {q: "I am playing → ? 🎮", a: "Am I playing?", t: "text"},
            {q: "She is helping → ? 🩺", a: "Is she helping?", t: "text"},
            // New exercises
            {q: "Dogs are barking → ? 🐶", a: "Are dogs barking?", t: "text"},
            {q: "Mom is cooking → ? 👩‍🍳", a: "Is mom cooking?", t: "text"},
            {q: "Kids are sleeping → ? 😴", a: "Are kids sleeping?", t: "text"},
            {q: "Bird is singing → ? 🐦", a: "Is bird singing?", t: "text"},
            // Additional exercises
            {q: "Dad is reading → ? 📖", a: "Is dad reading?", t: "text"},
            {q: "Sisters are dancing → ? 💃", a: "Are sisters dancing?", t: "text"},
            {q: "Brother is drawing → ? ✏️", a: "Is brother drawing?", t: "text"},
            {q: "Grandpa is gardening → ? 🌱", a: "Is grandpa gardening?", t: "text"}
        ]
    },
    negativeProgressive: {
        title: "🚫 Negative Progressive",
        emoji: "🙅‍♂️",
        explanation: 
            `<div class="explanation">
                <h3>Saying "Not Now" 🙅‍♀️</h3>
                <p>Add <strong>not</strong> before verb+ing<br>
                Example: "They <u>are not</u> watching."</p>
            </div>`,
        exercises: [
            // Existing exercises
            {q: "They are watching TV →", a: "They are not watching TV", t: "text"},
            {q: "He is looking →", a: "He is not looking", t: "text"},
            {q: "We are cooking →", a: "We are not cooking", t: "text"},
            {q: "Helen is dancing →", a: "Helen is not dancing", t: "text"},
            {q: "I am finding →", a: "I am not finding", t: "text"},
            {q: "I am doing →", a: "I am not doing", t: "text"},
            // New exercises
            {q: "Cat is sleeping →", a: "Cat is not sleeping", t: "text"},
            {q: "Teachers are talking →", a: "Teachers are not talking", t: "text"},
            {q: "Sun is shining →", a: "Sun is not shining", t: "text"},
            {q: "Baby is crying →", a: "Baby is not crying", t: "text"},
            // Additional exercises
            {q: "Bird is flying →", a: "Bird is not flying", t: "text"},
            {q: "Children are playing →", a: "Children are not playing", t: "text"},
            {q: "Mom is reading →", a: "Mom is not reading", t: "text"},
            {q: "Dad is working →", a: "Dad is not working", t: "text"}
        ]
    }
};

// Function to initialize the menu
function initMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';

    for (let key in lessons) {
        const lesson = lessons[key];
        const button = document.createElement('button');
        button.classList.add('menu-btn');
        button.innerHTML = `${lesson.emoji} ${lesson.title.split(" ")[0]} ${lesson.emoji}`;
        button.setAttribute('data-lesson', key);
        button.setAttribute('aria-label', lesson.title);
        menuGrid.appendChild(button);
    }

    // Add event listeners to buttons
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showLesson(btn.getAttribute('data-lesson'));
        });
    });
}

// Function to display a lesson
function showLesson(lessonKey) {
    const lesson = lessons[lessonKey];
    const welcomeSection = document.querySelector('.welcome');
    const lessonSection = document.querySelector('.lesson-section');

    welcomeSection.classList.remove('active');
    lessonSection.classList.add('active');
    lessonSection.style.display = 'block';
    lessonSection.innerHTML = `
        <button class="back-btn">⬅️ Back</button>
        <h2>${lesson.title}</h2>
        ${lesson.explanation}
        <div class="exercises">
            ${lesson.exercises.map((ex, index) => `
                <div class="exercise-card">
                    <p>${ex.q}</p>
                    ${ex.o ? `
                    <div class="options-grid">
                        ${ex.o.map(option => `<button class="option-btn">${option}</button>`).join('')}
                    </div>
                    ` : `
                    <div class="options-grid">
                        <input type="text" class="text-input" placeholder="Type your answer">
                    </div>
                    `}
                    <div class="feedback" style="display:none;"></div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listener to back button
    document.querySelector('.back-btn').addEventListener('click', () => {
        lessonSection.classList.remove('active');
        lessonSection.style.display = 'none';
        welcomeSection.classList.add('active');
    });

    // Add event listeners to option buttons
    lessonSection.querySelectorAll('.option-btn').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const exerciseCard = btn.closest('.exercise-card');
            const feedback = exerciseCard.querySelector('.feedback');
            const currentExercise = lesson.exercises[idx];
            const selectedAnswer = btn.textContent.trim().toLowerCase();
            const correctAnswer = currentExercise.a.trim().toLowerCase();

            if (selectedAnswer === correctAnswer) {
                feedback.textContent = "✅ Correct!";
                feedback.classList.add('correct');
                feedback.classList.remove('incorrect');
            } else {
                feedback.textContent = `❌ Incorrect! The correct answer is: "${currentExercise.a}"`;
                feedback.classList.add('incorrect');
                feedback.classList.remove('correct');
            }
            feedback.style.display = 'block';
        });
    });

    // Add event listeners to text inputs
    lessonSection.querySelectorAll('.text-input').forEach((input, idx) => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const exerciseCard = input.closest('.exercise-card');
                const feedback = exerciseCard.querySelector('.feedback');
                const currentExercise = lesson.exercises[idx];
                const userAnswer = input.value.trim().toLowerCase();
                const correctAnswer = currentExercise.a.trim().toLowerCase();

                if (userAnswer === correctAnswer) {
                    feedback.textContent = "✅ Correct!";
                    feedback.classList.add('correct');
                    feedback.classList.remove('incorrect');
                } else {
                    feedback.textContent = `❌ Incorrect! The correct answer is: "${currentExercise.a}"`;
                    feedback.classList.add('incorrect');
                    feedback.classList.remove('correct');
                }
                feedback.style.display = 'block';
                input.value = '';
            }
        });

        // Optional: Add a submit button for accessibility
        const submitBtn = document.createElement('button');
        submitBtn.textContent = "Submit";
        submitBtn.classList.add('submit-btn');
        exerciseCard.appendChild(submitBtn);

        submitBtn.addEventListener('click', () => {
            const exerciseCard = submitBtn.closest('.exercise-card');
            const feedback = exerciseCard.querySelector('.feedback');
            const currentExercise = lesson.exercises[idx];
            const userAnswer = exerciseCard.querySelector('.text-input').value.trim().toLowerCase();
            const correctAnswer = currentExercise.a.trim().toLowerCase();

            if (userAnswer === correctAnswer) {
                feedback.textContent = "✅ Correct!";
                feedback.classList.add('correct');
                feedback.classList.remove('incorrect');
            } else {
                feedback.textContent = `❌ Incorrect! The correct answer is: "${currentExercise.a}"`;
                feedback.classList.add('incorrect');
                feedback.classList.remove('correct');
            }
            feedback.style.display = 'block';
            exerciseCard.querySelector('.text-input').value = '';
        });
    });
}

// Initialize the menu on page load
document.addEventListener('DOMContentLoaded', initMenu);
