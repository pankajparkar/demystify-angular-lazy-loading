import { Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { Observable, timer,EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';

declare var navigator: any;

const getConnectionType = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const type = connection.type || connection.effectiveType;
  return ['4g', 'wifi'].includes(type);
}

@Injectable({
  providedIn: 'root'
})
export class implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const preloadModule = getConnectionType() && route.data && route.data['preload'];
    if (route.data && preloadModule) {
      console.log('Preload Path: ' + route.path + ', delay:' + route.data['delay']);
      const preloadWithDelay = route.data['delay'];
      if (preloadWithDelay) {
        return timer(5000).pipe(
          switchMap(() => load())
        );
      }
      return load();
    } else {
      return EMPTY;
    }
  }
}