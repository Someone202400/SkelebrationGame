const TRIVIA_QUESTIONS = [
    {
        question: "What do you use to type on a computer?",
        answers: ["Mouse", "Keyboard", "Screen", "Printer"],
        correct: 1,
        category: "Hardware"
    },
    {
        question: "What do you use to point and click on a computer?",
        answers: ["Keyboard", "Mouse", "Printer", "Speaker"],
        correct: 1,
        category: "Hardware"
    },
    {
        question: "Which part shows you pictures and words?",
        answers: ["Keyboard", "Mouse", "Monitor", "CPU"],
        correct: 2,
        category: "Hardware"
    },
    {
        question: "What is the brain of the computer called?",
        answers: ["CPU", "Mouse", "Keyboard", "Screen"],
        correct: 0,
        category: "Hardware"
    },
    {
        question: "Where do you plug in headphones?",
        answers: ["Mouse", "Keyboard", "Headphone jack", "Screen"],
        correct: 2,
        category: "Hardware"
    },
    {
        question: "What do you call the programs and games on a computer?",
        answers: ["Hardware", "Software", "Electricity", "Wires"],
        correct: 1,
        category: "Software"
    },
    {
        question: "What helps you find things on the internet?",
        answers: ["A browser", "A printer", "A keyboard", "A mouse"],
        correct: 0,
        category: "Software"
    },
    {
        question: "What does an 'app' do?",
        answers: ["Cleans your computer", "Does a job like games or drawing", "Fixes broken parts", "Makes the computer louder"],
        correct: 1,
        category: "Software"
    },
    {
        question: "What happens when you click 'Save'?",
        answers: ["Deletes your work", "Keeps your work safe", "Prints your work", "Closes the window"],
        correct: 1,
        category: "Software"
    },
    {
        question: "What is a cursor?",
        answers: ["A typing sound", "The blinking line or arrow on screen", "A computer bug", "A keyboard key"],
        correct: 1,
        category: "Software"
    },
    {
        question: "What should you do if someone online asks for your name?",
        answers: ["Tell them", "Ask a grown-up first", "Give them a fake name", "Send a photo"],
        correct: 1,
        category: "Internet Safety"
    },
    {
        question: "What makes a good password?",
        answers: ["Your name", "123456", "A secret mix of letters and numbers", "password"],
        correct: 2,
        category: "Internet Safety"
    },
    {
        question: "If you see something scary online, what should you do?",
        answers: ["Keep looking", "Tell a trusted adult", "Share it with friends", "Click on it"],
        correct: 1,
        category: "Internet Safety"
    },
    {
        question: "Is it okay to share your address online?",
        answers: ["Yes, everyone should know", "No, keep it private", "Only with strangers", "Only in games"],
        correct: 1,
        category: "Internet Safety"
    },
    {
        question: "What should you do before clicking a link?",
        answers: ["Click fast", "Check with an adult", "Close your eyes", "Guess where it goes"],
        correct: 1,
        category: "Internet Safety"
    },
    {
        question: "What is coding?",
        answers: ["Playing games", "Giving computers instructions", "Fixing screens", "Typing fast"],
        correct: 1,
        category: "Coding Basics"
    },
    {
        question: "What does a 'loop' do in coding?",
        answers: ["Makes a circle", "Repeats code again and again", "Deletes code", "Draws a line"],
        correct: 1,
        category: "Coding Basics"
    },
    {
        question: "If you want the computer to make a choice, what do you use?",
        answers: ["If/else", "Loop", "Variable", "Bug"],
        correct: 0,
        category: "Coding Basics"
    },
    {
        question: "What is a 'bug' in code?",
        answers: ["A real insect", "A mistake in the code", "A computer part", "A sound effect"],
        correct: 1,
        category: "Coding Basics"
    },
    {
        question: "What is a variable like in coding?",
        answers: ["A box that holds a value", "A math sign", "A keyboard button", "A screen color"],
        correct: 0,
        category: "Coding Basics"
    },
    {
        question: "What do you call a list of steps to solve a problem?",
        answers: ["A recipe", "An algorithm", "A password", "A browser"],
        correct: 1,
        category: "Coding Basics"
    },
    {
        question: "Which key makes capital letters?",
        answers: ["Shift", "Enter", "Space", "Tab"],
        correct: 0,
        category: "Hardware"
    },
    {
        question: "What does the space bar do?",
        answers: ["Deletes letters", "Makes a big space", "Saves the file", "Opens a game"],
        correct: 1,
        category: "Hardware"
    },
    {
        question: "What is a 'desktop' on a computer?",
        answers: ["A real desk", "The main screen with icons", "A folder", "A game"],
        correct: 1,
        category: "Software"
    },
    {
        question: "What does 'double-click' mean?",
        answers: ["Click once", "Click two times fast", "Hold the button", "Right click"],
        correct: 1,
        category: "Software"
    },
    {
        question: "What is a 'username'?",
        answers: ["Your real name", "A name you pick for logging in", "Your password", "Your address"],
        correct: 1,
        category: "Internet Safety"
    },
    {
        question: "What should you do if someone is mean online?",
        answers: ["Be mean back", "Tell a trusted adult", "Keep it secret", "Send more messages"],
        correct: 1,
        category: "Internet Safety"
    },
    {
        question: "In coding, what does 'print' do?",
        answers: ["Prints on paper", "Shows text on screen", "Saves the file", "Deletes code"],
        correct: 1,
        category: "Coding Basics"
    },
    {
        question: "What is Scratch?",
        answers: ["A cat sound", "A coding website for kids", "A computer bug", "A game console"],
        correct: 1,
        category: "Coding Basics"
    }
];

