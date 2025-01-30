/*************************************************************
 * 1. LESSON DATA (15 questions each)
 *    - Retains your original multiple-choice or text approach
 *    - Present & Negative Progressive => puzzle style
 *************************************************************/
const lessons = {
  /**********************************************************
   * 1) Conjunctions (15 multiple-choice questions)
   **********************************************************/
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
      {q: "Do you want pancakes ___ waffles? 🥞", o: ["and", "or", "but"], a: "or", tip: "OR presents a choice between options."},
      {q: "I want ice cream, ___ I'm full 🍦", o: ["but", "or", "and"], a: "but", tip: "BUT shows a contrast."},
      {q: "Do you prefer a book, table ___ shelf? 📚", o: ["or", "and", "but"], a: "or", tip: "OR presents a choice."},
      {q: "Baby is hungry ___ tired 👶", o: ["and", "but", "or"], a: "and", tip: "AND connects two states."},
      {q: "The TV is broken ___ they want to watch 📺", o: ["but", "and", "or"], a: "but", tip: "BUT shows a contrast."},
      {q: "The baseball bat is missing ___ it's not fun ⚾", o: ["but", "or", "and"], a: "but"},
      {q: "Do you like apples ___ oranges? 🍎🍊", o: ["or", "and", "but"], a: "or"},
      {q: "It is sunny ___ raining? 🌞🌧️", o: ["but", "and", "or"], a: "but"},
      {q: "Would you like pizza ___ pasta? 🍕🍝", o: ["and", "or", "but"], a: "and"},
      {q: "Do you want milk ___ juice? 🥛🧃", o: ["or", "but", "and"], a: "or"},
      {q: "Dogs ___ cats get along well 🐶🐱", o: ["and", "but", "or"], a: "and"},
      {q: "Tea ___ coffee? ☕🍵", o: ["and", "but", "or"], a: "or"},
      {q: "He is tall ___ strong 💪", o: ["and", "but", "or"], a: "and"},
      {q: "She wanted to play, ___ it was raining ☔", o: ["and", "but", "or"], a: "but"}
    ]
  },

  /**********************************************************
   * 2) Question Words (15 multiple-choice questions)
   **********************************************************/
  questionWords: {
    title: "❓ Question Words",
    emoji: "🔍",
    explanation:
      `<div class="explanation">
        <h3>Asking Questions 🕵️‍♀️</h3>
      </div>`,
    exercises: [
      {q: "___ is crying? 😢", o: ["Who", "Why", "Where"], a: "Who", tip: "WHO asks about a person."},
      {q: "___ is your backpack? 🎒", o: ["Where", "What", "When"], a: "Where"},
      {q: "___ is she doing? 📚", o: ["What", "Who", "Why"], a: "What"},
      {q: "___ is in the kitchen? 👨🍳", o: ["Who", "Where", "When"], a: "Who"},
      {q: "___ is your birthday? 🎂", o: ["When", "What", "Why"], a: "When"},
      {q: "___ is your teacher? 👩🏫", o: ["Who", "Where", "What"], a: "Who"},
      {q: "___ is the park? 🌳", o: ["Where", "When", "Why"], a: "Where"},
      {q: "___ is lunch time? 🕛", o: ["When", "What", "Who"], a: "When"},
      {q: "___ is the sky blue? 🌌", o: ["Why", "Where", "How"], a: "Why"},
      {q: "___ are you going to school? 🚌", o: ["Where", "Why", "Who"], a: "Where"},
      {q: "___ is your favorite color? 🎨", o: ["What", "When", "Who"], a: "What"},
      {q: "___ do you like pizza? 🍕", o: ["Why", "Where", "Who"], a: "Why"},
      {q: "___ is your birthday celebration? 🎉", o: ["When", "What", "Who"], a: "When"},
      {q: "___ are we playing today? 🎮", o: ["What", "When", "Why"], a: "What"},
      {q: "___ is the library? 📚", o: ["Where", "When", "Who"], a: "Where"}
    ]
  },

  /**********************************************************
   * 3) Can/Can't (15 multiple-choice questions)
   **********************************************************/
  canCant: {
    title: "🐾 Can/Can't",
    emoji: "🦁",
    explanation:
      `<div class="explanation">
        <h3>Animal Abilities 🦸‍♂️</h3>
      </div>`,
    exercises: [
      {q: "Seals ___ clap 🦭", o: ["can", "can't"], a: "can", tip: "Seals have flippers to clap."},
      {q: "Cows ___ speak 🐮", o: ["can't", "can"], a: "can't"},
      {q: "Parrots ___ talk 🦜", o: ["can", "can't"], a: "can"},
      {q: "Bees ___ hide 🐝", o: ["can't", "can"], a: "can't"},
      {q: "Spiders ___ spin webs 🕷️", o: ["can", "can't"], a: "can"},
      {q: "Whales ___ land on the beach 🐳", o: ["can't", "can"], a: "can't"},
      {q: "Goats ___ sing songs 🐐", o: ["can't", "can"], a: "can't"},
      {q: "Dolphins ___ click sounds 🐬", o: ["can", "can't"], a: "can"},
      {q: "Frogs ___ jump high 🐸", o: ["can", "can't"], a: "can"},
      {q: "Fish ___ walk on land 🐠", o: ["can't", "can"], a: "can't"},
      {q: "Bats ___ see in the dark 🦇", o: ["can", "can't"], a: "can"},
      {q: "Pigs ___ fly in the sky 🐷", o: ["can't", "can"], a: "can't"},
      {q: "Kangaroos ___ hop far 🦘", o: ["can", "can't"], a: "can"},
      {q: "Snakes ___ have legs 🐍", o: ["can't", "can"], a: "can't"},
      {q: "Eagles ___ soar high 🦅", o: ["can", "can't"], a: "can"}
    ]
  },

  /**********************************************************
   * 4) Present Progressive => puzzle approach (15 items)
   **********************************************************/
  progressive: {
    title: "🔄 Present Progressive",
    emoji: "⏳",
    explanation:
      `<div class="explanation">
        <h3>Right Now Actions</h3>
        <p>Form questions with:
        <strong>Am/Is/Are</strong> + verb+ing + ?<br>
        Example: "She <u>is playing</u> → Is she playing?"</p>
      </div>`,
    exercises: [
      {
        q: "He is working → ? 💼",
        words: ["Is", "he", "working", "?"],
        distractors: ["are", "mom", "table", "jump"],
      },
      {
        q: "We are eating → ? 🍽️",
        words: ["Are", "we", "eating", "?"],
        distractors: ["is", "cat", "play", "sleep"],
      },
      {
        q: "You are running → ? 🏃‍♀️",
        words: ["Are", "you", "running", "?"],
        distractors: ["car", "milk", "dog", "am"],
      },
      {
        q: "They are learning → ? 📖",
        words: ["Are", "they", "learning", "?"],
        distractors: ["run", "hello", "table", "is"],
      },
      {
        q: "I am playing → ? 🎮",
        words: ["Am", "I", "playing", "?"],
        distractors: ["cat", "why", "are", "jump"],
      },
      {
        q: "She is helping → ? 🩺",
        words: ["Is", "she", "helping", "?"],
        distractors: ["mom", "car", "dogs", "am"],
      },
      {
        q: "Dogs are barking → ? 🐶",
        words: ["Are", "dogs", "barking", "?"],
        distractors: ["cat", "I", "milk", "am"],
      },
      {
        q: "Mom is cooking → ? 👩‍🍳",
        words: ["Is", "mom", "cooking", "?"],
        distractors: ["are", "jump", "dad", "table"],
      },
      {
        q: "Kids are sleeping → ? 😴",
        words: ["Are", "kids", "sleeping", "?"],
        distractors: ["is", "toy", "banana", "mom"],
      },
      {
        q: "Bird is singing → ? 🐦",
        words: ["Is", "bird", "singing", "?"],
        distractors: ["milk", "car", "table", "why"],
      },
      {
        q: "Dad is reading → ? 📖",
        words: ["Is", "dad", "reading", "?"],
        distractors: ["running", "are", "jump", "milk"],
      },
      {
        q: "Sisters are dancing → ? 💃",
        words: ["Are", "sisters", "dancing", "?"],
        distractors: ["is", "he", "toy", "mom"],
      },
      {
        q: "Brother is drawing → ? ✏️",
        words: ["Is", "brother", "drawing", "?"],
        distractors: ["dad", "milk", "cat", "are"],
      },
      {
        q: "Grandpa is gardening → ? 🌱",
        words: ["Is", "grandpa", "gardening", "?"],
        distractors: ["table", "why", "toys", "are"],
      },
      {
        q: "They are watching → ? 📺",
        words: ["Are", "they", "watching", "?"],
        distractors: ["sing", "milk", "am", "mom"],
      }
    ]
  },

  /**********************************************************
   * 5) Negative Progressive => puzzle approach (15 items)
   **********************************************************/
  negativeProgressive: {
    title: "🚫 Negative Progressive",
    emoji: "🙅‍♂️",
    explanation:
      `<div class="explanation">
        <h3>Saying "Not Now"</h3>
        <p>Add <strong>not</strong> before verb+ing<br>
        Example: "They <u>are not</u> watching."</p>
      </div>`,
    exercises: [
      {
        q: "They are watching TV →",
        words: ["They", "are", "not", "watching", "TV"],
        distractors: ["banana", "?", "car", "run"],
      },
      {
        q: "He is looking →",
        words: ["He", "is", "not", "looking"],
        distractors: ["stuff", "houses", "sing", "are"],
      },
      {
        q: "We are cooking →",
        words: ["We", "are", "not", "cooking"],
        distractors: ["milk", "juice", "jump", "am"],
      },
      {
        q: "Helen is dancing →",
        words: ["Helen", "is", "not", "dancing"],
        distractors: ["are", "cat", "toy", "table"],
      },
      {
        q: "I am finding →",
        words: ["I", "am", "not", "finding"],
        distractors: ["milk", "mom", "are", "sing"],
      },
      {
        q: "I am doing →",
        words: ["I", "am", "not", "doing"],
        distractors: ["run", "why", "toys", "is"],
      },
      {
        q: "Cat is sleeping →",
        words: ["Cat", "is", "not", "sleeping"],
        distractors: ["are", "banana", "milk", "mom"],
      },
      {
        q: "Teachers are talking →",
        words: ["Teachers", "are", "not", "talking"],
        distractors: ["hello", "table", "milk", "is"],
      },
      {
        q: "Sun is shining →",
        words: ["Sun", "is", "not", "shining"],
        distractors: ["are", "dance", "toy", "am"],
      },
      {
        q: "Baby is crying →",
        words: ["Baby", "is", "not", "crying"],
        distractors: ["milk", "jump", "play", "are"],
      },
      {
        q: "Bird is flying →",
        words: ["Bird", "is", "not", "flying"],
        distractors: ["dad", "are", "toy", "banana"],
      },
      {
        q: "Children are playing →",
        words: ["Children", "are", "not", "playing"],
        distractors: ["cat", "milk", "is", "jump"],
      },
      {
        q: "Mom is reading →",
        words: ["Mom", "is", "not", "reading"],
        distractors: ["house", "car", "banana", "are"],
      },
      {
        q: "Dad is working →",
        words: ["Dad", "is", "not", "working"],
        distractors: ["milk", "jump", "toy", "are"],
      },
      {
        q: "Frogs are swimming →",
        words: ["Frogs", "are", "not", "swimming"],
        distractors: ["banana", "am", "sing", "is"],
      }
    ]
  }
};

