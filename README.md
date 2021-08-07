# UI template

## Description

- Build a simple user interface for a multi tenancy agent service where clients can use to execute service calls now or scheulde them to be executed later.
- This Service Agent is able to work with Json formatted input and it supports HTTP/HTTPS as messaging protocol
- The user interface has a form where clients can enter their service call parameters and send the request, and it has a page where clients can list all their records and sort them by Name or Status.
- Favorites feature is implemented to allow clients to add records to their own list of Favorites. They can also filter the records to get marked as favorite records only.
- Records Pagination is implemented to allow clients to see specefic page.


### Technology
 -  using Angular 12 , Angular cli , Type Script , Bootstrap , HTML, CSS.


###  How to run the code

Front End Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and angular.

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Make sure you have installed [Angular CLI](https://github.com/angular/angular-cli) already. If not, please install.
5. Run in terminal: ```npm install```
6. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
7. Build to productaion: ng build -prod
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Development server
In order to avoid encountering a CORS browser error run the application with the command:

```
  ng serve
```

This provides a proxy path to the beer API. More information about that here. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Test server
run command
```
  ng test
```

### Thrid parties:-
 - CoreUI Free Angular 2+ Admin Template;- CoreUI is an Open Source Bootstrap Admin Template. But CoreUI is not just another Admin Template. It goes way beyond hitherto admin templates thanks to transparent code and file structure. And if that's not enough, let’s just add that CoreUI consists bunch of unique features and over 1000 high quality icons.
 [CoreUI Free Angular 2+ Admin Template](https://github.com/coreui/coreui-free-angular-admin-template)

 - ngx-progressbar https://github.com/MurhafSousli/ngx-progressbar
 - ngx-toastr https://www.npmjs.com/package/ngx-toastr

### ToDo

Listing here some of the ToDo that i would like to jump to if i had more time:

- Move all URLs to webconfig.json file to enable change all urls in production mode.
- Handle invalid formatted input json and show toast or error message.
- Extend sorting functionality to work on other columns. Currently It's is implemented for the name and status column only.
- Pagination is implemented on client but it's better to move it to the server side.
- Added more unit tests to cover all project.
- Added e2e test so we could test all solution.
