import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NativeFeaturesTestPage } from './native-features-test.page';

describe('NativeFeaturesTestPage', () => {
  let component: NativeFeaturesTestPage;
  let fixture: ComponentFixture<NativeFeaturesTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeFeaturesTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
