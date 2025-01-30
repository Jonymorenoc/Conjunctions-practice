/*************************************************************
 * 1. Lesson Data
 *************************************************************/
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
          🦁 "Do you like Lions <u>or</u> tigers?"<br>
          🐻 "Big <u>but</u> friendly."</p>
        </div>
      </div>`,
    exercises: [
      {q: "Zebras are black ___ white 🦓", o: ["and", "or", "but"], a: "and", tip: "AND connects two similar ideas."},
      {q: "Do you want pancakes ___ waffles? 🥞", o: ["and", "or", "but"], a: "or", tip: "OR presents a choice between options."},
      {q: "I want ice cream, ___ I'm full 🍦", o: ["but", "or", "and"], a: "but", tip: "BUT shows a contrast between two statements."},
      {q: "Do you prefer a book, table ___ shelf? 📚", o: ["or", "and", "but"], a: "or", tip: "OR presents a choice between options."},
      {q: "Baby is hungry ___ tired 👶", o: ["and", "but", "or"], a: "and", tip: "AND connects two similar states."},
      {q: "The TV is broken ___ they want to watch 📺", o: ["but", "and", "or"], a: "but", tip: "BUT shows a contrast between two statements."},
      {q: "The baseball bat is missing ___ it's not fun ⚾", o: ["but", "or", "and"], a: "but", tip: "BUT shows a contrast between two statements."},
      {q: "Do you like apples ___ oranges? 🍎🍊", o: ["or", "and", "but"], a: "or", tip: "OR presents a choice between options."},
      {q: "It is sunny ___ raining today? 🌞🌧️", o: ["but", "and", "or"], a: "but", tip: "BUT shows a contrast between two statements."},
      {q: "Would you like pizza ___ pasta for dinner? 🍕🍝", o: ["and", "or", "but"], a: "and", tip: "AND connects two similar options."},
      {q: "Do you want milk ___ juice? 🥛🧃", o: ["or", "but", "and"], a: "or", tip: "OR presents a choice between options."},
      {q: "Dogs ___ cats get along well 🐶🐱", o: ["and", "but", "or"], a: "and", tip: "AND connects two similar subjects."},
      {q: "Would you like tea ___ coffee? ☕🍵", o: ["and", "but", "or"], a: "or", tip: "OR presents a choice between options."},
      {q: "He is tall ___ strong 💪", o: ["and", "but", "or"], a: "and", tip: "AND connects two similar qualities."},
      {q: "She wanted to play, ___ it was raining ☔", o: ["and", "but", "or"], a: "but", tip: "BUT shows a contrast between two statements."}
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
      {q: "___ is crying? 😢", o: ["Who", "Why", "Where"], a: "Who", tip: "WHO asks about a person."},
      {q: "___ is your backpack? 🎒", o: ["Where", "What", "When"], a: "Where", tip: "WHERE asks about a place."},
      {q: "___ is she doing? 📚", o: ["What", "Who", "Why"], a: "What", tip: "WHAT asks about an action or thing."},
      {q: "___ is in the kitchen? 👨🍳", o: ["Who", "Where", "When"], a: "Who", tip: "WHO asks about a person."},
      {q: "___ is your birthday? 🎂", o: ["When", "What", "Why"], a: "When", tip: "WHEN asks about time."},
      {q: "___ is your teacher? 👩🏫", o: ["Who", "Where", "What"], a: "Who", tip: "WHO asks about a person."},
      {q: "___ is the park? 🌳", o: ["Where", "When", "Why"], a: "Where", tip: "WHERE asks about a place."},
      {q: "___ is lunch time? 🕛", o: ["When", "What", "Who"], a: "When", tip: "WHEN asks about time."},
      {q: "___ is the sky blue? 🌌", o: ["Why", "Where", "How"], a: "Why", tip: "WHY asks about reasons."},
      {q: "___ are you going to school? 🚌", o: ["Where", "Why", "Who"], a: "Where", tip: "WHERE asks about a place."},
      {q: "___ is your favorite color? 🎨", o: ["What", "When", "Who"], a: "What", tip: "WHAT asks about things."},
      {q: "___ do you like pizza? 🍕", o: ["Why", "Where", "Who"], a: "Why", tip: "WHY asks about reasons."},
      {q: "___ is your birthday celebration? 🎉", o: ["When", "What", "Who"], a: "When", tip: "WHEN asks about time."}
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
      {q: "Seals ___ clap 🦭", o: ["can", "can't"], a: "can", tip: "Seals have flippers that allow them to clap."},
      {q: "Cows ___ speak 🐮", o: ["can't", "can"], a: "can't", tip: "Cows communicate through sounds but cannot speak."},
      {q: "Parrots ___ talk 🦜", o: ["can", "can't"], a: "can", tip: "Parrots mimic sounds and can talk."},
      {q: "Bees ___ hide 🐝", o: ["can't", "can"], a: "can't", tip: "Bees are active and don't hide."},
      {q: "Spiders ___ spin webs 🕷️", o: ["can", "can't"], a: "can", tip: "Spiders use silk to spin webs."},
      {q: "Whales ___ land on the beach 🐳", o: ["can't", "can"], a: "can't", tip: "Whales live in water and cannot land on the beach."},
      {q: "Goats ___ sing songs 🐐", o: ["can't", "can"], a: "can't", tip: "Goats make sounds but do not sing songs."},
      {q: "Dolphins ___ click sounds 🐬", o: ["can", "can't"], a: "can", tip: "Dolphins use echolocation with click sounds."},
      {q: "Frogs ___ jump high 🐸", o: ["can", "can't"], a: "can", tip: "Frogs have strong legs that allow them to jump high."},
      {q: "Fish ___ walk on land 🐠", o: ["can't", "can"], a: "can't", tip: "Fish are aquatic and cannot walk on land."},
      {q: "Bats ___ see in the dark 🦇", o: ["can", "can't"], a: "can", tip: "Bats use echolocation to navigate in the dark."},
      {q: "Pigs ___ fly in the sky 🐷", o: ["can't", "can"], a: "can't", tip: "Pigs are terrestrial animals and cannot fly."},
      {q: "Kangaroos ___ hop long distances 🦘", o: ["can", "can't"], a: "can", tip: "Kangaroos have strong hind legs for hopping."},
      {q: "Snakes ___ have legs 🐍", o: ["can't", "can"], a: "can't", tip: "Snakes are legless reptiles."},
      {q: "Eagles ___ soar high in the sky 🦅", o: ["can", "can't"], a: "can", tip: "Eagles are birds that soar high using their wings."},
      {q: "Turtles ___ run fast 🐢", o: ["can't", "can"], a: "can't", tip: "Turtles move slowly and cannot run fast."}
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
      {q: "He is working → ? 💼", a: "Is he working?", t: "text", tip: "Use 'Is' for singular subjects like 'He'."},
      {q: "We are eating → ? 🍽️", a: "Are we eating?", t: "text", tip: "Use 'Are' for plural subjects like 'We'."},
      {q: "You are running → ? 🏃‍♀️", a: "Are you running?", t: "text", tip: "Use 'Are' for 'You' regardless of number."},
      {q: "They are learning → ? 📖", a: "Are they learning?", t: "text", tip: "Use 'Are' for plural subjects like 'They'."},
      {q: "I am playing → ? 🎮", a: "Am I playing?", t: "text", tip: "Use 'Am' for the singular subject 'I'."},
      {q: "She is helping → ? 🩺", a: "Is she helping?", t: "text", tip: "Use 'Is' for singular subjects like 'She'."},
      {q: "Dogs are barking → ? 🐶", a: "Are dogs barking?", t: "text", tip: "Use 'Are' for plural subjects like 'Dogs'."},
      {q: "Mom is cooking → ? 👩‍🍳", a: "Is mom cooking?", t: "text", tip: "Use 'Is' for singular subjects like 'Mom'."},
      {q: "Kids are sleeping → ? 😴", a: "Are kids sleeping?", t: "text", tip: "Use 'Are' for plural subjects like 'Kids'."},
      {q: "Bird is singing → ? 🐦", a: "Is bird singing?", t: "text", tip: "Use 'Is' for singular subjects like 'Bird'."},
      {q: "Dad is reading → ? 📖", a: "Is dad reading?", t: "text", tip: "Use 'Is' for singular subjects like 'Dad'."},
      {q: "Sisters are dancing → ? 💃", a: "Are sisters dancing?", t: "text", tip: "Use 'Are' for plural subjects like 'Sisters'."},
      {q: "Brother is drawing → ? ✏️", a: "Is brother drawing?", t: "text", tip: "Use 'Is' for singular subjects like 'Brother'."},
      {q: "Grandpa is gardening → ? 🌱", a: "Is grandpa gardening?", t: "text", tip: "Use 'Is' for singular subjects like 'Grandpa'."}
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
      {q: "They are watching TV →", a: "They are not watching TV", t: "text", tip: "Add 'not' after 'are' to make it negative."},
      {q: "He is looking →", a: "He is not looking", t: "text", tip: "Add 'not' after 'is' to make it negative."},
      {q: "We are cooking →", a: "We are not cooking", t: "text", tip: "Add 'not' after 'are' to make it negative."},
      {q: "Helen is dancing →", a: "Helen is not dancing", t: "text", tip: "Add 'not' after 'is' to make it negative."},
      {q: "I am finding →", a: "I am not finding", t: "text", tip: "Add 'not' after 'am' to make it negative."},
      {q: "I am doing →", a: "I am not doing", t: "text", tip: "Add 'not' after 'am' to make it negative."},
      {q: "Cat is sleeping →", a: "Cat is not sleeping", t: "text", tip: "Add 'not' after 'is' to make it negative."},
      {q: "Teachers are talking →", a: "Teachers are not talking", t: "text", tip: "Add 'not' after 'are' to make it negative."},
      {q: "Sun is shining →", a: "Sun is not shining", t: "text", tip: "Add 'not' after 'is' to make it negative."},
      {q: "Baby is crying →", a: "Baby is not crying", t: "text", tip: "Add 'not' after 'is' to make it negative."},
      {q: "Bird is flying →", a: "Bird is not flying", t: "text", tip: "Add 'not' after 'is' to make it negative."},
      {q: "Children are playing →", a: "Children are not playing", t: "text", tip: "Add 'not' after 'are' to make it negative."},
      {q: "Mom is reading →", a: "Mom is not reading", t: "text", tip: "Add 'not' after 'is' to make it negative."},
      {q: "Dad is working →", a: "Dad is not working", t: "text", tip: "Add 'not' after 'is' to make it negative."}
    ]
  }
};

/*************************************************************
 * 2. Shuffle Helper for Multiple-Choice
 *************************************************************/
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/*************************************************************
 * 3. Initialize the Menu
 *************************************************************/
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

  // Add event listeners to lesson buttons
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showLesson(btn.getAttribute('data-lesson'));
    });
  });
}

/*************************************************************
 * 4. Show a Chosen Lesson
 *************************************************************/
function showLesson(lessonKey) {
  const lesson = lessons[lessonKey];
  const welcomeSection = document.querySelector('.welcome');
  const lessonSection = document.querySelector('.lesson-section');

  // Hide welcome, show lesson
  welcomeSection.classList.remove('active');
  lessonSection.classList.add('active');
  lessonSection.style.display = 'block';

  // Populate lesson HTML
  lessonSection.innerHTML = `
    <button class="back-btn">⬅️ Back</button>
    <h2>${lesson.title}</h2>
    ${lesson.explanation}
    <div class="exercises">
      ${lesson.exercises.map((ex, index) => {
        // If 'o' exists => multiple choice
        if (ex.o) {
          shuffleArray(ex.o); // randomize answers
          return `
            <div class="exercise-card" data-exercise-index="${index}">
              <p>${ex.q}</p>
              <div class="options-grid">
                ${ex.o.map(opt => `<button class="option-btn" data-answer="${opt.toLowerCase()}">${opt}</button>`).join('')}
              </div>
              <div class="feedback" style="display:none;"></div>
            </div>
          `;
        } else if (ex.t === 'text') {
          // text input
          return `
            <div class="exercise-card" data-exercise-index="${index}">
              <p>${ex.q}</p>
              <div class="options-grid">
                <input type="text" class="text-input" placeholder="Type your answer">
                <button class="submit-btn">Submit</button>
              </div>
              <div class="feedback" style="display:none;"></div>
            </div>
          `;
        } else {
          // fallback
          return `
            <div class="exercise-card" data-exercise-index="${index}">
              <p>${ex.q}</p>
              <div class="feedback" style="display:none;"></div>
            </div>
          `;
        }
      }).join('')}
    </div>
  `;

  // Add event listener to back button
  document.querySelector('.back-btn').addEventListener('click', () => {
    lessonSection.classList.remove('active');
    lessonSection.style.display = 'none';
    welcomeSection.classList.add('active');

    // Hide formula panel if it was shown
    hideFormulaPanel();
  });

  // If lessonKey is progressive or negativeProgressive, show formula panel
  if (lessonKey === 'progressive' || lessonKey === 'negativeProgressive') {
    showFormulaPanel();
  } else {
    hideFormulaPanel();
  }

  attachExerciseListeners(lesson, lessonKey);
}

/*************************************************************
 * 5. Attach Listeners for Both Multiple-Choice and Text
 *************************************************************/
function attachExerciseListeners(lesson, lessonKey) {
  const lessonSection = document.querySelector('.lesson-section');

  // For multiple-choice
  lessonSection.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const exerciseCard = btn.closest('.exercise-card');
      const feedback = exerciseCard.querySelector('.feedback');
      const selectedAnswer = btn.getAttribute('data-answer').trim().toLowerCase();
      const exIndex = parseInt(exerciseCard.getAttribute('data-exercise-index'));
      const currentExercise = lesson.exercises[exIndex];
      const correctAnswer = currentExercise.a.trim().toLowerCase();

      feedback.style.display = 'block';
      if (selectedAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct! 🎉<br><span class="tip">${currentExercise.tip || ""}</span>`;
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
      } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer is: "${currentExercise.a}".<br>
          <span class="tip">${currentExercise.tip || ""}</span>
          <button class="try-again-btn">Try Again</button>`;
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
      }

      if (selectedAnswer !== correctAnswer) {
        // Try Again
        const tryAgainBtn = feedback.querySelector('.try-again-btn');
        tryAgainBtn.addEventListener('click', () => {
          feedback.style.display = 'none';
          // Re-enable all option buttons
          exerciseCard.querySelectorAll('.option-btn').forEach(button => {
            button.disabled = false;
            button.style.cursor = 'pointer';
            button.style.opacity = '1';
          });
        });
      } else {
        // Correct => disable
        exerciseCard.querySelectorAll('.option-btn').forEach(button => {
          button.disabled = true;
          button.style.cursor = 'default';
          button.style.opacity = '0.6';
        });
      }
    });
  });

  // For text input
  lessonSection.querySelectorAll('.exercise-card').forEach(card => {
    const input = card.querySelector('.text-input');
    const submitBtn = card.querySelector('.submit-btn');
    if (!input || !submitBtn) return;

    const feedback = card.querySelector('.feedback');
    const exIndex = parseInt(card.getAttribute('data-exercise-index'));
    const currentExercise = lesson.exercises[exIndex];
    const correctAnswer = currentExercise.a.trim().toLowerCase();

    // On Enter
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submit();
      }
    });

    // On Submit
    submitBtn.addEventListener('click', () => {
      submit();
    });

    function submit() {
      feedback.style.display = 'block';
      const userAnswer = input.value.trim().toLowerCase();
      if (!userAnswer) {
        feedback.innerHTML = "❗ Please type an answer.";
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
        return;
      }
      if (userAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct! 🎉<br><span class="tip">${currentExercise.tip || ""}</span>`;
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
      } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer is: "${currentExercise.a}".<br>
          <span class="tip">${currentExercise.tip || ""}</span>
          <button class="try-again-btn">Try Again</button>`;
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
      }

      if (userAnswer !== correctAnswer) {
        // Try Again
        const tryAgainBtn = feedback.querySelector('.try-again-btn');
        tryAgainBtn.addEventListener('click', () => {
          feedback.style.display = 'none';
          input.disabled = false;
          submitBtn.disabled = false;
          input.value = '';
          input.style.cursor = 'text';
          submitBtn.style.cursor = 'pointer';
          input.style.opacity = '1';
          submitBtn.style.opacity = '1';
        });
      } else {
        // Correct => disable input
        input.disabled = true;
        submitBtn.disabled = true;
        input.style.cursor = 'default';
        submitBtn.style.cursor = 'default';
        input.style.opacity = '0.6';
        submitBtn.style.opacity = '0.6';
      }
    }
  });
}

/*************************************************************
 * 6. Floating Formula Panel Logic
 *************************************************************/
const formulaPanel = document.getElementById("formula-panel");
const toggleFormulaBtn = document.getElementById("toggle-formula-btn");

function showFormulaPanel() {
  // Remove hidden class from button and panel
  toggleFormulaBtn.classList.remove("hidden");
  // By default, keep panel hidden until user clicks the button
  formulaPanel.classList.add("hidden");

  // If you want it open by default, remove .hidden from formulaPanel
  // formulaPanel.classList.remove("hidden");

  toggleFormulaBtn.addEventListener("click", toggleFormulaVisibility);
}

function hideFormulaPanel() {
  // Hide both
  toggleFormulaBtn.classList.add("hidden");
  formulaPanel.classList.add("hidden");
  toggleFormulaBtn.removeEventListener("click", toggleFormulaVisibility);
}

function toggleFormulaVisibility() {
  formulaPanel.classList.toggle("hidden");
}

/*************************************************************
 * 7. On DOM Load, Initialize Menu
 *************************************************************/
document.addEventListener('DOMContentLoaded', initMenu);
