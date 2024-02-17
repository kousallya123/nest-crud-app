import { Document } from "mongoose";

export interface Employees extends Document{
    readonly name: string,
    readonly age: number,
    readonly department: string,
    readonly designation: string,
}