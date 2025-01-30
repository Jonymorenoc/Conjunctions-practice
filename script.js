/*************************************************************
 * 1. LESSON DATA
 *    - Retain your original lessons for Conjunctions, Q Words, Can/Can't
 *    - Convert present & negative progressive to puzzle style
 *    - Add "subtitle" for each lesson button
 *************************************************************/
const lessons = {
  conjunctions: {
    title: "🔗 Conjunctions Practice",
    subtitle: "Connecting Words", // mini subtitle
    emoji: "🧩",
    explanation: 
      `<div class="explanation">
        <h3>Connecting Words Fun! 🌉</h3>
        <p><strong>AND</strong> - Joins similar ideas<br>
        <strong>OR</strong> - Shows choices<br>
        <strong>BUT</strong> - Shows contrast</p>
      </div>`,
    exercises: [
      // multiple-choice, same as original
      {q: "Zebras are black ___ white 🦓", o: ["and", "or", "but"], a: "and", tip: "AND connects two similar ideas."},
      // ... rest ...
    ]
  },
  questionWords: {
    title: "❓ Question Words",
    subtitle: "Ask the Right Questions",
    emoji: "🔍",
    explanation: 
      `<div class="explanation">
        <h3>Asking Questions 🕵️‍♀️</h3>
      </div>`,
    exercises: [
      // multiple-choice
      {q: "___ is crying? 😢", o: ["Who", "Why", "Where"], a: "Who", tip: "WHO asks about a person."},
      // ...
    ]
  },
  canCant: {
    title: "🐾 Can/Can't",
    subtitle: "Animal Abilities",
    emoji: "🦁",
    explanation: 
      `<div class="explanation">
        <h3>Animal Abilities 🦸‍♂️</h3>
      </div>`,
    exercises: [
      // multiple-choice
      {q: "Seals ___ clap 🦭", o: ["can", "can't"], a: "can", tip: "Seals have flippers that allow them to clap."},
      // ...
    ]
  },

  // 2. Present Progressive => puzzle approach
  progressive: {
    title: "🔄 Present Progressive",
    subtitle: "Positive Duolingo Puzzle",
    emoji: "⏳",
    explanation: 
      `<div class="explanation">
        <h3>Right Now Actions 🏃‍♂️</h3>
        <p>Form questions with:
        <strong>Am/Is/Are</strong> + verb+ing + ?<br>
        Example: "She <u>is playing</u> → Is she playing?"</p>
      </div>`,
    exercises: [
      {
        q: "He is working → ? 💼",
        words: ["Is", "he", "working", "?"],
        distractors: ["are", "mom", "table"]
      },
      {
        q: "We are eating → ? 🍽️",
        words: ["Are", "we", "eating", "?"],
        distractors: ["is", "cat", "play"]
      },
      {
        q: "You are running → ? 🏃‍♀️",
        words: ["Are", "you", "running", "?"],
        distractors: ["house", "why", "mom", "am"]
      },
      {
        q: "They are learning → ? 📖",
        words: ["Are", "they", "learning", "?"],
        distractors: ["is", "car", "banana"]
      },
      {
        q: "I am playing → ? 🎮",
        words: ["Am", "I", "playing", "?"],
        distractors: ["food", "are", "sing"]
      },
      // add up to 14 puzzle items ...
    ]
  },

  // 3. Negative Progressive => puzzle approach
  negativeProgressive: {
    title: "🚫 Negative Progressive",
    subtitle: "Negative Duolingo Puzzle",
    emoji: "🙅‍♂️",
    explanation: 
      `<div class="explanation">
        <h3>Saying "Not Now" 🙅‍♀️</h3>
        <p>Add <strong>not</strong> before verb+ing<br>
        Example: "They <u>are not</u> watching."</p>
      </div>`,
    exercises: [
      {
        q: "They are watching TV →",
        words: ["They", "are", "not", "watching", "TV"],
        distractors: ["?", "banana", "jump"]
      },
      {
        q: "He is looking →",
        words: ["He", "is", "not", "looking"],
        distractors: ["stuff", "houses", "are"]
      },
      // add up to 14 puzzle items ...
    ]
  }
};

/*************************************************************
 * 2. Helper: shuffle array
 *************************************************************/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/*************************************************************
 * 3. Initialize Menu
 *************************************************************/
document.addEventListener("DOMContentLoaded", initMenu);

function initMenu() {
  const menuGrid = document.querySelector(".menu-grid");
  menuGrid.innerHTML = "";

  for (let key in lessons) {
    const lesson = lessons[key];
    const button = document.createElement("button");
    button.classList.add("menu-btn");
    // Now with mini title & subtitle
    button.innerHTML = `
      <div>
        <div style="font-weight:bold;">${lesson.emoji} ${lesson.title}</div>
        ${lesson.subtitle ? `<div class="lesson-subtitle">${lesson.subtitle}</div>` : ""}
      </div>
    `;
    button.setAttribute("data-lesson", key);
    button.setAttribute("aria-label", lesson.title);
    menuGrid.appendChild(button);
  }

  // Add event listeners to lesson buttons
  document.querySelectorAll(".menu-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showLesson(btn.getAttribute("data-lesson"));
    });
  });
}