const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 600;

const GAME_STATES = {
    MENU: 'menu',
    PLAYING: 'playing',
    PAUSED: 'paused',
    TRIVIA: 'trivia',
    GAME_OVER: 'game_over'
};

let canvas, ctx;
let gameState = GAME_STATES.MENU;
let lastTime = 0;
let animationId = null;

let player = {
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2,
    width: 32,
    height: 32,
    speed: 3.5,
    energy: 100,
    maxEnergy: 100,
    shootCooldown: 0,
    shootRate: 250,
    invulnerable: 0,
    color: '#00ffff',
    glowIntensity: 1
};

let zombies = [];
let projectiles = [];
let generators = [];
let particles = [];
let screenShake = 0;

let keys = {};
let mouse = { x: 0, y: 0, down: false };

let score = 0;
let survivalTime = 0;
let zombiesDefeated = 0;
let questionsAnswered = 0;
let questionsCorrect = 0;

let zombieSpawnTimer = 0;
let generatorSpawnTimer = 0;
let difficulty = 1;

let currentTriviaQuestion = null;
let triviaAnswered = false;

const canvasOffset = { x: 0, y: 0 };

function init() {
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');
    
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    
    updateCanvasOffset();
    window.addEventListener('resize', updateCanvasOffset);
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('click', handleCanvasClick);
    
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('pause-btn').addEventListener('click', togglePause);
    document.getElementById('resume-btn').addEventListener('click', togglePause);
    document.getElementById('restart-btn-pause').addEventListener('click', restartGame);
    document.getElementById('main-menu-btn').addEventListener('click', goToMainMenu);
    document.getElementById('play-again-btn').addEventListener('click', restartGame);
    
    requestAnimationFrame(gameLoop);
}

function updateCanvasOffset() {
    const rect = canvas.getBoundingClientRect();
    canvasOffset.x = rect.left;
    canvasOffset.y = rect.top;
}

