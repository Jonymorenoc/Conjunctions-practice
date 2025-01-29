const lessons = {
    conjunctions: {
        title: "🔗 Conjunctions Practice",
        emoji: "🧩",
        explanation: `
            <div class="explanation">
                <h3>Connecting Words Fun! 🌉</h3>
                <p><strong>AND</strong> - Joins similar ideas<br>
                <strong>OR</strong> - Shows choices<br>
                <strong>BUT</strong> - Shows contrast</p>
                <div class="example">
                    <p>🐵 "Monkeys eat bananas <u>and</u> jump"<br>
                    🦁 "Lions <u>or</u> tigers?"<br>
                    🐻 "Big <u>but</u> friendly"</p>
                </div>
            </div>
        `,
        exercises: [
            // Original 7 + 4 new
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
            {q: "Want milk ___ juice? 🥛🧃", o: ["or", "but", "and"], a: "or"}
        ]
    },
    questionWords: {
        title: "❓ Question Words",
        emoji: "🔍",
        explanation: `
            <div class="explanation">
                <h3>Asking Questions 🕵️♀️</h3>
                <div class="word-list">
                    <p>👦 <strong>WHO</strong> - People<br>
                    🏠 <strong>WHERE</strong> - Places<br>
                    ⏰ <strong>WHEN</strong> - Time<br>
                    📦 <strong>WHAT</strong> - Things<br>
                    🤔 <strong>WHY</strong> - Reasons</p>
                </div>
            </div>
        `,
        exercises: [
            // Original 5 + 4 new
            {q: "___ is crying? 😢", o: ["Why", "Who", "Where"], a: "Why"},
            {q: "___ is backpack? 🎒", o: ["Where", "What", "When"], a: "Where"},
            {q: "___ is she doing? 📚", o: ["What", "Who", "Why"], a: "What"},
            {q: "___ in kitchen? 👨🍳", o: ["Who", "Where", "When"], a: "Who"},
            {q: "___ birthday? 🎂", o: ["When", "What", "Why"], a: "When"},
            // New exercises
            {q: "___ is your teacher? 👩🏫", o: ["Who", "Where", "What"], a: "Who"},
            {q: "___ is the park? 🌳", o: ["Where", "When", "Why"], a: "Where"},
            {q: "___ is lunch time? 🕛", o: ["When", "What", "Who"], a: "When"},
            {q: "___ is the sky blue? 🌌", o: ["Why", "Where", "How"], a: "Why"}
        ]
    },
    canCant: {
        title: "🐾 Can/Can't",
        emoji: "🦁",
        explanation: `
            <div class="explanation">
                <h3>Animal Abilities 🦸♂️</h3>
                <div class="animal-facts">
                    <p>🐝 <strong>CAN</strong> fly!<br>
                    🐧 <strong>CAN'T</strong> fly!<br>
                    🐘 <strong>CAN</strong> swim!<br>
                    🐍 <strong>CAN'T</strong> blink!</p>
                </div>
            </div>
        `,
        exercises: [
            // Original 10 + 4 new
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
            {q: "Pigs ___ fly 🐷", o: ["can't", "can"], a: "can't"}
        ]
    },
    progressive: {
        title: "🔄 Present Progressive",
        emoji: "⏳",
        explanation: `
            <div class="explanation">
                <h3>Right Now Actions 🏃♂️</h3>
                <p>Form questions with:<br>
                <strong>Am/Is/Are</strong> + verb+ing + ?<br>
                Example: "She <u>is playing</u> → Is she playing?"</p>
            </div>
        `,
        exercises: [
            // Original 6 + 4 new
            {q: "He is working → ? 💼", a: "Is he working?", t: "text"},
            {q: "We are eating → ? 🍽️", a: "Are we eating?", t: "text"},
            {q: "You are running → ? 🏃♀️", a: "Are you running?", t: "text"},
            {q: "They are learning → ? 📖", a: "Are they learning?", t: "text"},
            {q: "I am playing → ? 🎮", a: "Am I playing?", t: "text"},
            {q: "She is helping → ? 🩺", a: "Is she helping?", t: "text"},
            // New exercises
            {q: "Dogs are barking → ? 🐶", a: "Are dogs barking?", t: "text"},
            {q: "Mom is cooking → ? 👩🍳", a: "Is mom cooking?", t: "text"},
            {q: "Kids are sleeping → ? 😴", a: "Are kids sleeping?", t: "text"},
            {q: "Bird is singing → ? 🐦", a: "Is bird singing?", t: "text"}
        ]
    },
    negativeProgressive: {
        title: "🚫 Negative Progressive",
        emoji: "🙅♂️",
        explanation: `
            <div class="explanation">
                <h3>Saying "Not Now" 🙅♀️</h3>
                <p>Add <strong>not</strong> before verb+ing<br>
                Example: "They <u>are not</u> watching"</p>
            </div>
        `,
        exercises: [
            // Original 6 + 4 new
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
            {q: "Baby is crying →", a: "Baby is not crying", t: "text"}
        ]
    }
};

// Keep rest of the JavaScript code same as previous version