/*************************************************************
 * 4. Show a Chosen Lesson
 *************************************************************/
function showLesson(lessonKey) {
  const lesson = lessons[lessonKey];
  const welcomeSection = document.querySelector(".welcome");
  const lessonSection = document.querySelector(".lesson-section");

  welcomeSection.classList.remove("active");
  lessonSection.classList.add("active");
  lessonSection.style.display = "block";

  // Build HTML for the lesson
  lessonSection.innerHTML = `
    <button class="back-btn">⬅️ Back</button>
    <h2>${lesson.title}</h2>
    ${lesson.explanation || ""}
    <div class="exercises">
      ${lesson.exercises
        .map((ex, idx) => {
          // If puzzle approach => Present/Negative Progressive
          if ((lessonKey === "progressive" || lessonKey === "negativeProgressive") && ex.words) {
            return buildPuzzleExercise(ex, idx);
          }

          // Otherwise, fallback to multiple-choice / text
          if (ex.o) {
            // multiple-choice => randomize
            shuffleArray(ex.o);
            return `
              <div class="exercise-card" data-exercise-index="${idx}">
                <p>${ex.q}</p>
                <div class="options-grid">
                  ${ex.o
                    .map(opt => `<button class="option-btn" data-answer="${opt.toLowerCase()}">${opt}</button>`)
                    .join("")}
                </div>
                <div class="feedback" style="display:none;"></div>
              </div>
            `;
          } else if (ex.t === "text") {
            // text input
            return `
              <div class="exercise-card" data-exercise-index="${idx}">
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
              <div class="exercise-card" data-exercise-index="${idx}">
                <p>${ex.q}</p>
                <div class="feedback" style="display:none;"></div>
              </div>
            `;
          }
        })
        .join("")}
    </div>
  `;

  // Back button
  document.querySelector(".back-btn").addEventListener("click", () => {
    lessonSection.classList.remove("active");
    lessonSection.style.display = "none";
    welcomeSection.classList.add("active");
    hideFormulaPanel(); // hide floating formula if open
  });

  // If puzzle lesson => show formula with "Positive" or "Negative"
  if (lessonKey === "progressive") {
    showFormulaPanel("positive");
  } else if (lessonKey === "negativeProgressive") {
    showFormulaPanel("negative");
  } else {
    hideFormulaPanel();
  }

  attachExerciseListeners(lessonKey);
}

/*************************************************************
 * 5. Build Puzzle HTML for Progressive
 *************************************************************/
function buildPuzzleExercise(ex, idx) {
  // Merge correct words + distractors, shuffle them
  const allWords = [...ex.words, ...(ex.distractors || [])];
  shuffleArray(allWords);

  return `
    <div class="exercise-card" data-exercise-index="${idx}">
      <p>${ex.q}</p>
      <div class="word-puzzle">
        <div class="chosen-words"></div>
        <div class="available-words">
          ${allWords
            .map(word => `<button class="word-btn" data-word="${word}">${word}</button>`)
            .join("")}
        </div>
        <button class="submit-puzzle-btn">Submit</button>
        <div class="feedback" style="display:none;"></div>
      </div>
    </div>
  `;
}

/*************************************************************
 * 6. Attach Listeners for Exercises
 *************************************************************/
function attachExerciseListeners(lessonKey) {
  const lesson = lessons[lessonKey];
  const lessonSection = document.querySelector(".lesson-section");

  // If puzzle approach => add puzzle listeners
  if (lessonKey === "progressive" || lessonKey === "negativeProgressive") {
    attachPuzzleListeners(lesson);
  }

  // For multiple-choice
  lessonSection.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const exData = lesson.exercises[exIndex];
      const correctAnswer = exData.a.trim().toLowerCase();
      const selectedAnswer = btn.dataset.answer.trim().toLowerCase();

      feedback.style.display = "block";
      if (selectedAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct! 🎉<br><span class="tip">${exData.tip || ""}</span>`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        // disable all multiple choice
        exerciseCard.querySelectorAll(".option-btn").forEach(b => {
          b.disabled = true;
          b.style.opacity = "0.6";
        });
      } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer is: "${exData.a}".<br>
          <span class="tip">${exData.tip || ""}</span>
          <button class="try-again-btn">Try Again</button>`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        // try again
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          exerciseCard.querySelectorAll(".option-btn").forEach(b => {
            b.disabled = false;
            b.style.opacity = "1";
          });
        });
      }
    });
  });

  // For text input
  lessonSection.querySelectorAll(".submit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const input = exerciseCard.querySelector(".text-input");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const exData = lesson.exercises[exIndex];
      const correctAnswer = exData.a.trim().toLowerCase();

      if (!input) return;
      feedback.style.display = "block";
      const userAnswer = input.value.trim().toLowerCase();

      if (!userAnswer) {
        feedback.innerHTML = "❗ Please type an answer.";
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        return;
      }

      if (userAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct! 🎉<br><span class="tip">${exData.tip || ""}</span>`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        input.disabled = true;
        btn.disabled = true;
        input.style.opacity = "0.6";
        btn.style.opacity = "0.6";
      } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer is: "${exData.a}".<br>
          <span class="tip">${exData.tip || ""}</span>
          <button class="try-again-btn">Try Again</button>`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        // try again
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          input.disabled = false;
          btn.disabled = false;
          input.style.opacity = "1";
          btn.style.opacity = "1";
          input.value = "";
        });
      }
    });
  });
}

/*************************************************************
 * 7. Puzzle Listeners for Present/Negative Progressive
 *************************************************************/
function attachPuzzleListeners(lesson) {
  // For each puzzle .word-puzzle container
  document.querySelectorAll(".word-puzzle").forEach((puzzleDiv, idx) => {
    const chosenDiv = puzzleDiv.querySelector(".chosen-words");
    const availableDiv = puzzleDiv.querySelector(".available-words");
    const submitBtn = puzzleDiv.querySelector(".submit-puzzle-btn");
    const feedback = puzzleDiv.querySelector(".feedback");

    const correctWords = lesson.exercises[idx].words; // array of correct words in order

    // Click on available word => move to chosen
    availableDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("word-btn")) {
        const word = e.target.dataset.word;
        // create chosen element
        const chosenSpan = document.createElement("span");
        chosenSpan.classList.add("chosen-word");
        chosenSpan.dataset.word = word;
        chosenSpan.textContent = word;
        chosenSpan.style.margin = "5px";
        chosenSpan.style.padding = "8px 10px";
        chosenSpan.style.background = "#eee";
        chosenSpan.style.borderRadius = "5px";
        chosenDiv.appendChild(chosenSpan);

        // hide the original button
        e.target.style.display = "none";
      }
    });

    // Click chosen => remove => re-show in available
    chosenDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("chosen-word")) {
        const word = e.target.dataset.word;
        // find the matching word button in availableDiv
        const matchBtn = availableDiv.querySelector(`.word-btn[data-word="${word}"]`);
        if (matchBtn) matchBtn.style.display = "inline-block";
        e.target.remove();
      }
    });

    // Submit puzzle
    submitBtn.addEventListener("click", () => {
      feedback.style.display = "block";
      const chosenWordsArr = Array.from(chosenDiv.querySelectorAll(".chosen-word")).map(el => el.dataset.word);
      if (arraysEqual(chosenWordsArr, correctWords)) {
        feedback.innerHTML = "✅ Correct! Great job!";
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        submitBtn.disabled = true;
      } else {
        feedback.innerHTML = `
          ❌ Incorrect!<br>
          The correct answer is: "${correctWords.join(" ")}".
          <br><button class="try-again-btn">Try Again</button>
        `;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        // try again logic
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          feedback.innerHTML = "";
          chosenDiv.innerHTML = "";
          // re-show all word-btn
          Array.from(availableDiv.querySelectorAll(".word-btn")).forEach(btn => {
            btn.style.display = "inline-block";
          });
        });
      }
    });
  });
}

// compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/*************************************************************
 * 8. Floating Formula Panel
 *    Show only for progressive => "Positive"
 *    or negativeProgressive => "Negative"
 *************************************************************/
const formulaPanel = document.getElementById("formula-panel");
const toggleFormulaBtn = document.getElementById("toggle-formula-btn");

function showFormulaPanel(type) {
  toggleFormulaBtn.classList.remove("hidden");
  formulaPanel.classList.add("hidden"); // keep closed until user clicks

  const formulaContent = formulaPanel.querySelector(".formula-content");
  if (type === "positive") {
    formulaContent.innerHTML = `
      <h3>Present Progressive Formula (Positive)</h3>
      <p>Subject + to be (am/is/are) + verb(ing)</p>
    `;
  } else {
    formulaContent.innerHTML = `
      <h3>Present Progressive Formula (Negative)</h3>
      <p>Subject + to be (am/is/are) + not + verb(ing)</p>
    `;
  }

  toggleFormulaBtn.addEventListener("click", toggleFormulaVisibility);
}

function hideFormulaPanel() {
  toggleFormulaBtn.classList.add("hidden");
  formulaPanel.classList.add("hidden");
  toggleFormulaBtn.removeEventListener("click", toggleFormulaVisibility);
}

function toggleFormulaVisibility() {
  formulaPanel.classList.toggle("hidden");
}
