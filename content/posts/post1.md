---
type: posts
slug: post1
title: Introduction to React!
description: This is a brief introduction to React. We will go over some of the key concepts and how to create a basic React component.
datePosted: June 17, 2023
author: Tom Swokowski
---

## What is React?

React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.

### A brief history

React was first created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS". He was influenced by XHP, a PHP component library for HTML. React was first deployed on Facebook's News Feed in 2011 and on Instagram.com in 2012.

[Read more about React history](https://reactjs.org/)

## Why use React?

- **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Learn Once, Write Anywhere**: React does not require you to use a particular technology stack, so you can develop new features in React without rewriting existing code.

> **Note:** React is often used for building single page applications and mobile applications.

## Basic Example of a React Component

Here's a basic example of a React component:

```jsx
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```

This is a simple React component called `Welcome` that takes a `name` as a prop and displays a message.

## Key Concepts in React

Here's a list of some key concepts in React:

1. **Components**: React code is made of entities called components. Components are JavaScript classes or functions that optionally accept inputs i.e. properties(props) and return a React element that describes how a section of the UI should appear.

2. **JSX**: It is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like.

3. **Props and state**: They are both plain JavaScript objects. While both of them hold information that influences the output of render, they are different in one important way: props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

4. **Lifecycle methods**: Lifecycle methods are special methods that automatically get called as your component gets rendered and updated.

![React Logo](https://placehold.co/100x100)

React allows you to write your components in JavaScript using a syntax extension called JSX. This makes your code more readable and writeable.
