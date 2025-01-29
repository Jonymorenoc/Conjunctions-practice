const sections = {
    conjunctions1: {
        title: "🧩 Conjunctions Practice (Set 1)",
        exercises: [
            {q: "Zebras are black ___ white.", o: ["and", "or", "but"], a: "and"},
            {q: "Does he like pancakes ___ waffles?", o: ["and", "or", "but"], a: "or"},
            {q: "I want to solve the puzzle, ___ it is very hard.", o: ["and", "or", "but"], a: "but"},
            {q: "Should I put the book on the table ___ on the bookshelf?", o: ["and", "or", "but"], a: "or"},
            {q: "The baby is hungry ___ very tired.", o: ["and", "or", "but"], a: "and"},
            {q: "They want to watch TV, ___ it is not working.", o: ["and", "or", "but"], a: "but"},
            {q: "My brother wants to play baseball, ___ he doesn’t have a bat.", o: ["and", "or", "but"], a: "but"}
        ]
    },
    conjunctions2: {
        title: "🧩 Conjunctions Practice (Set 2)",
        exercises: [
            {q: "We need flour ______ sugar for the cake.", o: ["and", "or", "but"], a: "and"},
            {q: "He went to buy sodas, ______ the store was closed.", o: ["and", "or", "but"], a: "but"},
            {q: "Do you want pizza ______ spaghetti?", o: ["and", "or", "but"], a: "or"},
            {q: "I like cookies ______ milk.", o: ["and", "or", "but"], a: "and"},
            {q: "It's sunny ______ cold today.", o: ["and", "or", "but"], a: "but"},
            {q: "Should we walk ______ take the bus?", o: ["and", "or", "but"], a: "or"}
        ]
    },
    questions: {
        title: "❓ Question Words Practice",
        exercises: [
            {q: "______ is she crying? 😢", o: ["When", "Who", "What", "Why"], a: "Why"},
            {q: "______ is your backpack? 🎒", o: ["Where", "Who", "What", "When"], a: "Where"},
            {q: "______ is she doing? 📚", o: ["When", "Who", "What", "Why"], a: "What"},
            {q: "______ is in the kitchen? 👨🍳", o: ["Where", "Who", "What", "When"], a: "Who"},
            {q: "______ is your birthday? 🎂", o: ["Where", "Who", "What", "When"], a: "When"}
        ]
    },
    can: {
        title: "🐾 Can/Can't Practice",
        exercises: [
            {q: "Seals ___ clap their flippers.", o: ["can", "can't"], a: "can"},
            {q: "Cows ___ speak. They moo.", o: ["can", "can't"], a: "can't"},
            {q: "Parrots ___ talk like you.", o: ["can", "can't"], a: "can"},
            {q: "Bees ___ hide on leaves.", o: ["can", "can't"], a: "can't"},
            {q: "Spiders ___ spin amazing webs.", o: ["can", "can't"], a: "can"},
            {q: "Whales ___ live out of water.", o: ["can", "can't"], a: "can't"}
        ]
    },
    progressive: {
        title: "🔄 Present Progressive Questions",
        exercises: [
            {q: "Convert: We are eating early →", a: "Are we eating early?", t: "text"},
            {q: "Convert: You are doing your best →", a: "Are you doing your best?", t: "text"},
            {q: "Convert: They are learning fast →", a: "Are they learning fast?", t: "text"},
            {q: "Convert: I am playing with you →", a: "Am I playing with you?", t: "text"},
            {q: "Convert: She is helping the doctor →", a: "Is she helping the doctor?", t: "text"}
        ]
    },
    negative: {
        title: "🚫 Negative Progressive",
        exercises: [
            {q: "Negative: They are watching TV →", a: "They are not watching TV", t: "text"},
            {q: "Negative: He is looking for you →", a: "He is not looking for you", t: "text"},
            {q: "Negative: We are cooking dinner →", a: "We are not cooking dinner", t: "text"},
            {q: "Negative: Helen is dancing →", a: "Helen is not dancing", t: "text"},
            {q: "Negative: I am finding the answers →", a: "I am not finding the answers", t: "text"}
        ]
    }
};

// Update showSection function to handle different exercise types
function showSection(sectionKey) {
    const section = sections[sectionKey];
    const content = `
        <section class="current-section">
            <h2>${section.title}</h2>
            <button class="back-btn" onclick="showSection('home')">🏠 Back to Menu</button>
            ${section.exercises.map((ex, index) => `
                <div class="exercise">
                    <div class="question">${index + 1}. ${ex.q}</div>
                    ${ex.o ? `
                        <div class="options">
                            ${ex.o.map(opt => `
                                <div class="option" onclick="checkAnswer(this, '${opt}', '${ex.a}')">
                                    ${opt}
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="text-exercise">
                            <input type="text" class="text-answer" placeholder="Type your answer... ✍️">
                            <button class="check-btn" onclick="checkTextAnswer(this, '${ex.a}')">Check ✅</button>
                        </div>
                    `}
                    <div class="feedback"></div>
                </div>
            `).join('')}
        </section>
    `;
    
    document.getElementById('sections').innerHTML = content;
    window.scrollTo(0, 0);
}

// Keep rest of the JavaScript functions same as previous
