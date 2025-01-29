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
            {q: "Zebras are black ___ white 🦓", o: ["and", "or", "but"], a: "and", tip: "AND conecta dos ideas similares."},
            {q: "Do you want pancakes ___ waffles? 🥞", o: ["and", "or", "but"], a: "or", tip: "OR presenta una elección entre opciones."},
            {q: "I want ice cream, ___ I'm full 🍦", o: ["but", "or", "and"], a: "but", tip: "BUT muestra un contraste entre dos declaraciones."},
            {q: "Do you prefer a book, table ___ shelf? 📚", o: ["or", "and", "but"], a: "or", tip: "OR presenta una elección entre opciones."},
            {q: "Baby is hungry ___ tired 👶", o: ["and", "but", "or"], a: "and", tip: "AND conecta dos estados similares."},
            {q: "The TV is broken ___ they want to watch 📺", o: ["but", "and", "or"], a: "but", tip: "BUT muestra un contraste entre dos declaraciones."},
            {q: "The baseball bat is missing ___ it's not fun ⚾", o: ["but", "or", "and"], a: "but", tip: "BUT muestra un contraste entre dos declaraciones."},
            {q: "Do you like apples ___ oranges? 🍎🍊", o: ["or", "and", "but"], a: "or", tip: "OR presenta una elección entre opciones."},
            {q: "It is sunny ___ raining today? 🌞🌧️", o: ["but", "and", "or"], a: "but", tip: "BUT muestra un contraste entre dos declaraciones."},
            {q: "Would you like pizza ___ pasta for dinner? 🍕🍝", o: ["and", "or", "but"], a: "and", tip: "AND conecta dos opciones similares."},
            {q: "Do you want milk ___ juice? 🥛🧃", o: ["or", "but", "and"], a: "or", tip: "OR presenta una elección entre opciones."},
            {q: "Dogs ___ cats get along well 🐶🐱", o: ["and", "but", "or"], a: "and", tip: "AND conecta dos sujetos similares."},
            {q: "Would you like tea ___ coffee? ☕🍵", o: ["and", "but", "or"], a: "or", tip: "OR presenta una elección entre opciones."},
            {q: "He is tall ___ strong 💪", o: ["and", "but", "or"], a: "and", tip: "AND conecta dos cualidades similares."},
            {q: "She wanted to play, ___ it was raining ☔", o: ["and", "but", "or"], a: "but", tip: "BUT muestra un contraste entre dos declaraciones."}
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
            {q: "___ is crying? 😢", o: ["Who", "Why", "Where"], a: "Who", tip: "WHO pregunta por una persona."},
            {q: "___ is your backpack? 🎒", o: ["Where", "What", "When"], a: "Where", tip: "WHERE pregunta por un lugar."},
            {q: "___ is she doing? 📚", o: ["What", "Who", "Why"], a: "What", tip: "WHAT pregunta por una acción o cosa."},
            {q: "___ is in the kitchen? 👨🍳", o: ["Who", "Where", "When"], a: "Who", tip: "WHO pregunta por una persona."},
            {q: "___ is your birthday? 🎂", o: ["When", "What", "Why"], a: "When", tip: "WHEN pregunta por el tiempo."},
            {q: "___ is your teacher? 👩🏫", o: ["Who", "Where", "What"], a: "Who", tip: "WHO pregunta por una persona."},
            {q: "___ is the park? 🌳", o: ["Where", "When", "Why"], a: "Where", tip: "WHERE pregunta por un lugar."},
            {q: "___ is lunch time? 🕛", o: ["When", "What", "Who"], a: "When", tip: "WHEN pregunta por el tiempo."},
            {q: "___ is the sky blue? 🌌", o: ["Why", "Where", "How"], a: "Why", tip: "WHY pregunta por razones."},
            {q: "___ are you going to school? 🚌", o: ["Where", "Why", "Who"], a: "Where", tip: "WHERE pregunta por un lugar."},
            {q: "___ is your favorite color? 🎨", o: ["What", "When", "Who"], a: "What", tip: "WHAT pregunta por cosas."},
            {q: "___ do you like pizza? 🍕", o: ["Why", "Where", "Who"], a: "Why", tip: "WHY pregunta por razones."},
            {q: "___ is your birthday celebration? 🎉", o: ["When", "What", "Who"], a: "When", tip: "WHEN pregunta por el tiempo."}
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
            {q: "Seals ___ clap 🦭", o: ["can", "can't"], a: "can", tip: "Las focas tienen aletas que les permiten aplaudir."},
            {q: "Cows ___ speak 🐮", o: ["can't", "can"], a: "can't", tip: "Las vacas comunican a través de sonidos pero no pueden hablar."},
            {q: "Parrots ___ talk 🦜", o: ["can", "can't"], a: "can", tip: "Los loros imitan sonidos y pueden hablar."},
            {q: "Bees ___ hide 🐝", o: ["can't", "can"], a: "can't", tip: "Las abejas son activas y no se esconden."},
            {q: "Spiders ___ spin webs 🕷️", o: ["can", "can't"], a: "can", tip: "Las arañas usan seda para tejer telas."},
            {q: "Whales ___ land on the beach 🐳", o: ["can't", "can"], a: "can't", tip: "Las ballenas viven en el agua y no pueden aterrizar en la playa."},
            {q: "Goats ___ sing songs 🐐", o: ["can't", "can"], a: "can't", tip: "Las cabras emiten sonidos pero no cantan canciones."},
            {q: "Dolphins ___ click sounds 🐬", o: ["can", "can't"], a: "can", tip: "Los delfines usan la ecolocalización con sonidos de clic."},
            {q: "Frogs ___ jump high 🐸", o: ["can", "can't"], a: "can", tip: "Las ranas tienen patas fuertes que les permiten saltar alto."},
            {q: "Fish ___ walk on land 🐠", o: ["can't", "can"], a: "can't", tip: "Los peces son acuáticos y no pueden caminar en tierra."},
            {q: "Bats ___ see in the dark 🦇", o: ["can", "can't"], a: "can", tip: "Los murciélagos usan la ecolocalización para navegar en la oscuridad."},
            {q: "Pigs ___ fly in the sky 🐷", o: ["can't", "can"], a: "can't", tip: "Los cerdos son animales terrestres y no pueden volar."},
            {q: "Kangaroos ___ hop long distances 🦘", o: ["can", "can't"], a: "can", tip: "Los canguros tienen patas traseras fuertes para saltar largas distancias."},
            {q: "Snakes ___ have legs 🐍", o: ["can't", "can"], a: "can't", tip: "Las serpientes son reptiles sin patas."},
            {q: "Eagles ___ soar high in the sky 🦅", o: ["can", "can't"], a: "can", tip: "Las águilas son aves que vuelan alto usando sus alas."},
            {q: "Turtles ___ run fast 🐢", o: ["can't", "can"], a: "can't", tip: "Las tortugas se mueven lentamente y no pueden correr rápido."}
        ]
    },
    progressive: {
        title: "🔄 Present Progressive",
        emoji: "⏳",
        explanation: 
            `<div class="explanation">
                <h3>Right Now Actions 🏃‍♂️</h3>
                <p>Form questions con:<br>
                <strong>Am/Is/Are</strong> + verbo+ing + ?<br>
                Ejemplo: "She <u>is playing</u> → Is she playing?"</p>
            </div>`,
        exercises: [
            {q: "He is working → ? 💼", a: "Is he working?", t: "text", tip: "Usa 'Is' para sujetos singulares como 'He'."},
            {q: "We are eating → ? 🍽️", a: "Are we eating?", t: "text", tip: "Usa 'Are' para sujetos plurales como 'We'."},
            {q: "You are running → ? 🏃‍♀️", a: "Are you running?", t: "text", tip: "Usa 'Are' para 'You' sin importar el número."},
            {q: "They are learning → ? 📖", a: "Are they learning?", t: "text", tip: "Usa 'Are' para sujetos plurales como 'They'."},
            {q: "I am playing → ? 🎮", a: "Am I playing?", t: "text", tip: "Usa 'Am' para el sujeto singular 'I'."},
            {q: "She is helping → ? 🩺", a: "Is she helping?", t: "text", tip: "Usa 'Is' para sujetos singulares como 'She'."},
            {q: "Dogs are barking → ? 🐶", a: "Are dogs barking?", t: "text", tip: "Usa 'Are' para sujetos plurales como 'Dogs'."},
            {q: "Mom is cooking → ? 👩‍🍳", a: "Is mom cooking?", t: "text", tip: "Usa 'Is' para sujetos singulares como 'Mom'."},
            {q: "Kids are sleeping → ? 😴", a: "Are kids sleeping?", t: "text", tip: "Usa 'Are' para sujetos plurales como 'Kids'."},
            {q: "Bird is singing → ? 🐦", a: "Is bird singing?", t: "text", tip: "Usa 'Is' para sujetos singulares como 'Bird'."},
            {q: "Dad is reading → ? 📖", a: "Is dad reading?", t: "text", tip: "Usa 'Is' para sujetos singulares como 'Dad'."},
            {q: "Sisters are dancing → ? 💃", a: "Are sisters dancing?", t: "text", tip: "Usa 'Are' para sujetos plurales como 'Sisters'."},
            {q: "Brother is drawing → ? ✏️", a: "Is brother drawing?", t: "text", tip: "Usa 'Is' para sujetos singulares como 'Brother'."},
            {q: "Grandpa is gardening → ? 🌱", a: "Is grandpa gardening?", t: "text", tip: "Usa 'Is' para sujetos singulares como 'Grandpa'."}
        ]
    },
    negativeProgressive: {
        title: "🚫 Negative Progressive",
        emoji: "🙅‍♂️",
        explanation: 
            `<div class="explanation">
                <h3>Saying "Not Now" 🙅‍♀️</h3>
                <p>Agrega <strong>not</strong> antes de verbo+ing<br>
                Ejemplo: "They <u>are not</u> watching."</p>
            </div>`,
        exercises: [
            {q: "They are watching TV →", a: "They are not watching TV", t: "text", tip: "Agrega 'not' después de 'are' para hacerlo negativo."},
            {q: "He is looking →", a: "He is not looking", t: "text", tip: "Agrega 'not' después de 'is' para hacerlo negativo."},
            {q: "We are cooking →", a: "We are not cooking", t: "text", tip: "Agrega 'not' después de 'are' para hacerlo negativo."},
            {q: "Helen is dancing →", a: "Helen is not dancing", t: "text", tip: "Agrega 'not' después de 'is' para hacerlo negativo."},
            {q: "I am finding →", a: "I am not finding", t: "text", tip: "Agrega 'not' después de 'am' para hacerlo negativo."},
            {q: "I am doing →", a: "I am not doing", t: "text", tip: "Agrega 'not' después de 'am' para hacerlo negativo."},
            {q: "Cat is sleeping →", a: "Cat is not sleeping", t: "text", tip: "Agrega 'not' después de 'is' para hacerlo negativo."},
            {q: "Teachers are talking →", a: "Teachers are not talking", t: "text", tip: "Agrega 'not' después de 'are' para hacerlo negativo."},
            {q: "Sun is shining →", a: "Sun is not shining", t: "text", tip: "Agrega 'not' después de 'is' para hacerlo negativo."},
            {q: "Baby is crying →", a: "Baby is not crying", t: "text", tip: "Agrega 'not' después de 'is' para hacerlo negativo."},
            {q: "Bird is flying →", a: "Bird is not flying", t: "text", tip: "Agrega 'not' después de 'is' para hacerlo negativo."},
            {q: "Children are playing →", a: "Children are not playing", t: "text", tip: "Agrega 'not' después de 'are' para hacerlo negativo."},
            {q: "Mom is reading →", a: "Mom is not reading", t: "text", tip: "Agrega 'not' después de 'is' para hacerlo negativo."},
            {q: "Dad is working →", a: "Dad is not working", t: "text", tip: "Agrega 'not' después de 'is' para hacerlo negativo."}
        ]
    }
};