function handleKeyDown(e) {
    keys[e.code] = true;
    
    if (e.code === 'Escape') {
        if (gameState === GAME_STATES.PLAYING) {
            togglePause();
        } else if (gameState === GAME_STATES.PAUSED) {
            togglePause();
        }
    }
    
    if (gameState === GAME_STATES.PLAYING) {
        if (e.code === 'KeyE') {
            checkGeneratorInteraction();
        }
        if (e.code === 'Space') {
            e.preventDefault();
            shoot();
        }
    }
}

function handleKeyUp(e) {
    keys[e.code] = false;
}

function handleMouseMove(e) {
    mouse.x = e.clientX - canvasOffset.x;
    mouse.y = e.clientY - canvasOffset.y;
}

function handleMouseDown(e) {
    mouse.down = true;
    if (gameState === GAME_STATES.PLAYING) {
        shoot();
    }
}

function handleMouseUp(e) {
    mouse.down = false;
}

function handleCanvasClick(e) {
    if (gameState === GAME_STATES.TRIVIA) {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        const modalRect = getModalRect();
        if (clickX >= modalRect.x && clickX <= modalRect.x + modalRect.width &&
            clickY >= modalRect.y && clickY <= modalRect.y + modalRect.height) {
        }
    }
}

function getModalRect() {
    const modal = document.querySelector('.modal-content');
    if (!modal) return { x: 0, y: 0, width: 0, height: 0 };
    const rect = modal.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    return {
        x: rect.left - canvasRect.left,
        y: rect.top - canvasRect.top,
        width: rect.width,
        height: rect.height
    };
}

function startGame() {
    resetGame();
    gameState = GAME_STATES.PLAYING;
    hideAllScreens();
    lastTime = performance.now();
}

function restartGame() {
    resetGame();
    gameState = GAME_STATES.PLAYING;
    hideAllScreens();
    lastTime = performance.now();
}

function goToMainMenu() {
    gameState = GAME_STATES.MENU;
    hideAllScreens();
    document.getElementById('start-screen').classList.add('active');
    resetGame();
}

function togglePause() {
    if (gameState === GAME_STATES.PLAYING) {
        gameState = GAME_STATES.PAUSED;
        document.getElementById('pause-menu').classList.add('active');
    } else if (gameState === GAME_STATES.PAUSED) {
        gameState = GAME_STATES.PLAYING;
        document.getElementById('pause-menu').classList.remove('active');
        lastTime = performance.now();
    }
}

function hideAllScreens() {
    document.querySelectorAll('.screen-overlay').forEach(el => el.classList.remove('active'));
    document.getElementById('trivia-modal').classList.remove('active');
}

function resetGame() {
    player.x = CANVAS_WIDTH / 2;
    player.y = CANVAS_HEIGHT / 2;
    player.energy = 100;
    player.shootCooldown = 0;
    player.invulnerable = 0;
    player.glowIntensity = 1;
    
    zombies = [];
    projectiles = [];
    generators = [];
    particles = [];
    screenShake = 0;
    
    score = 0;
    survivalTime = 0;
    zombiesDefeated = 0;
    questionsAnswered = 0;
    questionsCorrect = 0;
    
    zombieSpawnTimer = 0;
    generatorSpawnTimer = 0;
    difficulty = 1;
    
    currentTriviaQuestion = null;
    triviaAnswered = false;
    
    updateHUD();
}

function gameLoop(currentTime) {
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    
    if (gameState === GAME_STATES.PLAYING) {
        update(deltaTime);
    }
    
    render();
    
    animationId = requestAnimationFrame(gameLoop);
}

function update(deltaTime) {
    survivalTime += deltaTime;
    
    updatePlayer(deltaTime);
    updateZombies(deltaTime);
    updateProjectiles(deltaTime);
    updateGenerators(deltaTime);
    updateParticles(deltaTime);
    updateSpawns(deltaTime);
    updateDifficulty();
    checkCollisions();
    checkGameOver();
    
    if (screenShake > 0) screenShake -= deltaTime;
    
    updateHUD();
}

