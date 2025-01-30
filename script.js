/************************************************************
 * Example Lessons Data
 * For Conjunctions, Question Words, etc., we keep the old structure:
 *   { q: "...", o: [ "...", "...", ... ], a: "correct" }
 *
 * For progressive lessons, we store
 *   { q: "...", words: [ ...correct sequence... ], distractors: [ ... ] }
 ************************************************************/
const lessons = {
  conjunctions: {
    title: "🔗 Conjunctions Practice",
    emoji: "🧩",
    // optional subtitle if you want
    // subtitle: "Connecting Words",
    explanation:
      `<div class="explanation">
        <h3>Connecting Words Fun! 🌉</h3>
        <p><strong>AND</strong> - Joins similar ideas<br>
        <strong>OR</strong> - Shows choices<br>
        <strong>BUT</strong> - Shows contrast</p>
      </div>`,
    exercises: [
      {
        q: "Zebras are black ___ white 🦓",
        o: ["and", "or", "but"],
        a: "and",
        tip: "AND connects two similar ideas."
      },
      {
        q: "Do you want pancakes ___ waffles? 🥞",
        o: ["and", "or", "but"],
        a: "or",
      },
      // ...
    ]
  },

  questionWords: {
    title: "❓ Question Words",
    emoji: "🔍",
    // subtitle: "Ask the Right Questions",
    explanation:
      `<div class="explanation">
        <h3>Asking Questions 🕵️‍♀️</h3>
      </div>`,
    exercises: [
      {
        q: "___ is crying? 😢",
        o: ["Who", "Why", "Where"],
        a: "Who",
      },
      // ...
    ]
  },

  canCant: {
    title: "🐾 Can/Can't",
    emoji: "🦁",
    // subtitle: "Animal Abilities",
    explanation:
      `<div class="explanation">
        <h3>Animal Abilities 🦸‍♂️</h3>
      </div>`,
    exercises: [
      {
        q: "Seals ___ clap 🦭",
        o: ["can", "can't"],
        a: "can",
      },
      // ...
    ]
  },

  // Present Progressive with puzzle approach
  progressive: {
    title: "🔄 Present Progressive",
    emoji: "⏳",
    explanation:
      `<div class="explanation">
        <h3>Right Now Actions 🏃‍♂️</h3>
        <p><strong>Formulas:</strong><br>
        <strong>Positive:</strong> Subject + to be (am/is/are) + verb(ing)<br>
        <strong>Negative:</strong> Subject + to be (am/is/are) + not + verb(ing)</p>
        <p>Example: "She <u>is playing</u> → Is she playing?"</p>
      </div>`,
    exercises: [
      {
        q: "He is working → ? 💼",
        // "Is he working ?"
        words: ["Is", "he", "working", "?"],
        distractors: ["car", "then", "house"],
      },
      {
        q: "We are eating → ? 🍽️",
        words: ["Are", "we", "eating", "?"],
        distractors: ["go", "now", "book", "is"],
      },
      // ...
    ]
  },

  // Negative Progressive with puzzle approach
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
      {
        q: "He is looking →",
        // "He is not looking"
        words: ["He", "is", "not", "looking"],
        distractors: ["stuff", "houses", "?"]
      },
      {
        q: "I am doing →",
        words: ["I", "am", "not", "doing"],
        distractors: ["stuff", "random", "cake"]
      },
      // ...
    ]
  }
};

/************************************************************
 * Initialize Menu & Show Lessons
 ************************************************************/

document.addEventListener("DOMContentLoaded", initMenu);

// Helper: shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initMenu() {
  const menuGrid = document.querySelector(".menu-grid");
  menuGrid.innerHTML = "";

  for (let key in lessons) {
    const lesson = lessons[key];
    const button = document.createElement("button");
    button.classList.add("menu-btn");

    // If you want a mini-subtitle:
    button.innerHTML = `
      <div class="lesson-btn-content">
        <div class="lesson-main-title">${lesson.emoji} ${lesson.title.split(" ")[0]} ${lesson.emoji}</div>
        ${
          lesson.subtitle
            ? `<div class="lesson-subtitle">${lesson.subtitle}</div>`
            : ""
        }
      </div>
    `;

    button.setAttribute("data-lesson", key);
    button.setAttribute("aria-label", lesson.title);
    menuGrid.appendChild(button);
  }

  document.querySelectorAll(".menu-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showLesson(btn.getAttribute("data-lesson"));
    });
  });
}

function showLesson(lessonKey) {
  const lesson = lessons[lessonKey];
  const welcomeSection = document.querySelector(".welcome");
  const lessonSection = document.querySelector(".lesson-section");

  welcomeSection.classList.remove("active");
  lessonSection.classList.add("active");
  lessonSection.style.display = "block";

  lessonSection.innerHTML = `
    <button class="back-btn">⬅️ Back</button>
    <h2>${lesson.title}</h2>
    ${lesson.explanation}
    <div class="exercises">
      ${lesson.exercises
        .map((ex, index) => {
          // If puzzle approach (progressive or negativeProgressive) and we have words
          if (
            (lessonKey === "progressive" || lessonKey === "negativeProgressive") &&
            ex.words
          ) {
            return buildPuzzleExercise(ex, index);
          } else {
            // fallback multiple-choice or text logic
            // if ex.o => multiple choice
            if (ex.o) {
              // shuffle multiple-choice array
              shuffleArray(ex.o);
              return `
                <div class="exercise-card" data-exercise-index="${index}">
                  <p>${ex.q}</p>
                  <div class="options-grid">
                    ${ex.o
                      .map(
                        (option) =>
                          `<button class="option-btn">${option}</button>`
                      )
                      .join("")}
                  </div>
                  <div class="feedback" style="display:none;"></div>
                </div>
              `;
            }
            // if ex.t => text input
            if (ex.t === "text") {
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
            }
            // else fallback
            return `
              <div class="exercise-card" data-exercise-index="${index}">
                <p>${ex.q}</p>
                <div class="feedback" style="display:none;"></div>
              </div>
            `;
          }
        })
        .join("")}
    </div>
  `;

  // Handle back button
  document.querySelector(".back-btn").addEventListener("click", () => {
    lessonSection.classList.remove("active");
    lessonSection.style.display = "none";
    welcomeSection.classList.add("active");
  });

  // Attach event listeners based on the lesson type
  if (lessonKey === "progressive" || lessonKey === "negativeProgressive") {
    attachPuzzleListeners(lesson);
  } else {
    attachFallbackListeners(lessonKey);
  }
}

