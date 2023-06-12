import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404PagesComponent } from './error404-pages.component';

describe('Error404PagesComponent', () => {
  let component: Error404PagesComponent;
  let fixture: ComponentFixture<Error404PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error404PagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error404PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