function updatePlayer(deltaTime) {
    if (player.invulnerable > 0) player.invulnerable -= deltaTime;
    
    let moving = false;
    const moveSpeed = player.speed * (deltaTime / 16.67);
    
    if (keys['KeyW'] || keys['ArrowUp']) {
        player.y -= moveSpeed;
        moving = true;
    }
    if (keys['KeyS'] || keys['ArrowDown']) {
        player.y += moveSpeed;
        moving = true;
    }
    if (keys['KeyA'] || keys['ArrowLeft']) {
        player.x -= moveSpeed;
        moving = true;
    }
    if (keys['KeyD'] || keys['ArrowRight']) {
        player.x += moveSpeed;
        moving = true;
    }
    
    player.x = Math.max(player.width / 2, Math.min(CANVAS_WIDTH - player.width / 2, player.x));
    player.y = Math.max(player.height / 2, Math.min(CANVAS_HEIGHT - player.height / 2, player.y));
    
    if (moving) {
        player.energy = Math.max(0, player.energy - 0.02 * (deltaTime / 16.67));
    }
    
    if (player.shootCooldown > 0) {
        player.shootCooldown -= deltaTime;
    }
    
    player.glowIntensity = 0.7 + 0.3 * Math.sin(Date.now() / 200);
}

function shoot() {
    if (player.shootCooldown <= 0 && player.energy > 0) {
        const angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);
        projectiles.push({
            x: player.x + Math.cos(angle) * 20,
            y: player.y + Math.sin(angle) * 20,
            vx: Math.cos(angle) * 12,
            vy: Math.sin(angle) * 12,
            radius: 6,
            damage: 25,
            life: 600,
            trail: []
        });
        
        player.shootCooldown = player.shootRate;
        player.energy = Math.max(0, player.energy - 1.5);
        
        createMuzzleFlash(player.x, player.y, angle);
    }
}

function createMuzzleFlash(x, y, angle) {
    for (let i = 0; i < 5; i++) {
        const spread = (Math.random() - 0.5) * 0.5;
        particles.push({
            x: x + Math.cos(angle) * 16,
            y: y + Math.sin(angle) * 16,
            vx: Math.cos(angle + spread) * (3 + Math.random() * 2),
            vy: Math.sin(angle + spread) * (3 + Math.random() * 2),
            life: 100 + Math.random() * 100,
            maxLife: 200,
            color: Math.random() > 0.5 ? '#00ffff' : '#ffffff',
            size: 2 + Math.random() * 3,
            type: 'muzzle'
        });
    }
}

function updateZombies(deltaTime) {
    for (let i = zombies.length - 1; i >= 0; i--) {
        const zombie = zombies[i];
        
        const dx = player.x - zombie.x;
        const dy = player.y - zombie.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 0) {
            zombie.x += (dx / dist) * zombie.speed * (deltaTime / 16.67);
            zombie.y += (dy / dist) * zombie.speed * (deltaTime / 16.67);
        }
        
        zombie.animationTime += deltaTime;
        zombie.glowPhase = Math.sin(zombie.animationTime / 200) * 0.5 + 0.5;
        
        if (dist < (player.width + zombie.width) / 2) {
            if (player.invulnerable <= 0) {
                player.energy = Math.max(0, player.energy - 10);
                player.invulnerable = 1000;
                screenShake = 300;
                createDamageParticles(player.x, player.y);
            }
        }
        
        if (zombie.health <= 0) {
            createDeathParticles(zombie.x, zombie.y, zombie.color);
            zombies.splice(i, 1);
            zombiesDefeated++;
            score += 10;
        }
    }
}

function createDamageParticles(x, y) {
    for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 / 8) * i;
        particles.push({
            x, y,
            vx: Math.cos(angle) * 4,
            vy: Math.sin(angle) * 4,
            life: 400,
            maxLife: 400,
            color: '#ff0044',
            size: 3 + Math.random() * 2,
            type: 'damage'
        });
    }
}

