# RecipeBookApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Recipe Book Firebase URL 

https://ng-recipe-book-udemi.firebaseio.com/


## Notes on Ahead of Time Compilation
Complilation Typescript to JS is performed by CLI and not related to angular. What Angular does it parse and compiles HTML template files to java script - it has to do it to make everything work. In theory we can type JS in HTML templates by ourselves but that is why Angular is used for that we don't need to do it. Ang does it because of performance - it is faster to access JS code then a DOM in the browser.
To Execute AOT compilation we need to execute command ng build --prod --aot
It will save a lot data from coming into browser as compiler would be skipped for aot compilation (vendor.js - includes angular JIT compiler and wights 3-6 MB) We still will supply vendor file but it is going to be much smaller.  

## Note On Deployment to Web Server
Each time we put url in browser bar intially it sends request to web server and web server usually know nothing on routing in angular app and as result will throw not found error page. We need that web server each time returns index.html instead of 404 not found so angular app can step in and route to proper page or show not found page using angular htmls not web server.

## Nots on Redux approach
Nothing wrong with way to handle state through services, subjects, eventemitters but in huge application it is getting hard to keep track on where which state is managed. So we can use redux approach - it is just pattern and there is some hand implementations for angular.
npm install --save @ngrx/store to install ngrx - looks like implementation of this approach

Useful Resources & Links
Official Github Repo with Documentation: https://github.com/ngrx/platform

Angular & NgRx Tutorial: https://blog.nrwl.io/using-ngrx-4-to-manage-state-in-angular-applications-64e7a1f84b7b

NgRx Patterns & Techniques: https://blog.nrwl.io/ngrx-patterns-and-techniques-f46126e2b1e5

