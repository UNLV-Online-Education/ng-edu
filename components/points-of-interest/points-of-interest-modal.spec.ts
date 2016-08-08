import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UnlvOePoiModalComponent } from './points-of-interest.ts';

describe('Component: UnlvOePoi', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UnlvOePoiModalComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UnlvOePoiModalComponent],
      (component: UnlvOePoiModalComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UnlvOePoiModalComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UnlvOePoiModalComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <unlv-oe-poi-modal></unlv-oe-poi-modal>
  `,
  directives: [UnlvOePoiModalComponent]
})
class UnlvOePoiModalComponentTestController {
}
