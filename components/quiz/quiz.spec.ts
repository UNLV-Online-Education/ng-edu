/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { Quiz } from './quiz';

describe('Component: Quiz', () => {
  it('should create an instance', () => {
    let component = new Quiz();
    expect(component).toBeTruthy();
  });
});
