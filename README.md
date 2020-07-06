# Homework-5-third-party-API-s
Boot camp homework number 5

GitHub link: https://github.com/markmckenna37/Homework-5-third-party-API-s
Live GitHub link: https://markmckenna37.github.io/Homework-5-third-party-API-s/

For this homework assignment, we were given a set of starter HTML and CSS to make a daily schedule. This schedule uses the data API Moment.js to pull real time and dates and add them to the HTML. When the user types text into one of the time slots and clicks the save button, that text is then stored locally and can be recalled after refreshing the page.
Also, all of the time slots are color coded to indicate a past, present, or current hour that changes in real time.

First, I created HTML elements for all of the time slots, including an area for the current time text, a text area for the user's plans to be entered, and a button to save the text to local storage, and added the appropriate CSS classes.
Then, using "moment().format("dddd, MMM Do, YYYY"))" with a jQuery target, I stored the current day to an HTML element.
To set the correct color classes I used a parsed integer of the current hour (in military time) and made an if than statement in a for loop, that is checked every .5 seconds with an interval function. if the current hour was greater than the id of the time slot, than it would receive a "past" class, and repeated for the other two classes respectively.
To store the text from the text area in local storage, an event listener was used to check the index number of each button when clicked. That text is then set to local storage with a key name of "text(index number)"
An add text function is also called upon loading the page that pulls all of the text from local storage and adds it to the text area.