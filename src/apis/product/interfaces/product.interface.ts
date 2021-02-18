import { Document } from 'mongoose';

export interface IProduct extends Document {
    readonly user?           : string;
    readonly name            : string;
    readonly shortDetails?   : string;
    readonly description     : string;
    readonly img?            : string;
    readonly imageUrl?       : string;
    readonly stock           : number;
    readonly cost            : number;
    readonly price           : number;
    readonly discount?       : number;
    readonly rate            : number;
    readonly onSale          : boolean;
    readonly newItem?        : boolean;
    readonly newSupplier?    : boolean;
    readonly category?       : string;
    readonly brand?          : string;
    readonly supplier?       : string;
    readonly unit            : string;
    readonly ingredients?    : string;
}