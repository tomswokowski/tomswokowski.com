---
slug: post1
title: Introduction to React
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

- **Declarative**: React makes it painless to create interactive UIs.
- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Learn Once, Write Anywhere**: Use React to build new features without rewriting existing code.

## Basic Example of a React Component

Here's a basic example of a React component:

    import React from 'react';

    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

    export default Welcome;

This is a simple React component called `Welcome` that takes a `name` as a prop and displays a message.

## Key Concepts in React

Here's a list of some key concepts in React:

1. Components
2. JSX
3. Props and state
4. Lifecycle methods

![React Logo](https://placehold.co/100x100)

React allows you to write your components in JavaScript using a syntax extension called JSX.
