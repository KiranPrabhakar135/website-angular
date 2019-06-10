import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenterComponent } from './listenter.component';

describe('ListenterComponent', () => {
  let component: ListenterComponent;
  let fixture: ComponentFixture<ListenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
