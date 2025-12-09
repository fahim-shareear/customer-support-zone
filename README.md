1. What is JSX and Why is it used?
Answer: Javascript XML is the full ofrm of JSX. It is used for designing the UI easily, how it will look in the UI of the website.
        It is a syntax extendion for writing HTML in javascript. JSX let's us right HTML like code within js. It makes us write UI code eaily and it let's us see
        what the UI will look like within the code.

2. What is the difference between State and Props?

Answer: State:
        State is componants internal data.
        It can change componant on it's own.
        It is used for keeping dynamic data.
        If state changes then the componant re-renders itselt to show the change.
        here const [state, setState] = useState(); is the example for State.

        Prop:
        Prop is used for sending data to the child componants.
        Parent componants are the owners of props.
        It's state can't be changed. Only parent componant can change the state.
        It only used for passing data to the child componant.
        If porps changes then it can re-render.

3. What is the useState hook, and how does it work?
Answer: React's useState[] hook is an special function that let's us manage and create state and control it's outcome.
        It is the most used hook from react. useState creates and returns two things:
            state variable & 
            setter function.
        useState creates an state for componant and let's us set an default value for that componants state. Based on this 
        it changes the states of the componants. When the state changes the componant re-renders itself everytime.


4. How can you share state between components in React?
Answer: We can share state using react is various ways like: 
        1. Lift up state.
        2. Props Drilling.
        3. Context API.
        4. Redux/Zustand &
        5. Custom hooks.


5. How is event handling done in React?
Answer: In React, event handling is the process of responding to user actions—such as clicking a button, typing in an input box, submitting a form, hovering over an element, etc.    React uses a system called Synthetic Events, which works similarly to JavaScript DOM events but ensures cross-browser compatibility.

        React event handling looks similar to HTML, but there are two major differences:

        Event names use camelCase (e.g., onClick, onChange, onSubmit).

        Event handlers are passed as functions, not strings.

        Event handlers are usually defined inside the component and then attached to an element. When the event occurs (like a click), React runs the handler function and updates the component if needed.

     Example:
        function App() {
            function handleClick () {
                console.log("Button Clicked")
            }

            return(
                <button onClick={handleClick}>Click</button>
            );
        }

    React also provides a special event object called SyntheticEvent, which works the same way across all browsers and includes useful information like event.target.value.