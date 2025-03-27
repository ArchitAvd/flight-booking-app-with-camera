import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FlightAppModule } from './app/flight.app.module';

platformBrowserDynamic()
  .bootstrapModule(FlightAppModule)
  .catch((err) => console.log(err));
