/*************************************************************
 * 1. Lesson Data
 * Use puzzle data for progressive & negativeProgressive
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
      </div>`,
    exercises: [
      {q: "Zebras are black ___ white 🦓", o: ["and", "or", "but"], a: "and", tip: "AND connects two similar ideas."},
      // ... rest of your multiple-choice ...
    ]
  },
  questionWords: {
    title: "❓ Question Words",
    emoji: "🔍",
    explanation: 
      `<div class="explanation">
        <h3>Asking Questions 🕵️‍♀️</h3>
      </div>`,
    exercises: [
      {q: "___ is crying? 😢", o: ["Who", "Why", "Where"], a: "Who", tip: "WHO asks about a person."},
      // ... rest ...
    ]
  },
  canCant: {
    title: "🐾 Can/Can't",
    emoji: "🦁",
    explanation: 
      `<div class="explanation">
        <h3>Animal Abilities 🦸‍♂️</h3>
      </div>`,
    exercises: [
      {q: "Seals ___ clap 🦭", o: ["can", "can't"], a: "can", tip: "Seals have flippers that allow them to clap."},
      // ... rest ...
    ]
  },
  
  // Present Progressive => puzzle approach
  progressive: {
    title: "🔄 Present Progressive",
    emoji: "⏳",
    // We'll embed the puzzle formula in a floating panel, so no explanation needed here
    exercises: [
      {
        q: "He is working → ? 💼",
        words: ["Is", "he", "working", "?"],
        distractors: ["are", "cat", "house", "jump"]
      },
      {
        q: "We are eating → ? 🍽️",
        words: ["Are", "we", "eating", "?"],
        distractors: ["is", "milk", "dance", "running"]
      },
      // add as many as needed (14 total) ...
    ]
  },

  // Negative Progressive => puzzle approach
  negativeProgressive: {
    title: "🚫 Negative Progressive",
    emoji: "🙅‍♂️",
    exercises: [
      {
        q: "They are watching TV →",
        words: ["They", "are", "not", "watching", "TV"],
        distractors: ["banana", "?", "sleeping", "jump"]
      },
      {
        q: "He is looking →",
        words: ["He", "is", "not", "looking"],
        distractors: ["houses", "cat", "milk", "are"]
      },
      // add as many as needed (14 total) ...
    ]
  }
};

/*************************************************************
 * 2. Shuffle Helper
 *************************************************************/
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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
    button.innerHTML = `${lesson.emoji} ${lesson.title.split(" ")[0]} ${lesson.emoji}`;
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

  // We only embed a small explanation if it's not puzzle-based or if you want it
  // For puzzle-based lessons, we can keep it minimal or you can add text
  let explanationHtml = "";
  if (lessonKey !== "progressive" && lessonKey !== "negativeProgressive") {
    explanationHtml = lesson.explanation || "";
  }

  lessonSection.innerHTML = `
    <button class="back-btn">⬅️ Back</button>
    <h2>${lesson.title}</h2>
    ${explanationHtml}
    <div class="exercises">
      ${lesson.exercises
        .map((ex, idx) => {
          if ((lessonKey === "progressive" || lessonKey === "negativeProgressive") && ex.words) {
            return buildPuzzleExercise(ex, idx);
          } else if (ex.o) {
            // multiple-choice
            shuffleArray(ex.o);
            return `
              <div class="exercise-card" data-exercise-index="${idx}">
                <p>${ex.q}</p>
                <div class="options-grid">
                  ${ex.o.map(oVal => `
                    <button class="option-btn" data-answer="${oVal.toLowerCase()}">${oVal}</button>
                  `).join("")}
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
    hideFormulaPanel();
  });

  // If puzzle-based => show floating panel for formula
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
 * 5. Build Puzzle for Present/Negative Progressive
 *************************************************************/
function buildPuzzleExercise(ex, index) {
  // Combine correct words + distractors, shuffle
  const allWords = [...ex.words, ...(ex.distractors || [])];
  shuffleArray(allWords);

  return `
    <div class="exercise-card" data-exercise-index="${index}">
      <p>${ex.q}</p>
      <div class="word-puzzle">
        <div class="chosen-words" style="min-height:40px; border:1px dashed #aaa; padding:10px; margin-bottom:1rem; border-radius:5px;"></div>
        <div class="available-words" style="margin-bottom:1rem;">
          ${allWords
            .map(
              (w) => `<button class="word-btn" data-word="${w}">${w}</button>`
            )
            .join("")}
        </div>
        <button class="submit-puzzle-btn">Submit</button>
        <div class="feedback" style="display:none;"></div>
      </div>
    </div>
  `;
}

/*************************************************************
 * 6. Attach Listeners
 *************************************************************/
function attachExerciseListeners(lessonKey) {
  const lessonSection = document.querySelector(".lesson-section");

  // If puzzle approach => attach puzzle logic
  if (lessonKey === "progressive" || lessonKey === "negativeProgressive") {
    attachPuzzleListeners(lessons[lessonKey]);
  }

  // For multiple-choice
  lessonSection.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const currentEx = lessons[lessonKey].exercises[exIndex];
      const correctAnswer = currentEx.a.trim().toLowerCase();
      const selectedAnswer = btn.dataset.answer.trim().toLowerCase();

      feedback.style.display = "block";
      if (selectedAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct!<br><span class="tip">${currentEx.tip || ""}</span>`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        // disable
        exerciseCard.querySelectorAll(".option-btn").forEach((b) => {
          b.disabled = true;
          b.style.opacity = "0.6";
        });
      } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer is: "${currentEx.a}".<br>
          <span class="tip">${currentEx.tip || ""}</span>
          <button class="try-again-btn">Try Again</button>`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        // try again
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          exerciseCard.querySelectorAll(".option-btn").forEach((b) => {
            b.disabled = false;
            b.style.opacity = "1";
          });
        });
      }
    });
  });

  // For text input
  lessonSection.querySelectorAll(".submit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const input = exerciseCard.querySelector(".text-input");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const currentEx = lessons[lessonKey].exercises[exIndex];
      const correctAnswer = currentEx.a.trim().toLowerCase();

      if (!input) return;
      const userAnswer = input.value.trim().toLowerCase();
      feedback.style.display = "block";
      if (!userAnswer) {
        feedback.innerHTML = "❗ Please type an answer.";
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        return;
      }
      if (userAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct!<br><span class="tip">${currentEx.tip || ""}</span>`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        input.disabled = true;
        btn.disabled = true;
        input.style.opacity = "0.6";
        btn.style.opacity = "0.6";
      } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer is: "${currentEx.a}".<br>
          <span class="tip">${currentEx.tip || ""}</span>
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
 * 7. Puzzle Listeners for Progressive
 *************************************************************/
function attachPuzzleListeners(lessonData) {
  // puzzle containers
  document.querySelectorAll(".word-puzzle").forEach((puzzleDiv, idx) => {
    const chosenDiv = puzzleDiv.querySelector(".chosen-words");
    const availableDiv = puzzleDiv.querySelector(".available-words");
    const submitBtn = puzzleDiv.querySelector(".submit-puzzle-btn");
    const feedback = puzzleDiv.querySelector(".feedback");

    const correctWords = lessonData.exercises[idx].words;

    // click on available word => move to chosen
    availableDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("word-btn")) {
        const word = e.target.dataset.word;
        // create chosen span
        const chosenSpan = document.createElement("span");
        chosenSpan.classList.add("chosen-word");
        chosenSpan.style.margin = "5px";
        chosenSpan.style.padding = "8px 10px";
        chosenSpan.style.background = "#eee";
        chosenSpan.style.borderRadius = "5px";
        chosenSpan.dataset.word = word;
        chosenSpan.textContent = word;
        chosenDiv.appendChild(chosenSpan);

        // hide the original button
        e.target.style.display = "none";
      }
    });

    // click chosen word => remove from chosen, re-show in available
    chosenDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("chosen-word")) {
        const word = e.target.dataset.word;
        // re-show the button
        const matchBtn = availableDiv.querySelector(`.word-btn[data-word="${word}"]`);
        if (matchBtn) matchBtn.style.display = "inline-block";
        // remove from chosen
        e.target.remove();
      }
    });

    // Submit the puzzle
    submitBtn.addEventListener("click", () => {
      feedback.style.display = "block";
      const chosen = chosenDiv.querySelectorAll(".chosen-word");
      const userSequence = Array.from(chosen).map((span) => span.dataset.word);

      if (arraysEqual(userSequence, correctWords)) {
        feedback.innerHTML = "✅ Correct! Great job!";
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        submitBtn.disabled = true;
      } else {
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        feedback.innerHTML = `
          ❌ Incorrect!<br>
          The correct answer is: "${correctWords.join(" ")}".
          <br><button class="try-again-btn">Try Again</button>
        `;
        // reset puzzle
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          feedback.innerHTML = "";
          chosenDiv.innerHTML = "";
          // re-enable words
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
 *  - Show only if lessonKey = progressive or negativeProgressive
 *  - If progressive => Positive formula
 *  - If negativeProgressive => Negative formula
 *************************************************************/
const formulaPanel = document.getElementById("formula-panel");
const toggleFormulaBtn = document.getElementById("toggle-formula-btn");

function showFormulaPanel(type) {
  toggleFormulaBtn.classList.remove("hidden");
  formulaPanel.classList.add("hidden"); // keep closed until user clicks

  // Fill in formula text based on type
  const formulaContent = formulaPanel.querySelector(".formula-content");
  if (type === "positive") {
    formulaContent.innerHTML = `
      <h3>Formula (Positive)</h3>
      <p>Subject + to be (am/is/are) + verb(ing)</p>
    `;
  } else {
    formulaContent.innerHTML = `
      <h3>Formula (Negative)</h3>
      <p>Subject + to be (am/is/are) + <strong>not</strong> + verb(ing)</p>
    `;
  }

  // Listen for toggle
  toggleFormulaBtn.addEventListener("click", toggleFormulaVisibility);
}

function hideFormulaPanel() {
  toggleFormulaBtn.classList.add("hidden");
  formulaPanel.classList.add("hidden");
  // remove event listener
  toggleFormulaBtn.removeEventListener("click", toggleFormulaVisibility);
}

function toggleFormulaVisibility() {
  formulaPanel.classList.toggle("hidden");
}
