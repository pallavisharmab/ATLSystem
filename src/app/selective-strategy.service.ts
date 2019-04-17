import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectiveStrategy implements PreloadingStrategy {

  preload(route: Route, load: any): Observable<any> {

    return route.data && route.data.preload ? load() : of(null);
  //   if (route.data && route.data.preload) {
  //     return load();
  //   }
  //   return of(null);
   }
}
