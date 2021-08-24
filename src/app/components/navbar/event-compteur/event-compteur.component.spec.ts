import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCompteurComponent } from './event-compteur.component';

describe('EventCompteurComponent', () => {
  let component: EventCompteurComponent;
  let fixture: ComponentFixture<EventCompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCompteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