function createDeathParticles(x, y, color) {
    for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        particles.push({
            x, y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 500 + Math.random() * 300,
            maxLife: 800,
            color,
            size: 2 + Math.random() * 3,
            type: 'death'
        });
    }
}

function updateProjectiles(deltaTime) {
    for (let i = projectiles.length - 1; i >= 0; i--) {
        const proj = projectiles[i];
        
        proj.trail.unshift({ x: proj.x, y: proj.y });
        if (proj.trail.length > 8) proj.trail.pop();
        
        proj.x += proj.vx * (deltaTime / 16.67);
        proj.y += proj.vy * (deltaTime / 16.67);
        proj.life -= deltaTime;
        
        if (proj.x < -20 || proj.x > CANVAS_WIDTH + 20 || 
            proj.y < -20 || proj.y > CANVAS_HEIGHT + 20 || proj.life <= 0) {
            projectiles.splice(i, 1);
        }
    }
}

function updateGenerators(deltaTime) {
    for (let i = generators.length - 1; i >= 0; i--) {
        const gen = generators[i];
        gen.pulseTime += deltaTime;
        gen.rotation += deltaTime * 0.001;
        gen.floatOffset = Math.sin(gen.pulseTime / 300) * 4;
        
        const dx = player.x - gen.x;
        const dy = player.y - gen.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 40) {
            gen.canInteract = true;
        } else {
            gen.canInteract = false;
        }
        
        if (gen.life <= 0) {
            generators.splice(i, 1);
        } else {
            gen.life -= deltaTime;
        }
    }
}

function updateParticles(deltaTime) {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * (deltaTime / 16.67);
        p.y += p.vy * (deltaTime / 16.67);
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= deltaTime;
        
        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }
}

function updateSpawns(deltaTime) {
    zombieSpawnTimer -= deltaTime;
    if (zombieSpawnTimer <= 0) {
        spawnZombie();
        zombieSpawnTimer = Math.max(800, 3000 - difficulty * 100);
    }
    
    generatorSpawnTimer -= deltaTime;
    if (generatorSpawnTimer <= 0) {
        spawnGenerator();
        generatorSpawnTimer = 15000 + Math.random() * 10000;
    }
}

function updateDifficulty() {
    difficulty = 1 + Math.floor(survivalTime / 30000) + Math.floor(zombiesDefeated / 10);
    difficulty = Math.min(difficulty, 15);
}

function spawnZombie() {
    const side = Math.floor(Math.random() * 4);
    let x, y;
    const margin = 50;
    
    switch (side) {
        case 0: x = Math.random() * CANVAS_WIDTH; y = -margin; break;
        case 1: x = CANVAS_WIDTH + margin; y = Math.random() * CANVAS_HEIGHT; break;
        case 2: x = Math.random() * CANVAS_WIDTH; y = CANVAS_HEIGHT + margin; break;
        case 3: x = -margin; y = Math.random() * CANVAS_HEIGHT; break;
    }
    
    const types = [
        { health: 30 + difficulty * 3, speed: 1.5 + difficulty * 0.1, color: '#ff0044', size: 28, score: 10 },
        { health: 50 + difficulty * 5, speed: 1.0 + difficulty * 0.05, color: '#ff6600', size: 36, score: 20 },
        { health: 80 + difficulty * 8, speed: 0.7 + difficulty * 0.03, color: '#ff00aa', size: 44, score: 35 }
    ];
    
    const type = types[Math.min(Math.floor(Math.random() * (1 + difficulty * 0.15)), types.length - 1)];
    
    zombies.push({
        x, y,
        width: type.size,
        height: type.size,
        health: type.health,
        maxHealth: type.health,
        speed: type.speed,
        color: type.color,
        scoreValue: type.score,
        animationTime: Math.random() * 1000,
        glowPhase: 0
    });
}

