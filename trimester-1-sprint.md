---
layout: post
title: "Trimester 1 Sprint — Building, Teaching, and Improving"
permalink: /trimester-1-sprint/
description: A complete timeline of my Trimester 1 work across my portfolio, team tools, interactive lessons, and AP CSA learning.
hide: true
show_reading_time: false
---

# Trimester 1 Sprint

## From learner to contributor

This trimester, I moved from exploring an existing computer science platform to designing my own learning experience, creating AP CSA lessons, repairing team content, and contributing tested setup tools to a shared project. My work appears across my personal portfolio, `blueprints_pages`, and `blueprints_lessons`.

| Impact at a glance | Result |
|---|---:|
| Major milestones documented | **13** |
| Repositories contributed to | **3** |
| Original AP CSA lessons built | **3** |
| Teammates' lessons repaired | **5** |
| Linux-agent implementation files | **3** |
| Practice-exam score | **39/42 (92.9%)** |

## Featured work

### 🛵 MeiTuan Mouse CSA Delivery

I turned Units 1–4 into a delivery game instead of presenting them as a plain list of links. The experience includes four themed districts, lesson checkpoints, multiple-choice review questions, XP, cheese coins, achievements, progress tracking, and a courier dashboard. This project shows that I can combine course content, interface design, JavaScript state, and game mechanics into one usable learning tool.