/************************************************************
 * Puzzle Approach for Progressive Lessons
 ************************************************************/

function buildPuzzleExercise(ex, index) {
  // Merge correct words and distractors, then shuffle
  const allWords = [...ex.words, ...(ex.distractors || [])];
  shuffleArray(allWords);

  return `
    <div class="exercise-card" data-exercise-index="${index}">
      <p>${ex.q}</p>
      <div class="word-puzzle">
        <div class="chosen-words"></div>
        <div class="available-words">
          ${allWords
            .map(
              (w) =>
                `<button class="word-btn" data-word="${w}">${w}</button>`
            )
            .join("")}
        </div>
        <button class="submit-puzzle-btn">Submit</button>
        <div class="feedback" style="display:none;"></div>
      </div>
    </div>
  `;
}

function attachPuzzleListeners(lesson) {
  const puzzleContainers = document.querySelectorAll(".word-puzzle");
  puzzleContainers.forEach((container, idx) => {
    const chosenWordsDiv = container.querySelector(".chosen-words");
    const availableWordsDiv = container.querySelector(".available-words");
    const feedback = container.querySelector(".feedback");
    const submitBtn = container.querySelector(".submit-puzzle-btn");

    const correctSequence = lesson.exercises[idx].words;

    // Click on word in availableWords => move to chosenWords
    availableWordsDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("word-btn")) {
        const word = e.target.dataset.word;
        // create a chosen word span
        const chosenSpan = document.createElement("span");
        chosenSpan.classList.add("chosen-word");
        chosenSpan.dataset.word = word;
        chosenSpan.textContent = word;
        chosenWordsDiv.appendChild(chosenSpan);

        // hide the clicked button
        e.target.style.display = "none";
      }
    });

    // Click on chosen word => remove from chosen area, re-show in available words
    chosenWordsDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("chosen-word")) {
        const word = e.target.dataset.word;
        // find corresponding word-btn
        const wordBtn = availableWordsDiv.querySelector(`.word-btn[data-word="${word}"]`);
        if (wordBtn) {
          wordBtn.style.display = "inline-block";
        }
        e.target.remove();
      }
    });

    // Submit
    submitBtn.addEventListener("click", () => {
      feedback.style.display = "block";

      // gather the chosen words
      const chosen = chosenWordsDiv.querySelectorAll(".chosen-word");
      const userSequence = Array.from(chosen).map((span) => span.dataset.word);

      if (arraysEqual(userSequence, correctSequence)) {
        feedback.innerHTML = `✅ Correct! 🎉`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        // optionally disable the puzzle now
        submitBtn.disabled = true;
      } else {
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        feedback.innerHTML = `
          ❌ Incorrect!<br>
          The correct answer is: "${correctSequence.join(" ")}".
          <br><button class="try-puzzle-again">Try Again</button>
        `;
        // handle try again
        feedback.querySelector(".try-puzzle-again").addEventListener("click", () => {
          feedback.style.display = "none";
          feedback.innerHTML = "";
          // re-enable words
          chosenWordsDiv.innerHTML = "";
          const wordBtns = availableWordsDiv.querySelectorAll(".word-btn");
          wordBtns.forEach(btn => {
            btn.style.display = "inline-block";
          });
        });
      }
    });
  });
}

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/************************************************************
 * Fallback Listeners for Multiple-Choice or Text Exercises
 ************************************************************/
function attachFallbackListeners(lessonKey) {
  const lesson = lessons[lessonKey];
  const lessonSection = document.querySelector(".lesson-section");

  // multiple-choice
  lessonSection.querySelectorAll(".option-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const exData = lesson.exercises[exIndex];

      if (btn.textContent.trim().toLowerCase() === exData.a.trim().toLowerCase()) {
        feedback.textContent = "✅ Correct!";
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
      } else {
        feedback.textContent = `❌ Incorrect! The correct answer is: ${exData.a}`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
      }
      feedback.style.display = "block";
    });
  });

  // text input
  lessonSection.querySelectorAll(".submit-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const textInput = exerciseCard.querySelector(".text-input");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const exData = lesson.exercises[exIndex];

      if (!textInput) return;

      const userAnswer = textInput.value.trim().toLowerCase();
      if (userAnswer === "") {
        feedback.textContent = "❗ Please type an answer.";
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        feedback.style.display = "block";
        return;
      }
      if (userAnswer === exData.a.trim().toLowerCase()) {
        feedback.textContent = "✅ Correct!";
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
      } else {
        feedback.textContent = `❌ Incorrect! The correct answer is: ${exData.a}`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
      }
      feedback.style.display = "block";
      textInput.value = "";
    });
  });
}
