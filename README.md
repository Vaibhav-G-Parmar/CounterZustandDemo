# Why use Zustand?

- In React, the state is local to the component that created it
- Passing state through props work really well in the small applications, but never in large ones
- React has a native solution for props drilling, called ContextAPI through useContext(), another hook from React. But this requires wrapping entire app or some part of it in a provider which can lead to some performance problems, which does not scale really well.
- The real solution to Props Drilling is State Management, and that’s what Zustand Is.
- **Zustand is a library that allows you to have proper state management in React application. And Specifically it allows you to have global state in your app.**
- Global state means state which is dynamic and can be changed but not specifically defined inside a component that is changing it.

### Store

- Zustand uses store, place where state and any function that updates that state is stored.
- React can access the store, can access the values in the state, can access the functions that updates the state

### Important concept

- ***useCounterStore is a custom hook. In Zustand when you create a store, it is actually a custom hook, that you can use in a React Component without having to wrap anything in the provider or pass it through props.***

# Benefits of using Zustand

- allows you to have scalable state management structures in your app with very little boiler plate code
- another benefit of Zustand, we are using functions to update the state in one component and then we are accessing the state variable that is getting updated in another component. You can access and update state from any component and this allows you to Scale, and you can get over the limit of a state being local to only one component!