// Función para inicializar el menú
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

    // Añadir escuchadores de eventos a los botones
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showLesson(btn.getAttribute('data-lesson'));
        });
    });
}

// Función para mostrar una lección
function showLesson(lessonKey) {
    const lesson = lessons[lessonKey];
    const welcomeSection = document.querySelector('.welcome');
    const lessonSection = document.querySelector('.lesson-section');

    welcomeSection.classList.remove('active');
    lessonSection.classList.add('active');
    lessonSection.style.display = 'block';
    lessonSection.innerHTML = `
        <button class="back-btn">⬅️ Volver</button>
        <h2>${lesson.title}</h2>
        ${lesson.explanation}
        <div class="exercises">
            ${lesson.exercises.map((ex, index) => `
                <div class="exercise-card" data-exercise-index="${index}">
                    <p>${ex.q}</p>
                    ${ex.o ? `
                    <div class="options-grid">
                        ${ex.o.map(option => `<button class="option-btn" data-answer="${option}">${option}</button>`).join('')}
                    </div>
                    ` : `
                    <div class="options-grid">
                        <input type="text" class="text-input" placeholder="Escribe tu respuesta">
                        <button class="submit-btn">Enviar</button>
                    </div>
                    `}
                    <div class="feedback" style="display:none;"></div>
                </div>
            `).join('')}
        </div>
    `;

    // Añadir escuchador de eventos al botón de volver
    document.querySelector('.back-btn').addEventListener('click', () => {
        lessonSection.classList.remove('active');
        lessonSection.style.display = 'none';
        welcomeSection.classList.add('active');
    });

    // Añadir escuchadores de eventos a los botones de opciones
    lessonSection.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const exerciseCard = btn.closest('.exercise-card');
            const feedback = exerciseCard.querySelector('.feedback');
            const selectedAnswer = btn.getAttribute('data-answer').trim().toLowerCase();
            const exerciseIndex = parseInt(exerciseCard.getAttribute('data-exercise-index'));
            const currentExercise = lesson.exercises[exerciseIndex];
            const correctAnswer = currentExercise.a.trim().toLowerCase();

            if (selectedAnswer === correctAnswer) {
                feedback.innerHTML = `✅ ¡Correcto! 🎉<br><span class="tip">${currentExercise.tip}</span>`;
                feedback.classList.add('correct');
                feedback.classList.remove('incorrect');
            } else {
                feedback.innerHTML = `❌ ¡Incorrecto! La respuesta correcta es: "${currentExercise.a}".<br><span class="tip">${currentExercise.tip}</span> <button class="try-again-btn">Intenta de Nuevo</button>`;
                feedback.classList.add('incorrect');
                feedback.classList.remove('correct');
            }
            feedback.style.display = 'block';

            if (selectedAnswer !== correctAnswer) {
                // Añadir escuchador de eventos al botón "Intenta de Nuevo"
                feedback.querySelector('.try-again-btn').addEventListener('click', () => {
                    feedback.style.display = 'none';
                    // Rehabilitar todos los botones de opciones
                    exerciseCard.querySelectorAll('.option-btn').forEach(button => {
                        button.disabled = false;
                        button.style.cursor = 'pointer';
                        button.style.opacity = '1';
                    });
                });
            } else {
                // Deshabilitar todos los botones de opciones después de una respuesta correcta
                exerciseCard.querySelectorAll('.option-btn').forEach(button => {
                    button.disabled = true;
                    button.style.cursor = 'default';
                    button.style.opacity = '0.6';
                });
            }
        });
    });

    // Añadir escuchadores de eventos a los inputs de texto y botones de enviar
    lessonSection.querySelectorAll('.exercise-card').forEach(card => {
        const input = card.querySelector('.text-input');
        const submitBtn = card.querySelector('.submit-btn');
        const feedback = card.querySelector('.feedback');
        const exerciseIndex = parseInt(card.getAttribute('data-exercise-index'));
        const currentExercise = lesson.exercises[exerciseIndex];
        const correctAnswer = currentExercise.a.trim().toLowerCase();

        // Manejar la tecla Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitAnswer();
            }
        });

        // Manejar el clic en el botón de enviar
        submitBtn.addEventListener('click', () => {
            submitAnswer();
        });

        function submitAnswer() {
            const userAnswer = input.value.trim().toLowerCase();
            if (userAnswer === "") {
                feedback.innerHTML = "❗ Por favor, escribe una respuesta.";
                feedback.classList.add('incorrect');
                feedback.classList.remove('correct');
                feedback.style.display = 'block';
                return;
            }

            if (userAnswer === correctAnswer) {
                feedback.innerHTML = `✅ ¡Correcto! 🎉<br><span class="tip">${currentExercise.tip}</span>`;
                feedback.classList.add('correct');
                feedback.classList.remove('incorrect');
            } else {
                feedback.innerHTML = `❌ ¡Incorrecto! La respuesta correcta es: "${currentExercise.a}".<br><span class="tip">${currentExercise.tip}</span> <button class="try-again-btn">Intenta de Nuevo</button>`;
                feedback.classList.add('incorrect');
                feedback.classList.remove('correct');
            }
            feedback.style.display = 'block';

            if (userAnswer !== correctAnswer) {
                // Añadir escuchador de eventos al botón "Intenta de Nuevo"
                feedback.querySelector('.try-again-btn').addEventListener('click', () => {
                    feedback.style.display = 'none';
                    // Rehabilitar el input y el botón de enviar
                    input.disabled = false;
                    submitBtn.disabled = false;
                    input.value = '';
                });
            } else {
                // Deshabilitar el input y el botón de enviar después de una respuesta correcta
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

// Inicializar el menú al cargar la página
document.addEventListener('DOMContentLoaded', initMenu);
