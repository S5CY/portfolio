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

  const lessonGuides = {
    "1_1": ["An algorithm is a precise, ordered set of steps for solving a problem. Java source code is compiled into bytecode that the JVM can run.", "Good algorithms are finite, unambiguous, and produce a result.", "Source → compiler → bytecode → JVM", "What does a compiler do?", ["Translates source code", "Stores user passwords", "Draws the interface"], 0],
    "1_2": ["Variables give names to stored values. Java primitive types include int, double, boolean, and char; String is an object type.", "A variable must be declared with a type before it is used.", "int deliveries = 4;", "Which type stores true or false?", ["double", "boolean", "String"], 1],
    "1_3": ["Expressions combine values and operators to produce a result. Java follows operator precedence, and integer division discards the decimal part.", "Parentheses make evaluation order explicit.", "int result = 7 / 2; // 3", "What is 9 / 4 when both values are int?", ["2", "2.25", "3"], 0],
    "1_4": ["Assignment stores a value in a variable. The right side is evaluated first, then its result is placed into the variable on the left.", "Scanner can read keyboard input after importing java.util.Scanner.", "score = score + 10;", "Which side of = is evaluated first?", ["Left", "Right", "Neither"], 1],
    "1_5": ["Casting converts a value to another compatible type. Narrowing from double to int removes the fractional part; int values can overflow their fixed range.", "Cast before division when you need a decimal result.", "double avg = (double) total / count;", "What is (int) 4.9?", ["4", "5", "4.9"], 0],
    "1_6": ["Compound assignment operators update a variable using its current value. Examples include +=, -=, *=, /=, and %=.", "The increment operator ++ adds exactly one.", "coins += 5; // same as coins = coins + 5", "Which operator multiplies and reassigns?", ["*=", "+=", "%="], 0],
    "1_7": ["A library is reusable code organized into packages. An API documents the classes, methods, parameters, and return values you can use.", "Import statements make classes from another package available.", "import java.util.ArrayList;", "What does an API primarily describe?", ["How to use provided code", "Your computer password", "Only variable names"], 0],
    "1_8": ["Comments explain intent without running as code. Java supports // line comments, /* block comments */, and /** Javadoc */ documentation.", "Useful documentation explains purpose, parameters, returns, and assumptions.", "/** Returns the delivery total. */", "Which syntax begins Javadoc?", ["/**", "//", "#"], 0],
    "1_9": ["A method signature identifies a method by its name and parameter types. The return type is not part of Java's method signature.", "Overloading uses the same method name with different parameter lists.", "send(int id) and send(String name)", "What distinguishes overloaded methods?", ["Different parameter lists", "Only different return types", "Different comments"], 0],
    "1_10": ["A class method is marked static and belongs to the class itself. Call it with the class name instead of creating an object first.", "Math.max is a familiar static method.", "double n = Math.sqrt(25);", "How should a static method usually be called?", ["ClassName.method()", "new method()", "method.class()"], 0],
    "1_11": ["The Math class provides static numeric tools such as abs, pow, sqrt, max, min, and random.", "Math.random() returns a double from 0.0 inclusive to 1.0 exclusive.", "int die = (int)(Math.random() * 6) + 1;", "What can Math.random() return?", ["0.5", "1.0 exactly", "-2.0"], 0],
    "1_12": ["A class is a blueprint containing fields and methods. An object is a specific instance created from that class.", "Reference variables point to objects rather than containing the whole object.", "Courier c = new Courier();", "What is an object?", ["An instance of a class", "A Java keyword", "A comment"], 0],
    "1_13": ["Instantiation creates an object with new and calls a constructor. The reference is stored in a variable while the object lives in heap memory.", "Two references can point to the same object.", "Order order = new Order(12);", "Which keyword creates an object?", ["new", "static", "return"], 0],
    "1_14": ["Instance methods act on one object's state. Call them through an object reference using dot notation.", "A null reference cannot call an instance method.", "order.calculateTotal();", "What is needed to call an instance method?", ["An object reference", "Only the class name", "A comment"], 0],
    "1_15": ["String is an immutable object. Common methods include length(), substring(), indexOf(), and equals().", "Use equals() for String content; == checks whether references are the same.", "name.substring(0, 3)", "How should String contents be compared?", ["equals()", "== always", "compareInt()"], 0],
    "2_1": ["Selection chooses between paths, while repetition runs steps multiple times. Algorithms often combine if statements and loops.", "Trace changing variables to verify an algorithm.", "if (open) { deliveries++; }", "Which structure repeats code?", ["A loop", "A field", "An import"], 0],
    "2_2": ["Boolean expressions evaluate to true or false. Comparison operators include ==, !=, <, <=, >, and >=.", "Do not confuse equality == with assignment =.", "age >= 16", "What type is produced by 5 < 8?", ["boolean", "int", "String"], 0],
    "2_3": ["An if statement runs its body only when its condition is true. An optional else handles the opposite case.", "Braces clearly group every statement in a branch.", "if (score >= 70) { pass(); }", "When does an if body run?", ["When its condition is true", "Exactly twice", "At compile time only"], 0],
    "2_4": ["A nested if is an if statement inside another branch. It is useful when a second decision depends on the first.", "Order conditions from broad requirements to more specific ones.", "if (open) { if (paid) deliver(); }", "A nested if is located where?", ["Inside another conditional", "Inside an import", "After every class"], 0],
    "2_5": ["Compound Boolean expressions combine conditions with &&, ||, and !. Java uses short-circuit evaluation.", "With &&, the second condition is skipped if the first is false.", "hasFood && hasAddress", "Which operator means OR?", ["||", "&&", "!="], 0],
    "2_6": ["Equivalent Boolean expressions always produce the same truth value. De Morgan's laws help negate combined conditions.", "!(a && b) is equivalent to !a || !b.", "!(late || canceled)", "What equals !(a || b)?", ["!a && !b", "!a || !b", "a && b"], 0],
    "2_7": ["A while loop repeats as long as its condition remains true. Its variables must change so the loop can eventually stop.", "A condition that never becomes false creates an infinite loop.", "while (orders > 0) { orders--; }", "When is a while condition checked?", ["Before each iteration", "Only after the loop", "During compilation only"], 0],
    "2_8": ["A for loop combines initialization, condition, and update. It is ideal for counting through a known range.", "Watch the boundary: i < length avoids going past the final index.", "for (int i = 0; i < 5; i++)", "How many times does i=0; i<4; i++ run?", ["4", "3", "5"], 0],
    "2_9": ["Selection-and-iteration algorithms filter, count, search, or accumulate values while traversing data.", "Choose and update an accumulator such as count, total, or best.", "if (value > max) max = value;", "Which variable commonly builds a running sum?", ["An accumulator", "A constructor", "A package"], 0],
    "2_10": ["String algorithms traverse characters or search for substrings. Use length(), substring(), indexOf(), and charAt() carefully.", "A String's last valid character index is length() - 1.", "for (int i=0; i<word.length(); i++)", "Last valid index of a String of length 6?", ["5", "6", "7"], 0],
    "2_11": ["Nested iteration places one loop inside another. It is common for grids, pair comparisons, and repeated patterns.", "If loops run r and c times, the body runs r × c times.", "for (row...) { for (col...) { ... } }", "A 3-by-4 nested traversal visits how many cells?", ["12", "7", "4"], 0],
    "2_12": ["Informal runtime analysis estimates how work grows with input size. One traversal is linear; two full nested traversals are usually quadratic.", "Ignore constant factors when comparing growth rates.", "one loop: O(n); nested loops: O(n²)", "Which generally grows faster?", ["O(n²)", "O(n)", "O(1)"], 0],
    "3_1": ["Abstraction hides unnecessary detail behind clear interfaces. Program design divides a large problem into focused classes and methods.", "High cohesion means each component has one clear responsibility.", "route.plan() hides planning details", "Why use abstraction?", ["To manage complexity", "To remove all methods", "To avoid testing"], 0],
    "3_2": ["Design affects correctness, readability, testing, reuse, and maintenance. Early choices can make future changes easy or expensive.", "Prefer meaningful names and small, focused methods.", "calculateFare() is clearer than doThing()", "Which improves maintainability?", ["Focused methods", "Duplicated code", "Hidden bugs"], 0],
    "3_3": ["A class contains fields, constructors, and methods. Access modifiers control which code can reach each member.", "Encapsulation usually keeps fields private and exposes behavior through methods.", "private int deliveries;", "Which member stores object state?", ["A field", "An import", "A package"], 0],
    "3_4": ["A constructor initializes a new object's state. It has the same name as the class and no return type.", "this.field distinguishes an instance field from a parameter.", "Courier(String name) { this.name = name; }", "What return type does a constructor declare?", ["None", "void", "The class name"], 0],
    "3_5": ["A method declaration includes access, optional static, return type, name, parameters, and body.", "A non-void method must return a compatible value on every path.", "public int total() { return count; }", "What must a non-void method provide?", ["A return value", "A constructor", "A package"], 0],
    "3_6": ["Java passes object references by value. A method receives a copy of the reference, so it can mutate the same object but cannot replace the caller's variable.", "Returning an object passes back a reference.", "Order findOrder(int id)", "Can a method mutate an object it receives?", ["Yes, through the copied reference", "Never", "Only if it is an int"], 0],
    "3_7": ["Static variables and methods belong to the class, while instance members belong to each object.", "A static counter can track how many objects were created.", "private static int totalCouriers;", "How many copies of a static field does a class normally have?", ["One shared copy", "One per object", "Zero"], 0],
    "3_8": ["Scope is the region where a name can be used. Local variables exist inside their block; private members are accessible only within their class.", "Use the narrowest access needed to protect state.", "if (ready) { int code = 7; }", "Where can a block-local variable be used?", ["Inside its block", "In every class", "Before its declaration"], 0],
    "3_9": ["this refers to the current object. It can access fields, call another constructor with this(...), or pass the current object.", "Use this.field when a parameter has the same name as a field.", "this.name = name;", "What does this refer to?", ["The current object", "The superclass only", "Every static method"], 0],
    "4_1": ["Ethical data collection requires purpose, consent, security, fairness, and transparency. Collect only what the program genuinely needs.", "Biased data can produce biased outcomes even when code runs correctly.", "Ask: why is this field necessary?", "What is data minimization?", ["Collecting only necessary data", "Collecting everything", "Deleting documentation"], 0],
    "4_2": ["A data set is a structured collection of observations and attributes. Before coding, inspect types, missing values, units, and possible bias.", "Cleaning data makes formats consistent and errors visible.", "rows = observations; columns = attributes", "What should you check before analysis?", ["Missing values and types", "Only the file name", "The screen color"], 0],
    "4_3": ["An array stores a fixed-size sequence of one type. Create it with new or an initializer and access elements by zero-based index.", "The final valid index is array.length - 1.", "int[] scores = {90, 85, 100};", "First index of a Java array?", ["0", "1", "-1"], 0],
    "4_4": ["Array traversal visits elements with an indexed for loop or enhanced for loop. Indexed loops are needed when position matters.", "Use i < array.length to stay within bounds.", "for (int value : scores) total += value;", "Which loop directly supplies each value?", ["Enhanced for loop", "if statement", "constructor"], 0],
    "4_5": ["Array algorithms search, count, sum, find extrema, shift, or reverse elements. Carefully define initial values and boundaries.", "For a maximum, initialize from the first element when the array is nonempty.", "int max = values[0];", "Safe initial maximum for a nonempty array?", ["Its first element", "Always zero", "array.length"], 0],
    "4_6": ["Text files provide persistent input and output. Java can use Scanner to read and PrintWriter to write, while handling file-related exceptions.", "Always close resources or use try-with-resources.", "try (Scanner in = new Scanner(file)) { ... }", "Why close a file resource?", ["To release it safely", "To change every int", "To create an array"], 0],
    "4_7": ["Wrapper classes represent primitive values as objects: Integer, Double, Boolean, and Character. Autoboxing converts between primitives and wrappers.", "Collections such as ArrayList require object types, not primitives.", "ArrayList<Integer> nums", "Wrapper class for int?", ["Integer", "Int", "NumberInt"], 0],
    "4_8": ["ArrayList is a resizable list. Common methods include add, get, set, remove, and size.", "Removing an element shifts later elements left.", "list.add(" + '"order"' + ");", "Which method returns an ArrayList's length?", ["size()", "length", "count()"], 0],
    "4_9": ["Traverse an ArrayList with indexes or an enhanced for loop. Removing while moving forward can skip shifted elements.", "When removing selected items, traverse backward or adjust the index.", "for (int i=list.size()-1; i>=0; i--)", "Why traverse backward while removing?", ["To avoid skipping shifted items", "To sort automatically", "To add duplicates"], 0],
    "4_10": ["ArrayList algorithms can search, filter, insert, remove, and accumulate. Use equals() when comparing object contents.", "Account for size changes during mutation.", "if (list.get(i).equals(target))", "How compare String items in a list?", ["equals()", "Only ==", "length()"], 0],
    "4_11": ["A 2D array stores rows and columns. Access a cell with grid[row][column]; different rows can have different lengths.", "grid.length is the row count, while grid[r].length is that row's column count.", "int[][] map = new int[3][4];", "How access row 1, column 2?", ["grid[1][2]", "grid[2][1]", "grid(1,2)"], 0],
    "4_12": ["Traverse a 2D array with nested loops: the outer loop visits rows and the inner loop visits columns.", "Use each row's own length for jagged arrays.", "for (int r=0; r<grid.length; r++)", "What usually traverses every 2D-array cell?", ["Nested loops", "One if statement", "A constructor only"], 0]
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
  let lessonAnswered = false;
  let mascotBase = "";

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
    lessonAnswered = isComplete(id);
    const guide = guideFor(activeLesson);
    const mascotNames = ["masked.png", "lightning.png", "walkies.png", "lace-mask.png", "ninja-courier.png", "orb.png", "courier-helmet.png"];
    $("#lesson-mascot").src = `${mascotBase}/${mascotNames[(activeLesson.unit * 7 + lessons.indexOf(activeLesson)) % mascotNames.length]}`;
    $("#dialog-title").textContent = `${activeLesson.number} · ${activeLesson.title}`;
    $("#dialog-description").textContent = activeLesson.type === "quiz"
      ? `Boss order for ${unitInfo[activeLesson.unit].name}. Complete this review checkpoint, then use the original quiz for the full challenge.`
      : `Quick stop in ${unitInfo[activeLesson.unit].name}. Read the mini-lesson and answer the checkpoint before recording the delivery.`;
    $("#mini-lesson").innerHTML = `<h3>Small lesson</h3><ul><li>${escapeHtml(guide[0])}</li><li>${escapeHtml(guide[1])}</li></ul><pre class="lesson-example">${escapeHtml(guide[2])}</pre>`;
    $("#lesson-question").textContent = guide[3];
    $("#lesson-answers").innerHTML = guide[4].map((answer, index) => `<button class="lesson-answer" data-choice="${index}" type="button">${escapeHtml(answer)}</button>`).join("");
    $("#lesson-feedback").textContent = lessonAnswered ? "Already delivered — you can undo it below if needed." : "";
    $("#lesson-answers").querySelectorAll("button").forEach(button => button.addEventListener("click", () => answerLesson(Number(button.dataset.choice), guide[5], button)));
    $("#open-lesson").href = activeLesson.url;
    updateCompleteButton();
    $("#lesson-dialog").showModal();
  }

  function guideFor(item) {
    if (item.type !== "quiz") return lessonGuides[item.id];
    const unitReview = {
      1: ["Unit 1 connects Java syntax, types, expressions, methods, objects, and Strings.", "Trace types and values carefully before choosing an answer.", "int x = 7 / 2; // x is 3", "Which comparison correctly checks String contents?", ["a.equals(b)", "a = b", "a.length == b"], 0],
      2: ["Unit 2 combines Boolean logic, selection, loops, String algorithms, and runtime analysis.", "Trace conditions and loop boundaries one iteration at a time.", "for (int i=0; i<n; i++)", "Which operator requires both conditions to be true?", ["&&", "||", "!"], 0],
      3: ["Unit 3 focuses on designing classes with constructors, fields, instance/static methods, scope, and this.", "Encapsulation keeps fields protected behind clear behavior.", "this.name = name;", "What initializes a newly created object?", ["A constructor", "An import", "A loop"], 0],
      4: ["Unit 4 works with data ethics, arrays, files, wrappers, ArrayLists, and 2D data.", "Most traversal bugs come from incorrect indexes or changing a list while iterating.", "for (int i=0; i<data.length; i++)", "What is the final index of an array of length n?", ["n - 1", "n", "1"], 0]
    };
    return unitReview[item.unit];
  }

  function answerLesson(choice, correct, button) {
    if (lessonAnswered && !isComplete(activeLesson.id)) return;
    $("#lesson-answers").querySelectorAll("button").forEach(item => item.classList.remove("correct", "wrong"));
    if (choice === correct) {
      lessonAnswered = true;
      button.classList.add("correct");
      $("#lesson-feedback").textContent = "Correct! Delivery unlocked. +25 XP and 5 cheese are ready.";
      updateCompleteButton();
    } else {
      button.classList.add("wrong");
      $("#lesson-answers").children[correct].classList.add("correct");
      $("#lesson-feedback").textContent = "Not quite — review the highlighted answer and try again.";
    }
  }

  function updateCompleteButton() {
    const completed = isComplete(activeLesson.id);
    $("#complete-lesson").disabled = !lessonAnswered && !completed;
    $("#complete-lesson").textContent = completed ? "Undo delivery" : lessonAnswered ? "Mark delivered" : "Answer first";
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
    mascotBase = $("#lesson-mascot").src.replace(/\/[^/]+$/, "");
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
