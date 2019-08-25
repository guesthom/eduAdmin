import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailandSmsComponent } from './emailand-sms.component';

describe('EmailandSmsComponent', () => {
  let component: EmailandSmsComponent;
  let fixture: ComponentFixture<EmailandSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailandSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailandSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
