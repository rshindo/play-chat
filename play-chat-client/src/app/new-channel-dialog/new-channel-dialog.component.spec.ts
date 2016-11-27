/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateGroupDialog } from './create-group-dialog.component';

describe('CreateGroupDialog', () => {
  let component: CreateGroupDialog;
  let fixture: ComponentFixture<CreateGroupDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
