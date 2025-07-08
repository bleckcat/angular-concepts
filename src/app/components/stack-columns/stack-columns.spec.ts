import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackColumns } from './stack-columns';

describe('StackColumns', () => {
  let component: StackColumns;
  let fixture: ComponentFixture<StackColumns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackColumns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackColumns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
