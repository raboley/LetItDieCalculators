# Creation Process

## Background

These notes are to chronicle what I do and what I am thinking as I try to create this website. The goal of the webiste it to display the armor and weapon costs for items in let it die and allow users to do what-if analysis on what it would cost to upgrade items from a certain level to another given level. 

## Initial app creation and setup using CLI

Creating a brand new app using the CLI in the mac terminal.

`ng new LetItDie-Calculators`

This command will create all the files needed to start a new project. Next I want it to open the browser when I do npm start so in the [package.json](./package.json)

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

Opens the normal page so that is good. Next I want the boostrap styles since I'm not great at html or css yet.

## Global Bootstrap Styles

Bootstrap can be installed through terminal.

```bash
npm install bootstrap font-awesome
```

The warnings about needing jquery and popper don't matter to us since we just need the style sheets.

These style sheets got downloaded to the node modules folder under the path [~bootstrap/dist/css/bootstrap.min.css](./node_modules/bootstrap/dist/css/bootstrap.min.css) and [~font-awesome/css/font-awesome.min.css](./node_modules/font-awesome/css/font-awesome.min.css) respectively. the .min means they are minimized so they have no spaces or any characters not needed to run successfully. The next step to use these is to import them into our [styles.css](./src/styles.css) file.

```css
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";
```

This file is a global style sheet, so these styles are now available to any template in our application. Next it is about getting started on the first page. 

## Starting the first component

This component is going to show all the equipment, so it should be in it's own folder called equipment. Make sure you are still in the LetItDie-Calculators folder in terminal and then run:

```bash
ng g c equipment
```

This will create a new component using the angular CLI and give us all the files we need to make it work, as well as update the declarations in our [app.module.ts](./src/app/app.module.ts). Next to make sure it is all working I will add the selector created for our equipment component by the cli found in the `@Component` decorator in our [equipment.component.ts](./src/app/equipment/equipment.component.ts) called `app-equipment` to our [app.component.html](./src/app/app.component.html)

```html
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
<app-equipment></app-equipment>
</div>
```

After changing this we should see equipment works below the title! The component is now hooked up and the coding can begin.