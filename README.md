# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Features

- Responsive design for mobile, and desktop users to present page information in the best format for each user type
- Character counter in tweet area to indicate to the user how many characters remaining before the tweet limit is reached. Character counter is 140 characters, it will turn red and display how many characters over the limit the user is.
- Animated error messaging that slides down into view if a user erroneously tries to send an empty tweet, or if the tweet message exceeds the character limit.
- Single Page Application design: a user is kept on the same page throughout the user's activities.
- jQuery response handling: user events such as clicks, mouseover, and form submission is handled via jQuery and updated within the single page application.
- Thoughtful design: design elements and functionality chosen specifically to enhance the user experience through ease of use and thoughtful design.

## Final Product

Desktop version of website, default view of the web app on desktop browsers.
!["Desktop version of website"](https://raw.githubusercontent.com/christopherdegroot/tweeter/master/docs/Desktop.PNG)

Mobile-ready, responsive design. Page automatically re-arranges content of web page when below 1024 pixels, changing the layout to an improved format for mobile users.
!["Mobile Version"](https://raw.githubusercontent.com/christopherdegroot/tweeter/master/docs/Mobile.PNG)

Friendly UX through jQuery and CSS - Character counter (turns red when over the limit!), Tweet container event listeners to add box-shadow when mouse is over an element, and icons change colours.
!["Features"](https://raw.githubusercontent.com/christopherdegroot/tweeter/master/docs/features.png)

Error Handling - Tweets that are too long or empty are flagged for the user - Character counter also helps know how many characters you are at, or over the limit
!["Error Handling - Tweets that are too long or empty are flagged for the user - Character counter also helps know how many characters you are at, or over the limit"](https://raw.githubusercontent.com/christopherdegroot/tweeter/master/docs/ErrorHandling.PNG)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- jQuery 3.6.0 (loaded from CDN)



