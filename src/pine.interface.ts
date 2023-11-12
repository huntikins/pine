export type PineOptions  = {
    head?: PineOptionsMeta[];
}

export interface PineOptionsMeta {
    name: string;
    content?: string;
    type?: 'meta' | 'link';
    rel?: string;
    href?: string;
}