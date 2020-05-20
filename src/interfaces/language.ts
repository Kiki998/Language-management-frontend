import {ICategory} from "./category"

export interface ILanguage{
    _id: string;
    name: string;
    description: string;
    category: ICategory[];
}