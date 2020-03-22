import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksOfInteresComponent } from './links-of-interes.component';

describe('LinksOfInteresComponent', () => {
  let component: LinksOfInteresComponent;
  let fixture: ComponentFixture<LinksOfInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksOfInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksOfInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
