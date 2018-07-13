import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaComponenteComponent } from './casa-componente.component';

describe('CasaComponenteComponent', () => {
  let component: CasaComponenteComponent;
  let fixture: ComponentFixture<CasaComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
