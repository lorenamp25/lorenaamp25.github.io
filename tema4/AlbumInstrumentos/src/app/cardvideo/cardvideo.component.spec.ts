import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardvideoComponent } from './cardvideo.component';

describe('CardvideoComponent', () => {
  let component: CardvideoComponent;
  let fixture: ComponentFixture<CardvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardvideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
