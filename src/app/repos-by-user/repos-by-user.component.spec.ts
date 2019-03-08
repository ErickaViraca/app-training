import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposByUserComponent } from './repos-by-user.component';

describe('ReposByUserComponent', () => {
  let component: ReposByUserComponent;
  let fixture: ComponentFixture<ReposByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
