import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveNewsFormComponent } from './reactive-news-form.component';

describe('ReactiveNewsFormComponent', () => {
  let component: ReactiveNewsFormComponent;
  let fixture: ComponentFixture<ReactiveNewsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveNewsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveNewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
