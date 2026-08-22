(() => {
  "use strict";

  const STORAGE_KEY = "meituan-csa-delivery-v1";
  const BASE = "https://pages.opencodingsociety.com/csa";
  const unitInfo = {
    1: { name: "Java Starter District", color: "#ffd400", summary: "Java basics, variables, methods, objects, and strings", mascot: "📦" },
    2: { name: "Logic Loop District", color: "#7ed6a5", summary: "Selection, Boolean logic, loops, algorithms, and runtime", mascot: "🔁" },
    3: { name: "Object City", color: "#a994ed", summary: "Program design, classes, constructors, methods, and scope", mascot: "🏙️" },
    4: { name: "Data Harbor", color: "#79baf0", summary: "Data ethics, arrays, files, ArrayLists, and 2D arrays", mascot: "🗂️" }
  };

  const titles = {
    1: ["Introduction to Algorithms, Programming, and Compilers", "Variables and Data Types", "Expressions and Output", "Assignment Statements and Input", "Casting and Range of Variables", "Compound Assignment Operators", "Application Program Interface (API) and Libraries", "Documentation with Comments", "Method Signatures", "Calling Class Methods", "Math Class", "Classes & Objects", "Object Creation and Storage (Instantiation)", "Calling Instance Methods", "String Manipulation"],
    2: ["Algorithms with Selection and Repetition", "Boolean Expressions", "if Statements", "Nested if Statements", "Compound Boolean Expressions", "Comparing Boolean Expressions", "while Loops", "for Loops", "Implementing Selection and Iteration Algorithms", "Implementing String Algorithms", "Nested Iteration", "Informal Run-Time Analysis"],
    3: ["Abstraction and Program Design", "Impact of Program Design", "Anatomy of a Class", "Constructors", "Methods: How to Write Them", "Passing and Returning Object References", "Class Variables and Methods", "Scope and Access", "this Keyword"],
    4: ["Ethical and Social Issues Around Data Collection", "Introduction to Using Data Sets", "Array Creation and Access", "Array Traversals", "Implementing Array Algorithms", "Using Text Files", "Wrapper Classes", "ArrayList Methods", "ArrayList Traversals", "Implementing ArrayList Algorithms", "2D Array Creation and Access", "2D Array Traversals"]
  };

  const lessons = Object.entries(titles).flatMap(([unit, items]) => items.map((title, index) => ({
    id: `${unit}_${index + 1}`,
    unit: Number(unit),
    number: `${unit}.${index + 1}`,
    title,
    url: `${BASE}/unit_0${unit}/${unit}_${index + 1}`,
    type: "lesson"
  })));

  Object.keys(unitInfo).forEach(unit => lessons.push({
    id: `${unit}_quiz`,
    unit: Number(unit),
    number: `U${unit}`,
    title: `Unit ${unit} Boss Quiz`,
    url: `${BASE}/unit_0${unit}/quiz`,
    type: "quiz"
  }));

  const questions = [
    { q: "Which Java type stores a whole number?", a: ["int", "double", "String", "boolean"], correct: 0, why: "int stores whole-number values." },
    { q: "What does casting do?", a: ["Deletes a variable", "Converts a value to another type", "Creates a loop", "Imports a package"], correct: 1, why: "Casting explicitly converts a value from one data type to another." },
    { q: "Which operator means logical AND in Java?", a: ["||", "!=", "&&", "++"], correct: 2, why: "&& is true only when both Boolean expressions are true." },
    { q: "Which loop is usually best when the number of repetitions is known?", a: ["if", "for", "switch", "class"], correct: 1, why: "A for loop places initialization, condition, and update together." },
    { q: "What is a constructor mainly used for?", a: ["To initialize a new object", "To delete a class", "To compare strings", "To end a loop"], correct: 0, why: "A constructor establishes the starting state of a new object." },
    { q: "What does the keyword this refer to?", a: ["The parent class", "The current object", "Every class", "A static method"], correct: 1, why: "this refers to the current object whose method or constructor is running." },
    { q: "What is the first valid index of a Java array?", a: ["-1", "0", "1", "It depends on its length"], correct: 1, why: "Java arrays use zero-based indexing." },
    { q: "Which ArrayList method appends an item?", a: ["push()", "insert()", "add()", "append()"], correct: 2, why: "ArrayList uses add() to insert elements." },
    { q: "A nested loop over every cell of an r × c grid runs about how many times?", a: ["r + c", "r × c", "r ÷ c", "Only r"], correct: 1, why: "The inner loop runs c times for each of r outer iterations." },
    { q: "Why is data minimization an ethical design choice?", a: ["It makes every array larger", "It collects only data the program needs", "It removes all documentation", "It prevents methods"], correct: 1, why: "Collecting only necessary data reduces privacy and security risk." }
  ];

  const achievements = [
    { id: "first", icon: "🛵", name: "First Delivery", text: "Complete 1 lesson", test: s => s.completed.length >= 1 },
    { id: "five", icon: "🧀", name: "Cheese Collector", text: "Complete 5 lessons", test: s => s.completed.length >= 5 },
    { id: "unit", icon: "🏁", name: "District Clear", text: "Complete one whole unit", test: s => Object.keys(unitInfo).some(u => unitDone(Number(u), s)) },
    { id: "review", icon: "⚡", name: "Express Brain", text: "Answer 3 reviews", test: s => s.correctReviews >= 3 }
  ];

  let state = loadState();
  let activeLesson = null;
  let filter = "all";
  let activeQuestion = null;
  let questionAnswered = false;

  const $ = selector => document.querySelector(selector);

  function loadState() {
    try {
      return { completed: [], correctReviews: 0, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    } catch (_) {
      return { completed: [], correctReviews: 0 };
    }
  }

  function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function isComplete(id) { return state.completed.includes(id); }
  function unitLessons(unit) { return lessons.filter(item => item.unit === unit); }
  function unitDone(unit, current = state) { return unitLessons(unit).every(item => current.completed.includes(item.id)); }

  function progress() {
    const delivered = state.completed.length;
    const total = lessons.length;
    const xp = delivered * 25 + state.correctReviews * 10;
    return { delivered, total, xp, coins: delivered * 5, level: Math.floor(xp / 200) + 1, percent: Math.round(delivered / total * 100) };
  }

  function rankFor(level) {
    if (level >= 7) return "Legendary Courier";
    if (level >= 5) return "City Route Master";
    if (level >= 3) return "Speedy Specialist";
    if (level >= 2) return "Neighborhood Rider";
    return "Rookie Rider";
  }

  function renderStats() {
    const p = progress();
    $("#level-value").textContent = p.level;
    $("#xp-value").textContent = p.xp;
    $("#coin-value").textContent = p.coins;
    $("#overall-percent").textContent = `${p.percent}%`;
    $("#overall-bar").style.width = `${p.percent}%`;
    $("#rank-label").textContent = rankFor(p.level);
    $("#continue-route").textContent = p.delivered ? "Continue route" : "Start delivery";
    const next = lessons.find(item => !isComplete(item.id));
    $("#mission-title").textContent = next ? `Next: ${next.number} ${next.title}` : "Every delivery completed!";
    $("#mission-copy").textContent = next ? `Head to ${unitInfo[next.unit].name} and finish this order.` : "You cleared all four districts and every boss quiz.";
    if (p.delivered) $("#mood-mascot").src = window.deliveryVictoryImage;
  }

  function visibleFor(item) {
    if (filter === "completed") return isComplete(item.id);
    if (filter === "available") return !isComplete(item.id);
    return true;
  }

  function renderUnits() {
    const grid = $("#unit-grid");
    grid.innerHTML = "";
    Object.entries(unitInfo).forEach(([unitString, info]) => {
      const unit = Number(unitString);
      const items = unitLessons(unit);
      const completed = items.filter(item => isComplete(item.id)).length;
      const card = document.createElement("article");
      card.className = "unit-card";
      card.style.setProperty("--unit-color", info.color);
      const rows = items.filter(visibleFor).map(item => `
        <button class="lesson-order ${isComplete(item.id) ? "completed" : ""} ${item.type === "quiz" ? "quiz-order" : ""}" data-lesson="${item.id}" type="button">
          <span class="lesson-number">${item.type === "quiz" ? "👑" : item.number}</span>
          <span class="lesson-label"><strong>${escapeHtml(item.title)}</strong><small>${item.type === "quiz" ? "Boss delivery" : "25 XP · 5 cheese"}</small></span>
          <span class="lesson-status">${isComplete(item.id) ? "✅" : "○"}</span>
        </button>`).join("");
      card.innerHTML = `
        <header class="unit-card-header">
          <div><p>UNIT ${unit} · ${info.mascot}</p><h3>${info.name}</h3></div>
          <span class="unit-count">${completed}/${items.length}</span>
        </header>
        <div class="lesson-list">${rows || '<p class="source-note">No deliveries match this filter.</p>'}</div>
        <footer class="unit-footer"><span>${info.summary}</span><span>${unitDone(unit) ? "CLEARED ✨" : `${Math.round(completed/items.length*100)}%`}</span></footer>`;
      grid.appendChild(card);
    });
    grid.querySelectorAll("[data-lesson]").forEach(button => button.addEventListener("click", () => openLesson(button.dataset.lesson)));
  }

  function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function openLesson(id) {
    activeLesson = lessons.find(item => item.id === id);
    if (!activeLesson) return;
    $("#dialog-title").textContent = `${activeLesson.number} · ${activeLesson.title}`;
    $("#dialog-description").textContent = activeLesson.type === "quiz"
      ? "Boss order: review the district, take the original unit quiz, then return here to record the delivery."
      : `Study this stop in ${unitInfo[activeLesson.unit].name}. Open the original lesson, complete its activities, then return to earn your route reward.`;
    $("#open-lesson").href = activeLesson.url;
    $("#complete-lesson").textContent = isComplete(id) ? "Undo delivery" : "Mark delivered";
    $("#lesson-dialog").showModal();
  }

  function toggleComplete() {
    if (!activeLesson) return;
    if (isComplete(activeLesson.id)) state.completed = state.completed.filter(id => id !== activeLesson.id);
    else state.completed.push(activeLesson.id);
    saveState();
    $("#lesson-dialog").close();
    renderAll();
  }

  function renderAchievements() {
    const grid = $("#achievement-grid");
    grid.innerHTML = achievements.map(item => `
      <div class="achievement ${item.test(state) ? "unlocked" : ""}">
        <span>${item.icon}</span><strong>${item.name}</strong><small>${item.test(state) ? "Unlocked!" : item.text}</small>
      </div>`).join("");
  }

  function newQuestion() {
    activeQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionAnswered = false;
    $("#question-text").textContent = activeQuestion.q;
    $("#answer-feedback").textContent = "";
    $("#answer-buttons").innerHTML = activeQuestion.a.map((answer, index) => `<button class="answer-choice" data-answer="${index}" type="button">${escapeHtml(answer)}</button>`).join("");
    $("#answer-buttons").querySelectorAll("button").forEach(button => button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer), button)));
  }

  function answerQuestion(choice, button) {
    if (questionAnswered) return;
    questionAnswered = true;
    const correct = choice === activeQuestion.correct;
    button.classList.add(correct ? "correct" : "wrong");
    $("#answer-buttons").children[activeQuestion.correct].classList.add("correct");
    $("#answer-feedback").textContent = `${correct ? "Correct! +10 XP. " : "Not quite. "}${activeQuestion.why}`;
    if (correct) { state.correctReviews += 1; saveState(); renderStats(); renderAchievements(); }
  }

  function renderAll() { renderStats(); renderUnits(); renderAchievements(); }

  document.addEventListener("DOMContentLoaded", () => {
    const game = $("#csa-delivery-game");
    if (!game) return;
    window.deliveryVictoryImage = game.querySelector(".achievement-mascot img").src.replace("sleepy.png", "victory.png");
    renderAll();

    $("#continue-route").addEventListener("click", () => {
      const next = lessons.find(item => !isComplete(item.id));
      if (next) openLesson(next.id); else document.querySelector(".achievements-section").scrollIntoView({ behavior: "smooth" });
    });
    $("#how-to-play").addEventListener("click", () => $("#help-dialog").showModal());
    $("#complete-lesson").addEventListener("click", toggleComplete);
    $("#new-question").addEventListener("click", newQuestion);
    document.querySelectorAll(".game-dialog .dialog-close").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
    document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
      filter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach(item => item.classList.toggle("active", item === button));
      renderUnits();
    }));
    document.querySelectorAll(".game-dialog").forEach(dialog => dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    }));
  });
})();
