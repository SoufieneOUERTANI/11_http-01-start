# 11Http01Start

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## To start the project  

### FireBase RealTime DatBase
---
Account : soufiene.ouertani@gmail.com
Database : ng-complete-guide
url : https://ng-complete-guide-e9292-default-rtdb.europe-west1.firebasedatabase.app/

### troubleshooting

---

All the course code will only work if you are NOT using "strict mode" see the "First App" lecture in this module. Strict mode forces you to write more verbose code in some places (especially when it comes to class properties). If you enabled it by accident, you can also disable it by setting strict: false in your tsconfig.json file.

---

Due to dependency version mismatches, running the attachments might fail though - in that case, you can try the following:

1) Create a new project via ng new my-project --strict false (the --strict false part is important!)

2) Copy the content of the ZIP attachment src/app folder into the newly created project src/app folder.

3) Run your project (my-project) via ng serve

If you try to directly run my ZIP attachments, you must run npm install first.

If you're getting errors when running npm install, you can often solve them by running npm install --legacy-peer-deps instead of npm install

## 259. Sending a POST Request : HttpClientModule, HttpClient, post, subscribe

    imports: [BrowserModule, FormsModule, HttpClientModule],

    constructor(private http : HttpClient) {}

    this.http.post('https://ng-complete-guide-e9292-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
    // The post request is sent only when you subscribe
    .subscribe(responseData => console.log(responseData))
    ;

## 260. GETting Data : HttpClientModule, HttpClient, get, subscribe

## 261. Using RxJS Operators to Transform Response Data :

    .pipe(map(responseData => {
      const postsArray = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push(
            {...responseData[key], id:key}  
          )
        }
      }
      return postsArray;
    }))

## 262. Using Types with the HttpClient

## 263. Outputting Posts :

    loadedPosts : Post[] = [];

    .subscribe(
      (posts) => this.loadedPosts = posts
    );

    <ul class="list-group" *ngIf="loadedPosts.length >=1">
      <li class="list-group-item" *ngFor="let post of loadedPosts">
        <h3>{{post.title}}</h3>
        <p>{{post.content}}</p>
      </li>
    </ul>

## 264. Showing a Loading Indicator