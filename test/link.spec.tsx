import expect from 'expect';
import React from 'react';
import { Link } from '../src/link';
import { renderTestElement } from './utils';

describe('link component', () => {
    it('returns correct pathname once path is empty', () => {
        const testContainer = renderTestElement(
            <Link id="test-link" to="/kevin">
                CLICK ME
            </Link>
        );

        const linkElement = testContainer.querySelector('#test-link') as HTMLAnchorElement | undefined;

        if (!linkElement) {
            throw new Error('cannot find link element');
        }

        linkElement.click();

        expect(location.pathname).toBe('/kevin');
    });
});
