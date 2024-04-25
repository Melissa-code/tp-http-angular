# TpHttpAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

See the web site : [http_project](https://tp-http-angular.vercel.app/)  



## Table of contents

1.  [Prerequisites](#Prerequisites)
2.  [Installation](#Installation)
3.  [Run](#Run)
4.  [Code scaffolding](#Code-scaffolding)
5.  [Further help](#Further-help)
6.  [Deploying](#Deploying)
7.  [Build with](#Build-with)
8.  [Author](#Author)
9.  [Licence](#Licence)



## Prerequisites

- Node.js and npm (node.js version 18.18.0, npm version version 9.8.1) [Node.js](https://nodejs.org/en/download)

- Angular CLI (version 9.8.1) [Angular CLI](https://github.com/angular/angular-cli)



## Installation

1. Download the zip or clone the project in local :

`git clone https://github.com/Melissa-code/tp-http-angular.git`

2. Move into the directory : 

`cd /path/to/the/file/tp-http-angular`

3. Open the project with a code editor, for instance Visual Studio Code 

4. Install the npm dependencies :

`npm install`


### If you prefer starting a new project : 

1. `ng new domotique --no-strict --standalone=false` (-> select : CSS & -> SSG select : no)

2. Install Bootstrap 3 : `npm install --save bootstrap@3`

3. Copy the path in node_modules->bootstrap->dist->css->bootstrap.min.css

4. Paste it in the angular.json file : 

```line 37: 
    "styles": [
		"node_modules/bootstrap/dist/css/bootstrap.min.css",
              	"src/styles.css"
            ],
```

5. Stop and restart the server 



## Run 

1. Start the local web server and the browser : 

Run `ng serve --open` for a dev server. 

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


2. Stop it :

Press both `ctrl + C`



## Code scaffolding

Run `ng generate component component-name` to generate a new component, for the project :

- `ng generate component header`
- `ng generate component footer`
- `ng generate component article`
- `ng generate component hour`

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- `ng generate service hour`



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Deploying 

- Create an account on Vercel [Vercel](https://vercel.com/) or login with GitHub

- Import your repository to Vercel dashboard 

- Deploy the web site 



## Build with 

### Languages & frameworks 

- Angular [Angular documentation](https://angular.io/)

- Angular CLI [Angular CLI](https://angular.io/cli)

- Bootstrap 3 [Bootstrap](https://getbootstrap.com/docs/3.4/)

- Git [Git documentation](https://git-scm.com/docs/git)


### Tools 

- GitHub [GitHub](https://github.com/)

- Plugin for Visual Sudio Code : Angular Language Service

- Vercel  [Vercel](https://vercel.com/)


### IDE 

- Visual Studio Code [VSCode](https://code.visualstudio.com/)



## Author

Melissa-code



## Licence

MIT 