- [Play MeiTuan Mouse CSA Delivery](https://s5cy.github.io/portfolio/csa-delivery/)
- [View the first major implementation commit](https://github.com/S5CY/portfolio/commit/85e1292)
- [View the visual and interaction update](https://github.com/S5CY/portfolio/commit/35d1b8a)

### 🐧 Linux Setup Agent

I helped turn setup troubleshooting into a guided system that can detect problems and explain what a student should do next. My contribution includes the agent documentation, Python implementation, and automated tests. I also refined the work after feedback and connected it to the Toolchain Trail experience.

- [Agent documentation](https://github.com/the7blueprints/blueprints_pages/blob/main/docs/linux-setup-agent.md)
- [Agent implementation](https://github.com/the7blueprints/blueprints_pages/blob/main/scripts/linux_setup_agent.py)
- [Automated tests](https://github.com/the7blueprints/blueprints_pages/blob/main/scripts/test_linux_setup_agent.py)
- [Initial Linux-agent commit](https://github.com/the7blueprints/blueprints_pages/commit/8838f474e)

### 📚 AP CSA Unit 4 Lessons

I created lessons for **4.6 Using Text Files**, **4.7 Wrapper Classes**, and **4.17 Recursive Searching and Sorting**. I continued improving them after the first release by revising their organization, visuals, explanations, and interactive code runners so they better matched the rubric and were easier for students to use.

- [Lesson 4.6 — Using Text Files](https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_6)
- [Lesson 4.7 — Wrapper Classes](https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_7)
- [Lesson 4.17 — Recursive Searching and Sorting](https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_17)
- [Initial lesson implementation](https://github.com/the7blueprints/blueprints_lessons/commit/4f9121225)
- [Final rubric-focused revisions](https://github.com/the7blueprints/blueprints_lessons/commit/6ce993773)

## Complete trimester timeline

| Date | Milestone | What I did | Evidence and impact |
|---|---|---|---|
| **Aug. 13–14** | Platform game review | Played through the full computer science adventure and documented both strengths and problems. I evaluated controls, saving, analytics, feedback, accessibility, layouts, artwork, and the way the game teaches Markdown, CSS, REST APIs, filtering, pagination, Kanban planning, and GitHub workflows. | [Game review and improvement issue](https://github.com/S5CY/s5cy_student/issues/8) |
| **Aug. 20–22** | Gamified Units 1–4 portfolio | Designed and built the MeiTuan Mouse CSA Delivery experience. I connected four units to a delivery-game theme and added lesson checkpoints, review questions, rewards, progress, achievements, and persistent browser state. | [Live game](https://s5cy.github.io/portfolio/csa-delivery/) · [implementation](https://github.com/S5CY/portfolio/commit/85e1292) · [update](https://github.com/S5CY/portfolio/commit/35d1b8a) |
| **Aug. 26–27** | Setup-check investigation | Investigated why the setup verifier was unreliable. I documented the incorrect shell header, hard-coded repository path, missing environment checks, incomplete Java verification, and the need for actionable PASS/WARN/FAIL guidance. | [Setup-check issue](https://github.com/the7blueprints/blueprints_pages/issues/1) |
| **Aug. 27–28** | Agent planning with Laya and Anishka | Helped plan the pre-agent setup flow so a student can verify Python and minimum machine requirements before trying to start a Python-based helper. We separated the process into a Bash pre-check, virtual-environment setup, dependency installation, and agent-assisted troubleshooting. | [Pre-agent setup issue](https://github.com/the7blueprints/blueprints_pages/issues/5) |
| **Sept. 10** | Linux agent implementation | Completed the main Linux setup-agent work across documentation, the Python agent, and its test suite. The agent was designed to diagnose a student's environment and turn failures into concrete next steps instead of vague error messages. | [Commit](https://github.com/the7blueprints/blueprints_pages/commit/8838f474e) · [documentation](https://github.com/the7blueprints/blueprints_pages/blob/main/docs/linux-setup-agent.md) · [code](https://github.com/the7blueprints/blueprints_pages/blob/main/scripts/linux_setup_agent.py) · [tests](https://github.com/the7blueprints/blueprints_pages/blob/main/scripts/test_linux_setup_agent.py) |
| **Sept. 11** | Sprint 1 self-evaluation | Reflected on onboarding, my development environment, Git/GitHub workflow, team formation, and the way my Linux-agent work improved an existing OCS system. I connected claims to portfolio and team evidence rather than listing tasks without proof. | [Sprint 1 self-evaluation](https://github.com/S5CY/s5cy_student/issues/9) |
| **Sept. 16–17** | Three Unit 4 lessons | Built the first complete versions of lessons 4.6, 4.7, and 4.17. I organized technical explanations, examples, and student-facing practice into published lesson pages. | [4.6](https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_6) · [4.7](https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_7) · [4.17](https://the7blueprints.github.io/blueprints_lessons/csa/unit_04/4_17) · [commit](https://github.com/the7blueprints/blueprints_lessons/commit/4f9121225) |
| **Sept. 17–18** | Team lesson recovery | Repaired lessons 4.1, 4.5, 4.10, 4.13, and 4.14 when broken permalinks and file locations prevented them from appearing correctly. I updated the Unit 4 navigation and corrected the affected lesson files so my teammates' work could be reached. | [Five-lesson permalink fix](https://github.com/the7blueprints/blueprints_lessons/commit/f3b7a9db5) · [4.13 follow-up](https://github.com/the7blueprints/blueprints_lessons/commit/774dcf77d) |
| **Sept. 21–29** | Rubric and code-runner revisions | Revisited my three lessons several times instead of treating the first version as final. I improved the student experience, strengthened content, corrected file and naming problems, and added or refined code-runner interactions to better meet the lesson rubric. | [Sept. 21 improvement](https://github.com/the7blueprints/blueprints_lessons/commit/d18e79dec) · [Sept. 29 revision](https://github.com/the7blueprints/blueprints_lessons/commit/098e9eb36) · [final fix](https://github.com/the7blueprints/blueprints_lessons/commit/6ce993773) |
| **Sept. 30** | Toolchain Trail development | Worked on the final Toolchain Trail station and its supporting assessment experience. This connected environment verification to a game level instead of leaving setup as a separate checklist. | [Play Toolchain Trail](https://the7blueprints.github.io/blueprints_pages/cs-pathway/toolchain-trail) · [Assessment Observatory commit](https://github.com/the7blueprints/blueprints_pages/commit/10c657f8a) |
| **Oct. 4** | Toolchain integration and feedback fixes | Integrated setup agents and station verification into the CS Pathway game. I worked across JavaScript levels, system-setup reports, styles, Python setup agents, documentation, and automated tests, then fixed interaction overlap and incorporated teammate feedback. | [Main integration](https://github.com/the7blueprints/blueprints_pages/commit/3d8c12e61) · [station verification fix](https://github.com/the7blueprints/blueprints_pages/commit/09ec4cd9e) · [feedback fixes](https://github.com/the7blueprints/blueprints_pages/commit/2d518176e) |
| **Oct. 8** | Voice, language, and pitch features | Expanded the game dialogue system with voice settings, language options, and pitch changes. I also added automated tests so the playful “goofy voice” feature had technical verification behind it. | [Voice feature commit](https://github.com/the7blueprints/blueprints_pages/commit/c51d35d107) · [Toolchain Trail](https://the7blueprints.github.io/blueprints_pages/cs-pathway/toolchain-trail) |
| **Oct. 13** | College Board MCQ analysis | Completed Practice Exam 1 with **39/42 (92.9%)** and wrote a detailed correction for every missed question. I identified patterns involving constructor matching, negative-array edge cases, and variable scope, then connected each error to a specific College Board topic and skill. | [Complete MCQ analysis](https://github.com/S5CY/s5cy_student/issues/10) |

## Technical growth

### Product and interface design

- Converted course navigation into an original game loop with districts, missions, rewards, achievements, and progress.
- Designed for a clear student experience instead of only making features technically function.
- Used feedback to revise layout, interactions, and the final Toolchain Trail station.

### Programming and testing

- Worked with JavaScript game levels, dialogue systems, browser state, input handling, and UI feedback.
- Built a Python troubleshooting agent and supported it with automated tests and documentation.
- Used tests to verify Linux setup behavior, station verification, system reports, and voice settings.

### AP CSA content knowledge

- Created student-facing explanations and practice for text files, wrapper classes, recursion, searching, and sorting.
- Improved lessons through multiple revision cycles and interactive code runners.
- Used MCQ corrections to target constructors, algorithm edge cases, and scope instead of only recording a score.

### Collaboration and project workflow

- Planned setup-agent architecture with teammates before implementation.
- Repaired five teammates' lessons so the shared Unit 4 collection worked as a complete product.
- Used GitHub issues for investigation, acceptance criteria, reflection, and evidence; used commits to document implementation and iteration.

## What I am most proud of

I am most proud that my work became useful to other students. The MeiTuan Mouse portfolio makes review more engaging, the Linux setup agent turns confusing failures into next steps, and the lesson repairs helped the team's Unit 4 work appear correctly. I also learned to keep revising after something first “works”: my strongest results came from testing, responding to feedback, and improving the same feature over multiple commits.

## Next steps

- Continue testing the setup agent on different operating systems and failure cases.
- Add more accessible controls and clearer onboarding to game experiences.
- Use the MCQ analysis to practice constructor signatures, array edge cases, and scope.
- Keep lesson pages current as College Board content and class requirements develop.

## Repository links

- [Personal portfolio repository](https://github.com/S5CY/portfolio)
- [Student evidence and reflection issues](https://github.com/S5CY/s5cy_student/issues)
- [Blueprints Pages team repository](https://github.com/the7blueprints/blueprints_pages)
- [Blueprints Lessons team repository](https://github.com/the7blueprints/blueprints_lessons)
