# Git Tracker Frontend

## Table of Content

- [Git Tracker Frontend](#git-tracker-frontend)
  - [Table of Content](#table-of-content)
  - [Description](#description)
  - [Technologies](#technologies)
  - [Requirements](#requirements)
  - [Installation](#installation)

## Description

This the frontend app for the Git Tracker project. It is a React app that connect to the backend to track the progress of this current project the backend repository. This app is deployed on Vercel [here](https://git-tracker-front.vercel.app/). Can you check the design on [Figma](https://www.figma.com/file/ljlFY3kYZwmc07nRyJ0zj9/Git-Tracker?type=design&node-id=10%3A78&mode=design&t=rpGCBm1Gl3agVxJO-1).

## Technologies

The stack of technologies used in this project are:

- React as a JavaScript library for building user interfaces
- TypeScript as a programming language
- Tailwind CSS as a CSS framework
- React Query as a data fetching library
- Vercel as a cloud platform to deploy the app
- Figma as a design tool

## Requirements

- Node.js 18.0.0 or higher
- npm 7.0.0 or higher

## Installation

1. Clone the repository from GitHub.
2. Install the dependencies by running `npm install`.
3. Run the backend by following the instructions on the [backend repository](https://github.com/jcamiloguz/git-tracker-back)
4. Create the .env.local file with the API of the backend, you can use the .env.example file as a template and the backend usually runs on port 8080.

   ```
   VITE_API_URL=http://localhost:8080
   ```

5. Run the app by running `npm run dev`.
