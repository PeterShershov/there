import React, { AnchorHTMLAttributes, memo } from 'react';
import { historyController } from './history-controller';
import { getUrlParams, stringifyUrlParams } from './url-params-utils';

export interface LinkOptions {
    to: string;
    queryParams?: Record<string, string>;
    replace?: boolean;
    replaceQueryParams?: boolean;
}

export interface LinkProps extends LinkOptions, AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = memo<LinkProps>(
    ({ queryParams, replaceQueryParams = false, replace = false, to, children, ...props }) => {
        const newQueryParams = stringifyUrlParams(
            replaceQueryParams && queryParams ? queryParams : { ...getUrlParams(location.search), ...queryParams }
        );
        const handleLinkClick = () => {
            if (replace) {
                historyController.replace(to + newQueryParams);
            } else {
                historyController.push(to + newQueryParams);
            }
        };
        return (
            <a onClick={handleLinkClick} {...props}>
                {children}
            </a>
        );
    }
);

export function link({ queryParams, replaceQueryParams = false, replace = false, to }: LinkOptions) {
    const newQueryParams = stringifyUrlParams(
        replaceQueryParams && queryParams ? queryParams : { ...getUrlParams(location.search), ...queryParams }
    );

    if (replace) {
        historyController.replace(to + newQueryParams);
    } else {
        historyController.push(to + newQueryParams);
    }
}
