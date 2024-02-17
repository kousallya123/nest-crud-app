import * as mongoose from 'mongoose'

export const EmployeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String,
    designation: String,
  });