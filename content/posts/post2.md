---
type: posts
slug: post2
title: Exploring Next.js
description: This is a brief introduction to Next.js. We will go over some of the key concepts and how to create a basic Next.js app.
datePosted: June 18, 2023
author: Tom Swokowski
---

## What is Next.js?

Next.js is a React framework that provides infrastructure and simple development experience for server-rendered React applications.

### A brief history

Next.js was created by Vercel (formerly Zeit), a cloud company for front-end developers and it was released in 2016.

[Read more about Next.js history](https://nextjs.org/)

## Why use Next.js?

- **Automatic Routing**: Any URL is mapped to the filesystem, to files put in the `pages` directory, and you don't need any configuration (i.e., `route.js` file is not needed).
- **Server-side rendering**: You can render your components on the server side before sending the HTML to the client.
- **Static Site Generation (SSG)**: With Next.js, you can pre-render an app into static HTML, which then gets rehydrated into a React app.

## Basic Example of a Next.js App

You can create a new Next.js application using create-next-app, which sets up everything automatically for you. To create a new app, use the following command:

```bash
npx create-next-app@latest
```
