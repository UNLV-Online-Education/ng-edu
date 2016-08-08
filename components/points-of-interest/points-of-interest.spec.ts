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
import { UnlvOePoiComponent } from './unlv-oe-poi.component';

describe('Component: UnlvOePoi', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UnlvOePoiComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UnlvOePoiComponent],
      (component: UnlvOePoiComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UnlvOePoiComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UnlvOePoiComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-unlv-oe-poi></app-unlv-oe-poi>
  `,
  directives: [UnlvOePoiComponent]
})
class UnlvOePoiComponentTestController {
}