function spawnGenerator() {
    const margin = 80;
    generators.push({
        x: margin + Math.random() * (CANVAS_WIDTH - margin * 2),
        y: margin + Math.random() * (CANVAS_HEIGHT - margin * 2),
        radius: 24,
        pulseTime: Math.random() * 1000,
        rotation: 0,
        floatOffset: 0,
        life: 30000,
        canInteract: false
    });
}

function checkGeneratorInteraction() {
    for (const gen of generators) {
        if (gen.canInteract) {
            openTriviaModal();
            generators.splice(generators.indexOf(gen), 1);
            break;
        }
    }
}

function openTriviaModal() {
    gameState = GAME_STATES.TRIVIA;
    currentTriviaQuestion = getRandomQuestion();
    triviaAnswered = false;
    renderTriviaModal();
    document.getElementById('trivia-modal').classList.add('active');
}

function getRandomQuestion() {
    const shuffled = [...TRIVIA_QUESTIONS].sort(() => Math.random() - 0.5);
    return shuffled[0];
}

function renderTriviaModal() {
    const questionEl = document.getElementById('question-text');
    const answersEl = document.getElementById('answers-container');
    const feedbackEl = document.getElementById('trivia-feedback');
    
    questionEl.textContent = currentTriviaQuestion.question;
    answersEl.innerHTML = '';
    feedbackEl.classList.remove('visible', 'correct', 'wrong');
    feedbackEl.textContent = '';
    
    currentTriviaQuestion.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => handleTriviaAnswer(index));
        answersEl.appendChild(btn);
    });
}

function handleTriviaAnswer(selectedIndex) {
    if (triviaAnswered) return;
    triviaAnswered = true;
    questionsAnswered++;
    
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === currentTriviaQuestion.correct) {
            btn.classList.add('correct');
        } else if (i === selectedIndex) {
            btn.classList.add('wrong');
        }
    });
    
    const feedbackEl = document.getElementById('trivia-feedback');
    
    if (selectedIndex === currentTriviaQuestion.correct) {
        questionsCorrect++;
        player.energy = player.maxEnergy;
        score += 200;
        triggerEMP(player.x, player.y);
        feedbackEl.textContent = '✓ CORRECT! Power restored to 100%! EMP pulse triggered! +200 Score';
        feedbackEl.classList.add('visible', 'correct');
    } else {
        player.energy = Math.min(player.maxEnergy, player.energy + 20);
        spawnZombie();
        screenShake = 200;
        feedbackEl.textContent = '✗ WRONG! Only 20% power restored. Alert! Additional zombie spawned!';
        feedbackEl.classList.add('visible', 'wrong');
    }
    
    setTimeout(() => {
        closeTriviaModal();
    }, 2000);
}

function closeTriviaModal() {
    document.getElementById('trivia-modal').classList.remove('active');
    gameState = GAME_STATES.PLAYING;
    lastTime = performance.now();
}

