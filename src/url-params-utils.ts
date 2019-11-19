export function getUrlParams(search: string) {
    const hashes = search.slice(search.indexOf('?') + 1).split('&');
    const params: Record<string, string> = {};
    hashes.map(hash => {
        const [key, val] = hash.split('=');
        if (key) {
            params[key] = decodeURIComponent(val);
        }
    });

    return params;
}

export function stringifyUrlParams(queryParams: Record<string, string>) {
    let search = location.search;

    for (const [queryParamKey, queryParamValue] of Object.entries(queryParams)) {
        const stringifiesQueryParam = `${queryParamKey}=${queryParamValue}`;
        search += search.length === 0 ? '?' + stringifiesQueryParam : `&${stringifiesQueryParam}`;
    }
    return search;
}
