# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
Ans:A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
A stateful component is dependent on it's state object and can change it's own state. The component re-renders based on changes to it's state, and may pass down properties of it's state to child components as properties on a props object.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
Ans:ComponentWillMount is essentially the constructor. You can set instance properties that don't affect render, pull data from a store synchronously and setState with it, and other simple side effect free code you need to run when setting up your component.
componentWillUpdate() is called every time a re-render is required, such as when this. setState() is called.

3. Define stateful logic.
Ans:Stateful logic is any code that uses state, but in the case of hooks I would define it as a behaviour created with the use of one or more hooks. It's like a perk that you're adding to a component.

4. What are the three step of creating a successful test? What is done in each phase?
Ans:Your test cases should work in three phases: First, you set some stuff up (“Arrange”) Then, you do something (“Act”) Then, you make sure that what you expected to happen, actually happened.
