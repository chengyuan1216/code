declare module '*!logger' {
    export enum EntryType {Error, Warning, Info}

    export interface Entry {
        message: string,
        type?: EntryType
    }

    export default function logger(entry: Entry) : void;
}
