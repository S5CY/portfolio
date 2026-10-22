---
layout: post
title: "Trimester 1 Project Summary"
permalink: /trimester-1-sprint/
description: A summary of my projects, team contributions, and AP CSA growth.
hide: true
show_reading_time: false
---

<link rel="stylesheet" href="{{ '/assets/css/trimester-sprint.css' | relative_url }}?v=4">

<div class="sprint-page">
  <section class="sprint-hero">
    <span class="sprint-kicker">AP Computer Science A</span>
    <h1>Trimester 1 Project Summary</h1>
    <p>This trimester, I moved beyond completing assignments and started creating learning experiences for other students. My work combined game design, JavaScript, Python, testing, technical writing, and team collaboration.</p>

  </section>

  <section class="sprint-section">
    <h2>Featured projects</h2>
    <p class="sprint-section-intro">These three projects best represent my work. Each one started with a problem, went through multiple revisions, and ended as something students could actually use.</p>

    <div class="sprint-grid">
      <article class="sprint-card">
        <h3>MeiTuan Mouse CSA Delivery</h3>
        <p>I transformed CSA Units 1–4 into a delivery game instead of presenting the material as a plain collection of links.</p>
        <ul>
          <li>Four themed learning districts</li>
          <li>Multiple-choice lesson checkpoints</li>
          <li>XP, coins, achievements, and saved progress</li>
          <li>A dashboard that makes review feel like a game</li>
        </ul>
        <div class="sprint-button-row">
          <a class="sprint-button" href="https://s5cy.github.io/portfolio/csa-delivery/">Play the game</a>
        </div>
      </article>

      <article class="sprint-card">
        <h3>Linux Setup Agent</h3>
        <p>I helped build a tool that checks a student's development environment and turns confusing setup failures into clear next steps.</p>
        <ul>
          <li>Python-based environment checks</li>
          <li>Student-friendly troubleshooting guidance</li>
          <li>Documentation for how the system works</li>
          <li>Automated tests for expected behavior</li>
        </ul>
        <div class="sprint-button-row">
          <a class="sprint-button" href="https://github.com/the7blueprints/blueprints_pages/blob/main/scripts/linux_setup_agent.py">View code</a>
          <a class="sprint-button secondary" href="https://github.com/the7blueprints/blueprints_pages/blob/main/scripts/test_linux_setup_agent.py">View tests</a>
        </div>
      </article>

      <article class="sprint-card">
        <h3>AP CSA Unit 4 Lessons</h3>
        <p>I created three student-facing lessons and improved them through repeated review so they were accurate, organized, and easier to learn from.</p>
        <ul>
          <li>Using text files</li>
          <li>Wrapper classes</li>
          <li>Recursive searching and sorting</li>
          <li>Examples, visuals, and interactive practice</li>
        </ul>
        <div class="sprint-button-row">
          <a class="sprint-button secondary" href="https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_6">4.6</a>
          <a class="sprint-button secondary" href="https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_7">4.7</a>
          <a class="sprint-button secondary" href="https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_17">4.17</a>
        </div>
      </article>
    </div>
  </section>

  <section class="sprint-section">
    <h2>How I contributed</h2>
    <p class="sprint-section-intro">My work was not limited to my own pages. I also reviewed shared systems, repaired team content, and helped turn ideas into tested features.</p>

    <div class="sprint-two-column">
      <div class="sprint-panel">
        <h3>Team and product work</h3>
        <ul>
          <li><strong>Reviewed the full class game</strong> and documented improvements for controls, saving, accessibility, layouts, feedback, and learning flow.</li>
          <li><strong>Investigated setup problems</strong> and helped plan a pre-check system that verifies a student's tools before launching the agent.</li>
          <li><strong>Repaired five teammates' lessons</strong> by correcting broken file locations, permalinks, and Unit 4 navigation.</li>
          <li><strong>Improved Toolchain Trail</strong> by connecting setup verification to the game and helping add voice, language, and pitch options.</li>
        </ul>
      </div>

      <div class="sprint-panel accent">
        <h3>What this taught me</h3>
        <p>I learned to think about the person using my code, not only whether the code runs. A useful project needs clear instructions, thoughtful design, reliable tests, and feedback that helps the user recover when something goes wrong.</p>
        <p>I also became more comfortable working across shared repositories. That meant reading code I did not write, discussing plans before implementing them, fixing integration problems, and leaving evidence that teammates could understand.</p>
        <div class="sprint-button-row">
          <a class="sprint-button" href="https://the7blueprints.github.io/blueprints_pages/cs-pathway/toolchain-trail">Open Toolchain Trail</a>
        </div>
      </div>
    </div>
  </section>

  <section class="sprint-section">
    <h2>AP CSA growth</h2>
    <div class="sprint-two-column">
      <div class="sprint-panel">
        <h3>Learning through teaching</h3>
        <p>Writing lessons made me explain concepts more carefully than I would when only studying for myself. I had to choose useful examples, organize ideas in a logical order, and make sure practice activities supported the explanation.</p>
        <p>Revising the lessons also showed me that technical content can be correct but still difficult to use. I improved the structure, visuals, wording, and code runners so students could follow the lesson with less confusion.</p>
      </div>

      <div class="sprint-panel">
        <h3>Practice exam analysis</h3>
        <div class="sprint-score">
          <strong>39 / 42</strong>
          <span>I used the results to identify specific concepts to review instead of only recording the score.</span>
        </div>
        <p>My corrections focused on matching constructor arguments to parameter lists, testing array algorithms with negative values, and understanding where local variables can be accessed.</p>
        <div class="sprint-button-row">
          <a class="sprint-button secondary" href="https://github.com/S5CY/s5cy_student/issues/10">Read my MCQ analysis</a>
        </div>
      </div>
    </div>
  </section>

  <section class="sprint-section">
    <h2>Project evidence</h2>
    <p class="sprint-section-intro">The links below show the planning, implementation, testing, revisions, and reflection behind the finished work.</p>
    <div class="sprint-evidence">
      <a href="https://github.com/S5CY/s5cy_student/issues/8">Game review and feedback</a>
      <a href="https://github.com/the7blueprints/blueprints_pages/issues/1">Setup problem investigation</a>
      <a href="https://github.com/the7blueprints/blueprints_pages/issues/5">Agent planning</a>
      <a href="https://github.com/the7blueprints/blueprints_lessons/commit/f3b7a9db5">Team lesson repairs</a>
      <a href="https://github.com/the7blueprints/blueprints_lessons/commit/6ce993773">Final lesson revisions</a>
      <a href="https://github.com/the7blueprints/blueprints_pages/commit/3d8c12e61">Toolchain integration</a>
      <a href="https://github.com/the7blueprints/blueprints_pages/commit/c51d35d107">Voice feature and tests</a>
      <a href="https://github.com/S5CY/s5cy_student/issues/9">Self-evaluation</a>
    </div>
  </section>

  <section class="sprint-closing">
    <h2>Reflection</h2>
    <p>I am most proud that my work became useful to other students. The delivery game makes review more engaging, the setup agent turns failures into understandable next steps, and the lesson repairs helped the team's Unit 4 collection work as one complete resource. The biggest change in my work this trimester was learning to keep improving a project after the first version. Testing, feedback, and revision were what turned my ideas into stronger finished products.</p>
  </section>
</div>
