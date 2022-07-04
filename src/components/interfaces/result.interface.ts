import { Nullable } from '../../types';

export interface Result {
    age?: Nullable<number>;
    gender?: Nullable<string>;
    name?: Nullable<string>;
    nationality?: Nullable<string[]>;
}
