import expect from 'expect';
import React from 'react';
import { Location, useLocation } from '../src/location';
import { renderTestElement } from './utils';

describe('location component', () => {
	const TestLocationComponent = <Location render={location => <div>{location.pathname}</div>} />;

	it('returns correct pathname once path is empty', () => {
		const HTMLElement = renderTestElement(TestLocationComponent);

		expect(HTMLElement.innerText).toBe('/');
	});

	it('returns correct pathanme once path is provided', () => {
		window.location.href = `${window.location.hostname}/plop`;

		const HTMLElement = renderTestElement(TestLocationComponent);

		expect(HTMLElement.innerText).toBe('/plop');
	});

	it.skip('re-renders with correct path once changing URL via navigate', () => {
		const HTMLElement = renderTestElement(TestLocationComponent);

		expect(HTMLElement.innerText).toBe('/');

		// navigate('/plop');

		expect(HTMLElement.innerText).toBe('/plop');
	});
});

describe('uselocation hook', () => {
	const TestUseLocationHook = <div>{useLocation().pathname}</div>;

	it('returns correct pathname once path is empty', () => {
		const HTMLElement = renderTestElement(TestUseLocationHook);

		expect(HTMLElement.innerText).toBe('/');
	});

	it('returns correct pathanme once path is provided', () => {
		window.location.href = `${window.location.hostname}/plop`;

		const HTMLElement = renderTestElement(TestUseLocationHook);

		expect(HTMLElement.innerText).toBe('/plop');
	});

	it.skip('re-renders with correct path once changing URL via navigate', () => {
		const HTMLElement = renderTestElement(TestUseLocationHook);

		expect(HTMLElement.innerText).toBe('/');

		// navigate('/plop');

		expect(HTMLElement.innerText).toBe('/plop');
	});
});
