import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerComponent } from './main-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MainContainerComponent', () => {
    let component: MainContainerComponent;
    let fixture: ComponentFixture<MainContainerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MainContainerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        });

        fixture = TestBed.createComponent(MainContainerComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
