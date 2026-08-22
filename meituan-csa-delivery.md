---
layout: post
title: "美团小鼠 CSA Delivery"
permalink: /csa-delivery/
description: A gamified delivery route through CSA Units 1–4.
hide: true
show_reading_time: false
---

<link rel="stylesheet" href="{{ '/assets/css/meituan-csa.css' | relative_url }}?v=2">

<main id="csa-delivery-game" class="delivery-game" aria-labelledby="game-title">
  <section class="delivery-hero">
    <div class="hero-copy">
      <p class="eyebrow">WELCOME, ROOKIE COURIER</p>
      <h1 id="game-title">美团小鼠<br><span>CSA Delivery</span></h1>
      <p class="hero-text">Deliver Java knowledge across four districts. Finish lessons, earn cheese coins, and defeat each unit quiz.</p>
      <div class="hero-actions">
        <button id="continue-route" class="game-button game-button-primary" type="button">Start delivery</button>
        <button id="how-to-play" class="game-button game-button-secondary" type="button">How to play</button>
      </div>
    </div>
    <div class="hero-mascot-wrap">
      <span class="hero-burst" aria-hidden="true"></span>
      <img class="hero-mascot" src="{{ '/images/meituan-csa/courier-food.png' | relative_url }}" alt="Yellow courier mascot delivering food">
      <div class="floating-badge">⚡ +25 XP</div>
    </div>
  </section>

  <section class="courier-dashboard" aria-label="Courier progress">
    <div class="courier-profile">
      <img src="{{ '/images/meituan-csa/courier-helmet.png' | relative_url }}" alt="Yellow mascot wearing a delivery helmet">
      <div><small>COURIER</small><strong>Meryl</strong><span id="rank-label">Rookie Rider</span></div>
    </div>
    <div class="stat"><span>LEVEL</span><strong id="level-value">1</strong></div>
    <div class="stat"><span>XP</span><strong id="xp-value">0</strong></div>
    <div class="stat"><span>CHEESE</span><strong>🧀 <b id="coin-value">0</b></strong></div>
    <div class="progress-stat">
      <div><span>OVERALL ROUTE</span><strong id="overall-percent">0%</strong></div>
      <div class="progress-track"><span id="overall-bar"></span></div>
    </div>
  </section>

  <section class="mission-panel">
    <div>
      <p class="eyebrow">TODAY'S DELIVERY MISSION</p>
      <h2 id="mission-title">Begin your first Java delivery</h2>
      <p id="mission-copy">Choose any district below. Each lesson opens the original class material in a new tab.</p>
    </div>
    <div class="mission-reward"><span>REWARD</span><strong>25 XP + 5 🧀</strong></div>
  </section>

  <section class="route-section" aria-labelledby="route-title">
    <div class="section-heading">
      <div><p class="eyebrow">CITY MAP</p><h2 id="route-title">Choose a delivery district</h2></div>
      <div class="filter-row" role="group" aria-label="Filter lessons">
        <button class="filter-button active" data-filter="all" type="button">All</button>
        <button class="filter-button" data-filter="available" type="button">To deliver</button>
        <button class="filter-button" data-filter="completed" type="button">Delivered</button>
      </div>
    </div>
    <div id="unit-grid" class="unit-grid"></div>
  </section>

  <section class="achievements-section" aria-labelledby="achievement-title">
    <div class="achievement-mascot">
      <img id="mood-mascot" src="{{ '/images/meituan-csa/sleepy.png' | relative_url }}" alt="Sleepy yellow mascot waiting for deliveries">
    </div>
    <div class="achievement-copy">
      <p class="eyebrow">COURIER CABINET</p>
      <h2 id="achievement-title">Achievements</h2>
      <div id="achievement-grid" class="achievement-grid"></div>
    </div>
  </section>

  <section class="review-section" aria-labelledby="review-title">
    <img src="{{ '/images/meituan-csa/many-hands.png' | relative_url }}" alt="Yellow mascot with many hands ready to work">
    <div>
      <p class="eyebrow">EXPRESS REVIEW</p>
      <h2 id="review-title">One-minute delivery challenge</h2>
      <p id="question-text">Press “New question” for a quick Unit 1–4 review.</p>
      <div id="answer-buttons" class="answer-buttons"></div>
      <p id="answer-feedback" class="answer-feedback" aria-live="polite"></p>
      <button id="new-question" class="game-button game-button-primary" type="button">New question</button>
    </div>
  </section>

  <p class="source-note">Lesson buttons open the original Open Coding Society CSA pages. Progress is stored only in this browser.</p>
</main>

<dialog id="lesson-dialog" class="game-dialog">
  <button class="dialog-close" type="button" aria-label="Close">×</button>
  <p class="eyebrow">DELIVERY ORDER</p>
  <h2 id="dialog-title">Lesson</h2>
  <p id="dialog-description"></p>
  <div class="dialog-actions">
    <a id="open-lesson" class="game-button game-button-secondary" href="#" target="_blank" rel="noopener">Open lesson ↗</a>
    <button id="complete-lesson" class="game-button game-button-primary" type="button">Mark delivered</button>
  </div>
</dialog>

<dialog id="help-dialog" class="game-dialog">
  <button class="dialog-close" type="button" aria-label="Close">×</button>
  <p class="eyebrow">HOW TO PLAY</p>
  <h2>Learn. Deliver. Level up.</h2>
  <ol>
    <li>Pick one of the four districts.</li>
    <li>Open a delivery to study the original lesson.</li>
    <li>Return here and mark it delivered only after you finish.</li>
    <li>Earn 25 XP and 5 cheese coins for every lesson.</li>
    <li>Use Express Review to test yourself for bonus XP.</li>
  </ol>
</dialog>

<script src="{{ '/assets/js/meituan-csa.js' | relative_url }}?v=2" defer></script>
