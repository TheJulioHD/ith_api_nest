import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInventariosComponent } from './navbar-inventarios.component';

describe('NavbarInventariosComponent', () => {
  let component: NavbarInventariosComponent;
  let fixture: ComponentFixture<NavbarInventariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInventariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarInventariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
