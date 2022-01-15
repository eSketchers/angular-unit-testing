import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHelloDirective]'
})
export class HelloDirectiveDirective implements OnInit {

  @Input('userInfo') username: string = '';
  @HostBinding('style.background-color') backgroundColor: string = '';
  @HostBinding('style.font-size') fontSize: string = '';
  @HostBinding('innerHTML') innerHTML: string = '';

  constructor() { }

  ngOnInit() {
    this.innerHTML = 'Hello ' + this.username;
    this.fontSize = '10px';
    this.backgroundColor = 'green';
  }

  @HostListener('mouseover') onMouseOver() {
    this.fontSize = '28px';
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseout') onMouseOut() {
    this.fontSize = '18px';
    this.backgroundColor = 'green';
  }
}
