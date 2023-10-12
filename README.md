# Tweeter Project 🕊

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Description

Allows users to 'tweet' messages which gets saved in memory in a temp. db (data is wiped on restart).  Calls are made with AJAX and uses jQuery to navigate the DOM for page manipulation.

## Features

* Error handling for empty inputs / long inputs.
* Hides / Shows UI elements, like the toggle to top button and write a tweet button based on user interaction.
* Responsive UI, with different layouts:
  * Desktop 1024+ width.
  * Tablet 768-1023 width.
  * Mobile 767 and under width.


Finished Stretch Goals:

* Deployed and using parts of SCSS framework.
* Toggle to top button gets the user back to the top of the page.
* Compose a new tweet button moves to the tweet text field and focuses it.

Unfinished Stretch Goals:

* Make use of th SCSS framework some more (shared css, utilize more variables, etc).
* Unit testing.


## Branches

* Main - demo ready.

* feature/character-count - counts the amount of characters in the tweet box and gets reflected on the UI.

* feature/main-tweets - shows the tweets that have been posted.

* feature/pretty-error-msg - displays a more pleasing error message for users over a alert box or a console log.

* feature/responsive-ui - additional CSS and media queries to work on 3 types: smartphones, tablets, and desktops.

* feature/stretch-form-toggle - clicking new tweet button moves to the tweet text field and focuses it.

* feature/stretch-toggle-to-top - clicking circle toggle on bottom moves the user back up the page.

* feature/tweet-form - the form that allows users to make tweets via. AJAX.


## Final Product

* These images showcase some of the error handling and responsive layouts of Tweeter.

!["landing page"](https://github.com/robertshum/tinyapp/blob/main/docs/url-page.png)

!["landing page show buttons"](https://github.com/robertshum/tinyapp/blob/main/docs/register-page.png)

!["Error handling 1"](https://github.com/robertshum/tinyapp/blob/main/docs/edit-url-page.png)

!["Error handling 2"](https://github.com/robertshum/tinyapp/blob/main/docs/edit-url-page.png)

!["Smartphone view"](https://github.com/robertshum/tinyapp/blob/main/docs/edit-url-page.png)

!["Tablet view"](https://github.com/robertshum/tinyapp/blob/main/docs/edit-url-page.png)


## Dependencies

- Node.js v12.22.12
- NPM 6.14.16
- Express
- Body parser
- Chance
- md5
- SASS


## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

* Note: to use SASS, `npm run sass-watch` in another terminal.