export enum EntryType {Error, Warning, Info}

export interface Entry {
    message: string,
    type?: EntryType
}

export function logger(entry: Entry){
    switch(entry.type) {
        case EntryType.Error: {
            console.error(entry.message)
            break;
        }
        case EntryType.Warning: {
            console.warn(entry.message)
            break;
        }
        case EntryType.Info: {
            console.info(entry.message)
            break;
        }
        default: {
            console.log(entry.message)
        }
    } 
}