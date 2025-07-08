import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackCard } from './stack-card';

describe('StackCard', () => {
  let component: StackCard;
  let fixture: ComponentFixture<StackCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