/*************************************************************
 * 2. Shuffle helper for multiple-choice & puzzle arrays
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
    button.innerHTML = `
      <div style="text-align:center;">
        <div style="font-weight:bold;">${lesson.emoji} ${lesson.title}</div>
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

/*************************************************************
 * 4. Show a Lesson
 *************************************************************/
function showLesson(lessonKey) {
  const lesson = lessons[lessonKey];
  const welcomeSection = document.querySelector(".welcome");
  const lessonSection = document.querySelector(".lesson-section");

  welcomeSection.classList.remove("active");
  lessonSection.classList.add("active");
  lessonSection.style.display = "block";

  // Build exercises
  lessonSection.innerHTML = `
    <button class="back-btn">⬅️ Back</button>
    <h2>${lesson.title}</h2>
    ${lesson.explanation || ""}
    <div class="exercises">
      ${lesson.exercises
        .map((ex, idx) => {
          // If puzzle approach => progressive or negativeProgressive
          if ((lessonKey === "progressive" || lessonKey === "negativeProgressive") && ex.words) {
            return buildPuzzleExercise(ex, idx);
          }

          // Otherwise multiple-choice or text
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
    hideTipPanel();
  });

  // If progressive => show tip with "Positive" formula
  if (lessonKey === "progressive") {
    showTipPanel("positive");
  } 
  // If negativeProgressive => show tip with "Negative" formula
  else if (lessonKey === "negativeProgressive") {
    showTipPanel("negative");
  } 
  else {
    hideTipPanel();
  }

  attachExerciseListeners(lessonKey);
}

/*************************************************************
 * 5. Build Puzzle for Present/Negative Progressive
 *************************************************************/
function buildPuzzleExercise(ex, idx) {
  // Merge correct words + distractors
  const allWords = [...ex.words, ...(ex.distractors || [])];
  shuffleArray(allWords);

  return `
    <div class="exercise-card" data-exercise-index="${idx}">
      <p>${ex.q}</p>
      <div class="word-puzzle">
        <div class="chosen-words"></div>
        <div class="available-words">
          ${allWords
            .map(w => `<button class="word-btn" data-word="${w}">${w}</button>`)
            .join("")}
        </div>
        <button class="submit-puzzle-btn">Submit</button>
        <div class="feedback" style="display:none;"></div>
      </div>
    </div>
  `;
}

/*************************************************************
 * 6. Attach Listeners for All Exercises
 *************************************************************/
function attachExerciseListeners(lessonKey) {
  const lesson = lessons[lessonKey];
  const lessonSection = document.querySelector(".lesson-section");

  // Puzzle approach => progressive or negativeProgressive
  if (lessonKey === "progressive" || lessonKey === "negativeProgressive") {
    attachPuzzleListeners(lesson);
  }

  // Multiple-choice:
  lessonSection.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const exData = lesson.exercises[exIndex];
      const correctAnswer = exData.a.trim().toLowerCase();
      const userAnswer = btn.dataset.answer.trim().toLowerCase();

      feedback.style.display = "block";
      if (userAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct! 🎉<br><span class="tip">${exData.tip || ""}</span>`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        // disable
        exerciseCard.querySelectorAll(".option-btn").forEach((b) => {
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
          exerciseCard.querySelectorAll(".option-btn").forEach((b) => {
            b.disabled = false;
            b.style.opacity = "1";
          });
        });
      }
    });
  });

  // Text input:
  lessonSection.querySelectorAll(".submit-btn").forEach((btn) => {
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
        // disable input
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
  document.querySelectorAll(".word-puzzle").forEach((puzzleDiv, idx) => {
    const chosenDiv = puzzleDiv.querySelector(".chosen-words");
    const availableDiv = puzzleDiv.querySelector(".available-words");
    const submitBtn = puzzleDiv.querySelector(".submit-puzzle-btn");
    const feedback = puzzleDiv.querySelector(".feedback");

    const correctWords = lesson.exercises[idx].words;

    // Click on available => move to chosen
    availableDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("word-btn")) {
        const word = e.target.dataset.word;
        const chosenSpan = document.createElement("span");
        chosenSpan.classList.add("chosen-word");
        chosenSpan.style.margin = "0.5rem";
        chosenSpan.style.padding = "0.7rem 1rem";
        chosenSpan.style.background = "#eee";
        chosenSpan.style.borderRadius = "5px";
        chosenSpan.style.cursor = "pointer";
        chosenSpan.dataset.word = word;
        chosenSpan.textContent = word;
        chosenDiv.appendChild(chosenSpan);

        // hide original
        e.target.style.display = "none";
      }
    });

    // Click chosen => remove => re-show in available
    chosenDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("chosen-word")) {
        const word = e.target.dataset.word;
        const matchBtn = availableDiv.querySelector(`.word-btn[data-word="${word}"]`);
        if (matchBtn) matchBtn.style.display = "inline-block";
        e.target.remove();
      }
    });

    // Submit puzzle
    submitBtn.addEventListener("click", () => {
      feedback.style.display = "block";
      const chosenWordsArr = Array.from(chosenDiv.querySelectorAll(".chosen-word")).map(span => span.dataset.word);

      if (arraysEqual(chosenWordsArr, correctWords)) {
        feedback.innerHTML = `✅ Correct! Great job!`;
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
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          feedback.innerHTML = "";
          chosenDiv.innerHTML = "";
          // re-show
          availableDiv.querySelectorAll(".word-btn").forEach(btn => {
            btn.style.display = "inline-block";
          });
        });
      }
    });
  });
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/*************************************************************
 * 8. "Tip" Panel at Bottom (Collapsible with "Show Tip"/"Hide Tip")
 *************************************************************/
