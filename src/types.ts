export type QueryParam = string | number | Array<string | number> | null | undefined;

export interface QueryParams extends Record<string, QueryParam> {
    type: string;
}
