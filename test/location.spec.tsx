import expect from 'expect';
import React from 'react';
import { link } from '../src/link';
import { Location } from '../src/location';
import { renderTestElement } from './utils';

describe('location component', () => {
    const initialLocation = window.location;

    afterEach(() => {
        link({ to: initialLocation.href });
    });
    const TestLocationComponent = <Location>{location => <div>{location.pathname}</div>}</Location>;

    it('returns correct pathname once path is empty', () => {
        const HTMLElement = renderTestElement(TestLocationComponent);
        expect(HTMLElement.innerText).toBe(location.pathname);
    });

    it('re-renders with correct path once changing URL via navigate', () => {
        const HTMLElement = renderTestElement(TestLocationComponent);

        expect(HTMLElement.innerText).toBe(location.pathname);

        link({ to: '/plop' });

        expect(HTMLElement.innerText).toBe('/plop');
    });
});