const tipPanel = document.getElementById("tip-panel");
const tipToggleBar = document.getElementById("tip-toggle-bar");
const tipToggleText = document.getElementById("tip-toggle-text");
const tipContent = document.getElementById("tip-content");

/** Called when user enters a progressive lesson */
function showTipPanel(type) {
  tipPanel.classList.remove("open", "closed");
  tipPanel.classList.add("closed"); // start collapsed
  tipPanel.style.display = "block"; // ensure it's visible

  // Fill the tip content
  if (type === "positive") {
    tipContent.innerHTML = `
      <h3>Present Progressive (Positive)</h3>
      <p>Subject + to be (am/is/are) + verb(ing)</p>
      <p>Example: "He is working → Is he working?"</p>
    `;
  } else {
    tipContent.innerHTML = `
      <h3>Present Progressive (Negative)</h3>
      <p>Subject + to be (am/is/are) + not + verb(ing)</p>
      <p>Example: "They are not watching."</p>
    `;
  }

  tipToggleText.textContent = "Show Tip";
  tipToggleBar.addEventListener("click", toggleTipPanel);
}

/** Called when user leaves a progressive lesson or hits back */
function hideTipPanel() {
  tipPanel.classList.remove("open", "closed");
  tipPanel.style.display = "none";
  tipToggleBar.removeEventListener("click", toggleTipPanel);
}

function toggleTipPanel() {
  if (tipPanel.classList.contains("closed")) {
    // Expand
    tipPanel.classList.remove("closed");
    tipPanel.classList.add("open");
    tipToggleText.textContent = "Hide Tip";
  } else {
    // Collapse
    tipPanel.classList.remove("open");
    tipPanel.classList.add("closed");
    tipToggleText.textContent = "Show Tip";
  }
}
