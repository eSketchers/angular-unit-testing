import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HelloDirectiveDirective } from '../hello-directive.directive';

import { CustomDirectiveComponent } from './custom-directive.component';

describe('CustomDirectiveComponent', () => {
  let component: CustomDirectiveComponent;
  let fixture: ComponentFixture<CustomDirectiveComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveComponent, HelloDirectiveDirective ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the directive for its change to div', () => {
    component.username = "Saqib";
    let button = debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});

    fixture.detectChanges();
    let div = debugElement.query(By.css('#customDiv'));
    expect(div.nativeElement.innerText).toContain('Hello Saqib');
    expect(div.nativeElement.style.backgroundColor).toBe('green');
  })

  it('should test the directive on mouse events', () => {
    component.username = "Ali";
    let button = debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});

    fixture.detectChanges();
    let div = debugElement.query(By.css('#customDiv'));
    div.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe('orange');
    expect(div.nativeElement.style.fontSize).toBe('28px');
    
    div.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe('green');
    expect(div.nativeElement.style.fontSize).toBe('18px');
  })
});
