* **Instructions:**

  * In the folder slacked out, you should have a React application with 5 components (`Main`, `Adder`, `Imgr`, `Multiplier`, `Randomizer`).

  * Each of the components should respond differently in response to the button clicks taking place from the `Main` parent.

  * `Adder`, `Imgr`, `Multiplier`, and `Randomizer` should each be rendered inside of `Main` and be passed the number of clicks on `Main`'s state.
  
  * `Adder` should display the number of clicks passed to it. 
  
  * `Imgr` should display a new random image from an array of images each time it receives a new click prop.
  
  * `Multiplier` displays the number of clicks passed to it by itself. 
  
  * `Randomizer` displays the number of clicks passed to it multiplied by a random number between 1 and 10. 

  * Hint: You may want to look into the React method: `componentWillReceiveProps`