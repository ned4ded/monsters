## Used
- ionic [framework](https://ionicframework.com/docs/), which contains:
  - Angular2+ core elements;
  - Cordova wrapper;
  - Webpack module bundler;
-  [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) for JS;
- SCSS for styles;

## Instalation
1. Install [npm](https://www.npmjs.com/) and node LTS;
2. Run ```$ npm install -g ionic cordva ```;
3. Download this repo.
4. Go to ```$ cd repo-path/```;
5. Run ```$ npm i```;
5. For serving use ionic cli ```$ ionic serve``` in project folder;

You could check last version of compiled project here: https://ned4ded.github.io/monsters/www/index.html;

## Project structure
``` bash
.
├── resources # Cordova resources;
├── src # Main ionic/angular folder;
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.html
│   │   ├── app.module.ts # Root app module
│   │   ├── app.scss # CSS for the whole app;
│   │   ├── main.ts
│   │   └── model # Data model, contains all entities;
│   │       ├── model.module.ts
│   │       ├── monster.model.ts
│   │       ├── monster.repository.ts
│   │       └── static.datasource.ts # static src for storing in-app data;
│   ├── pages # Pages, which used as components
│   │   ├── game
│   │   │   ├── game.html
│   │   │   ├── game.scss
│   │   │   └── game.ts
│   │   ├── home
│   │   │   ├── home.html
│   │   │   ├── home.scss
│   │   │   └── home.ts
│   │   └── select-char
│   │       ├── select-char.html
│   │       ├── select-char.scss
│   │       └── select-char.ts
│   ├── theme
│   |   └── variables.scss
│   ├── assets
│   │   ├── icon
│   │   │   └── favicon.ico
│   │   └── imgs
│   │       └── logo.png
│   ├── index.html
│   ├── manifest.json
│   └── service-worker.js
├── www # Compiled files
├── ...
└── README.md
```
