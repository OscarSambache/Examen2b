import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPadreHijoComponent } from './ruta-padre-hijo.component';

describe('RutaPadreHijoComponent', () => {
  let component: RutaPadreHijoComponent;
  let fixture: ComponentFixture<RutaPadreHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPadreHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPadreHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
