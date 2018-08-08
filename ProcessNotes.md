# Creation Process

## Background

These notes are to chronicle what I do and what I am thinking as I try to create this website. The goal of the webiste it to display the armor and weapon costs for items in let it die and allow users to do what-if analysis on what it would cost to upgrade items from a certain level to another given level. 

## Starting

Creating a brand new app using the CLI in the mac terminal.

`ng new LetItDie-Calculators`

This command will create all the files needed to start a new project. Next I want it to open the browser when I do npm start so in the [package.json](./LetItDie-Calculators/package.json) 

```json
{
  "name": "apm",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve -o",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
```

Then I will test to make sure it works.

```bash
cd LetItDie-Calculators
npm start
```