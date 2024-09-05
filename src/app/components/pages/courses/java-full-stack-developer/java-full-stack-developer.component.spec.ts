import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaFullStackDeveloperComponent } from './java-full-stack-developer.component';

describe('JavaFullStackDeveloperComponent', () => {
  let component: JavaFullStackDeveloperComponent;
  let fixture: ComponentFixture<JavaFullStackDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaFullStackDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaFullStackDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
