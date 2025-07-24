import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCheckList } from './password-check-list';

describe('PasswordCheckList', () => {
  let component: PasswordCheckList;
  let fixture: ComponentFixture<PasswordCheckList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordCheckList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordCheckList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
