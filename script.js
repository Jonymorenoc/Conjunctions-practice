/*************************************************************
 * 1. LESSON DATA
 *    - Keep your original for Conjunctions, Q Words, Can/Can't
 *    - Convert Present & Negative Progressive to puzzle style
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

  // Present Progressive => puzzle approach
  progressive: {
    title: "🔄 Present Progressive",
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
        distractors: ["are", "mom", "table", "jump"],
      },
      {
        q: "We are eating → ? 🍽️",
        words: ["Are", "we", "eating", "?"],
        distractors: ["is", "cat", "play", "sing"],
      },
      {
        q: "You are running → ? 🏃‍♀️",
        words: ["Are", "you", "running", "?"],
        distractors: ["car", "why", "milk", "I"],
      },
      // replicate up to all 14 items if you wish
    ]
  },

  // Negative Progressive => puzzle approach
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
      // replicate up to all 14 if you wish
    ]
  }
};

/*************************************************************
 * 2. Shuffle helper for multiple-choice and puzzle arrays
 *************************************************************/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/*************************************************************
 * 3. Initialize the Menu
 *************************************************************/
document.addEventListener("DOMContentLoaded", initMenu);

function initMenu() {
  const menuGrid = document.querySelector(".menu-grid");
  menuGrid.innerHTML = "";

  for (let key in lessons) {
    const lesson = lessons[key];
    const button = document.createElement("button");
    button.classList.add("menu-btn");
    // If you want to add subtitles to each lesson
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
  });

  attachExerciseListeners(lessonKey);
}

/*************************************************************
 * 5. Build Puzzle for Present/Negative Progressive
 *************************************************************/
function buildPuzzleExercise(ex, index) {
  // Merge correct words + distractors, shuffle them
  const allWords = [...ex.words, ...(ex.distractors || [])];
  shuffleArray(allWords);

  return `
    <div class="exercise-card" data-exercise-index="${index}">
      <p>${ex.q}</p>
      <div class="word-puzzle">
        <div class="chosen-words"></div>
        <div class="available-words">
          ${allWords
            .map((w) => `<button class="word-btn" data-word="${w}">${w}</button>`)
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
        // Try Again
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
  const puzzleDivs = document.querySelectorAll(".word-puzzle");
  puzzleDivs.forEach((puzzleDiv, idx) => {
    const chosenDiv = puzzleDiv.querySelector(".chosen-words");
    const availableDiv = puzzleDiv.querySelector(".available-words");
    const submitBtn = puzzleDiv.querySelector(".submit-puzzle-btn");
    const feedback = puzzleDiv.querySelector(".feedback");

    const correctWords = lesson.exercises[idx].words; // array of correct sequence

    // Click on available => move word to chosen
    availableDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("word-btn")) {
        const word = e.target.dataset.word;
        // create a chosen word
        const chosenSpan = document.createElement("span");
        chosenSpan.classList.add("chosen-word");
        chosenSpan.style.margin = "0.5rem";
        chosenSpan.style.padding = "0.6rem 0.8rem";
        chosenSpan.style.background = "#eee";
        chosenSpan.style.borderRadius = "5px";
        chosenSpan.style.cursor = "pointer";
        chosenSpan.dataset.word = word;
        chosenSpan.textContent = word;
        chosenDiv.appendChild(chosenSpan);

        // hide the clicked word in available
        e.target.style.display = "none";
      }
    });

    // Click on chosen => remove => re-show in available
    chosenDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("chosen-word")) {
        const word = e.target.dataset.word;
        // find that word-btn in available
        const matchBtn = availableDiv.querySelector(`.word-btn[data-word="${word}"]`);
        if (matchBtn) matchBtn.style.display = "inline-block";
        e.target.remove();
      }
    });

    // Submit puzzle
    submitBtn.addEventListener("click", () => {
      feedback.style.display = "block";
      const chosen = chosenDiv.querySelectorAll(".chosen-word");
      const userSequence = Array.from(chosen).map(span => span.dataset.word);

      if (arraysEqual(userSequence, correctWords)) {
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
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          feedback.innerHTML = "";
          chosenDiv.innerHTML = "";
          // re-show all hidden word-btn
          availableDiv.querySelectorAll(".word-btn").forEach(btn => {
            btn.style.display = "inline-block";
          });
        });
      }
    });
  });
}

// Compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