function triggerEMP(x, y) {
    const empOverlay = document.getElementById('emp-effect');
    empOverlay.classList.add('active');
    empOverlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 255, 0.6) 0%, transparent 70%)`;
    
    for (let i = zombies.length - 1; i >= 0; i--) {
        const zombie = zombies[i];
        const dx = x - zombie.x;
        const dy = y - zombie.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 300) {
            createDeathParticles(zombie.x, zombie.y, zombie.color);
            zombies.splice(i, 1);
            zombiesDefeated++;
            score += 15;
        }
    }
    
    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 50 + Math.random() * 250;
        particles.push({
            x: x + Math.cos(angle) * dist,
            y: y + Math.sin(angle) * dist,
            vx: Math.cos(angle) * (1 + Math.random() * 2),
            vy: Math.sin(angle) * (1 + Math.random() * 2),
            life: 800,
            maxLife: 800,
            color: '#00ffff',
            size: 2 + Math.random() * 4,
            type: 'emp'
        });
    }
    
    setTimeout(() => {
        empOverlay.classList.remove('active');
    }, 500);
}

function checkCollisions() {
    for (let i = projectiles.length - 1; i >= 0; i--) {
        const proj = projectiles[i];
        
        for (let j = zombies.length - 1; j >= 0; j--) {
            const zombie = zombies[j];
            const dx = proj.x - zombie.x;
            const dy = proj.y - zombie.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < (proj.radius + zombie.width / 2)) {
                zombie.health -= proj.damage;
                
                for (let k = 0; k < 3; k++) {
                    particles.push({
                        x: proj.x,
                        y: proj.y,
                        vx: (Math.random() - 0.5) * 4,
                        vy: (Math.random() - 0.5) * 4,
                        life: 200,
                        maxLife: 200,
                        color: zombie.color,
                        size: 2 + Math.random() * 2,
                        type: 'hit'
                    });
                }
                
                projectiles.splice(i, 1);
                break;
            }
        }
    }
}

function checkGameOver() {
    if (player.energy <= 0) {
        gameOver();
    }
}

function gameOver() {
    gameState = GAME_STATES.GAME_OVER;
    
    document.getElementById('final-time').textContent = formatTime(survivalTime);
    document.getElementById('final-kills').textContent = zombiesDefeated;
    document.getElementById('final-questions').textContent = questionsAnswered;
    document.getElementById('final-score').textContent = score;
    
    document.getElementById('game-over-screen').classList.add('active');
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateHUD() {
    document.getElementById('energy-bar').style.width = `${player.energy}%`;
    document.getElementById('energy-text').textContent = `${Math.round(player.energy)}%`;
    document.getElementById('score').textContent = score;
    document.getElementById('survival-time').textContent = formatTime(survivalTime);
    document.getElementById('zombie-count').textContent = zombies.length;
    
    const energyBar = document.getElementById('energy-bar');
    energyBar.classList.remove('low', 'critical');
    if (player.energy <= 20) {
        energyBar.classList.add('critical');
    } else if (player.energy <= 40) {
        energyBar.classList.add('low');
    }
}

function render() {
    ctx.save();
    
    if (screenShake > 0) {
        const shakeX = (Math.random() - 0.5) * (screenShake / 50) * 10;
        const shakeY = (Math.random() - 0.5) * (screenShake / 50) * 10;
        ctx.translate(shakeX, shakeY);
    }
    
    renderBackground();
    renderGenerators();
    renderParticles();
    renderZombies();
    renderProjectiles();
    renderPlayer();
    
    ctx.restore();
}

function renderBackground() {
    const gradient = ctx.createRadialGradient(
        CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 0,
        CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, Math.max(CANVAS_WIDTH, CANVAS_HEIGHT) / 1.5
    );
    gradient.addColorStop(0, '#0d0d15');
    gradient.addColorStop(0.5, '#08080c');
    gradient.addColorStop(1, '#030305');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    const gridSize = 50;
    for (let x = 0; x <= CANVAS_WIDTH; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, CANVAS_HEIGHT);
        ctx.stroke();
    }
    for (let y = 0; y <= CANVAS_HEIGHT; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(CANVAS_WIDTH, y);
        ctx.stroke();
    }
    
    ctx.fillStyle = 'rgba(0, 255, 255, 0.02)';
    for (let i = 0; i < 20; i++) {
        const x = (i * 137 + Date.now() * 0.01) % CANVAS_WIDTH;
        const y = (i * 211 + Date.now() * 0.015) % CANVAS_HEIGHT;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
    }
}

function renderPlayer() {
    ctx.save();
    ctx.translate(player.x, player.y);
    
    const glowSize = 30 * player.glowIntensity;
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
    gradient.addColorStop(0, `rgba(0, 255, 255, ${0.3 * player.glowIntensity})`);
    gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
    ctx.fill();
    
    if (player.invulnerable > 0) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 + 0.5 * Math.sin(Date.now() / 50)})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 25, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.moveTo(0, -player.height / 2);
    ctx.lineTo(player.width / 2, player.height / 2);
    ctx.lineTo(-player.width / 2, player.height / 2);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-6, -4, 3, 0, Math.PI * 2);
    ctx.arc(6, -4, 3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#00ffff';
    ctx.beginPath();
    ctx.arc(-6, -4, 1.5, 0, Math.PI * 2);
    ctx.arc(6, -4, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
}

function renderZombies() {
    for (const zombie of zombies) {
        ctx.save();
        ctx.translate(zombie.x, zombie.y);
        
        const pulse = 1 + zombie.glowPhase * 0.15;
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, zombie.width);
        gradient.addColorStop(0, `rgba(${hexToRgb(zombie.color).join(',')}, ${0.3 * pulse})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, zombie.width * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = zombie.color;
        ctx.beginPath();
        ctx.arc(0, 0, zombie.width / 2 * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.arc(-zombie.width / 4, -zombie.height / 6, zombie.width / 8, 0, Math.PI * 2);
        ctx.arc(zombie.width / 4, -zombie.height / 6, zombie.width / 8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#330000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, zombie.height / 4, zombie.width / 3, 0, Math.PI);
        ctx.stroke();
        
        const healthPercent = zombie.health / zombie.maxHealth;
        if (healthPercent < 1) {
            const barWidth = zombie.width * 1.5;
            const barHeight = 4;
            ctx.fillStyle = '#330000';
            ctx.fillRect(-barWidth / 2, -zombie.height / 2 - 10, barWidth, barHeight);
            ctx.fillStyle = healthPercent > 0.5 ? '#00ff88' : (healthPercent > 0.25 ? '#ffaa00' : '#ff0044');
            ctx.fillRect(-barWidth / 2, -zombie.height / 2 - 10, barWidth * healthPercent, barHeight);
        }
        
        ctx.restore();
    }
}

