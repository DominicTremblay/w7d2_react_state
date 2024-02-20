# React State

## Agenda

* What is a component?
* What is React State? 
* Differences between State and Props
* Event Handing
* Lifting State Up
* Wrap up and Q&A

## What is a component?

* A UI is broken down into independant components
* A component is a function that returns a React element, expressed in JSX, to render a piece of the UI
* Each component manages its own state and logic and can contains other components
* Each component is reusable

## The State in jQuery

* In jQuery, the state of the application is often stored directly in the Document Object Model (DOM)
* For example, in our jQuery application, we store the like button state by adding or removing a class from the button element in the DOM. 
* This approach can work for simpler applications, it can become difficult to manage as the application grows in complexity. This is one of the reasons why modern front-end libraries like React moved towards a more centralized state management approach.

## What is React State? 

* Allows components to `react` to data that can change over time through user interactions, API calls, etc
* When the state of a component changes, React knows how to re-render that component to reflect the changes on the UI
* Allows for complex UI with a lot of interactions to be highly responsive in real-time
* The state is the single source of truth and makes managing the state predictable and makes it easier to manage complex applications and debug issues
* We have a global state that covers the entire app when the state data needs to be shared accross components
* We can have local state if that state is own by the compoent and doesn't need to be shared accross other components (ex. form inputs)

## Differences between State and Props

### Props

* Props are used to pass data from parent to child components. They are read-only, which means that a component can only receive props from its parent and cannot modify them.
* Props are immutable from the perspective of the component that receives them, any attempt to change props directly will result in an error. If you need to modify data based on props, you can use state to manage changes internally.
*  Props can be passed down through multiple levels of components, enabling deep component trees to share data effectively.

### State

* State is used to track data changes in a component. It is mutable, meaning that the component can change its own state using a setter function provided by the useState hook or class component methods.
* State is mutable, allowing components to create interactive and dynamic interfaces by responding to user inputs, server responses, and other events.
* State is typically confined to the component it is declared in. To share stateful information across components, you might lift state up to common ancestors.

## Demo

* [jQuery](./demo/jQuery/)
* [React](./demo/react/)
