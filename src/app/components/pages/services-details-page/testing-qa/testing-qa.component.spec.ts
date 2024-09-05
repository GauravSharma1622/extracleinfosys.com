import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingQAComponent } from './testing-qa.component';

describe('TestingQAComponent', () => {
  let component: TestingQAComponent;
  let fixture: ComponentFixture<TestingQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingQAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
