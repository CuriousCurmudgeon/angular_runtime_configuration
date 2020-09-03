import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

fetch('/assets/config/environment.json')
  .then(response => response.json())
  .then(config => {
    // We use this syntax to appease Typescript.
    // __env does not exist on window. We're adding it.
    window['__env'] = window['__env'] || {};
    window['__env'].config = config;

    if (config.production) {
      enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });


