import { Component, OnInit } from '@angular/core';

@Component({
  selector: '@namespace/auth',
  template: `
    <p>
      auth works!
    </p>
  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}