function renderProjectiles() {
    for (const proj of projectiles) {
        ctx.save();
        
        if (proj.trail.length > 1) {
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(proj.trail[proj.trail.length - 1].x, proj.trail[proj.trail.length - 1].y);
            for (let i = proj.trail.length - 2; i >= 0; i--) {
                ctx.lineTo(proj.trail[i].x, proj.trail[i].y);
            }
            ctx.stroke();
        }
        
        const gradient = ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, proj.radius * 2);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.3, '#00ffff');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, proj.radius * 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#00ffff';
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, proj.radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

function renderGenerators() {
    for (const gen of generators) {
        ctx.save();
        ctx.translate(gen.x, gen.y + gen.floatOffset);
        
        if (gen.canInteract) {
            ctx.fillStyle = 'rgba(0, 255, 255, 0.9)';
            ctx.font = 'bold 20px Courier New';
            ctx.textAlign = 'center';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.lineWidth = 4;
            ctx.strokeText('[E] INTERACT', 0, -gen.radius - 20);
            ctx.fillText('[E] INTERACT', 0, -gen.radius - 20);
        }
        
        ctx.rotate(gen.rotation);
        
        const pulse = 1 + Math.sin(gen.pulseTime / 200) * 0.2;
        
        for (let ring = 3; ring >= 1; ring--) {
            const ringRadius = gen.radius * pulse * (ring / 3);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 / ring})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, gen.radius * pulse);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.5, '#00ffff');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, gen.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#00ffff';
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 / 6) * i + gen.rotation * 2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(angle) * gen.radius * 0.5, Math.sin(angle) * gen.radius * 0.5);
            ctx.lineTo(Math.cos(angle) * gen.radius * 1.2, Math.sin(angle) * gen.radius * 1.2);
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        ctx.restore();
    }
}

function renderParticles() {
    for (const p of particles) {
        const alpha = p.life / p.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : [255, 0, 68];
}

init();