# Ecosolution app

This project was build with React.JS and SCSS. The project has mobile (360px-480px) elastic markup, tablet (breakpoint at 768px) and desktop (breakpoint at 1280px).
App uses smooth scroll behavior for better UI. Every page link has alternative text for better accessibility.

## Header section

Contains link to main page (logo link). Also it has burger button to open menu on every view. On tablet and desktop views also available "Get in touch" button, which forward to contact form.

Menu show/hide animation developed with GSAP.

## Main section

Has hero image (loaded in srcset, depending on screen size) and link to company cases sections.

## Code Splitting

Every page section (hero, cases etc.) developed as single file. 
App styled with SCSS, usind splitting code for every section. Most common styles placed in App.scss.

Site is available on <a href="https://olehbrov.github.io/ecosolution/">link</a>