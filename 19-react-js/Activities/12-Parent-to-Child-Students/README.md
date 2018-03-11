* **Instructions:**

  * With partners, create a simple React application composed of a parent and three child components. Don't worry about styling at first, just try to implement the basic functionality.

  * Inside of the `Parent` component you will create code that handles a button click. Whenever the button click is clicked, a counter will increase by one and be on the page. This counter will constantly communicate the new count to the children components. The `Parent` component should also have a button for resetting the click count to zero.

  * The `Child` and `GrandChild` components will then utilize the click counter and each performs a different mathematical operation with the counter. `Parent` should pass double its clicks to `Child`, and `Child` should pass four times its clicks to `GrandChild`.

  * Note: You will need to do some research to solve this. Look into answering the following questions:

    * How can I handle a button click event in React? (Hint: `onClick`)

    * How can I change the state of a component in React? (Hint: `setState`)

  * Note: This may be challenging! We haven't covered everything just yet. Push yourself to consult Stack Overflow and React Documentation.