import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
 
  constructor() { }

  f(): string {
    var message = "Hello Dear!";
    return message;
  }
}
