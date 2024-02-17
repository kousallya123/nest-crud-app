import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employees } from './interface/employees.interface';
import { Model } from 'mongoose';
import { employeeDTO } from './dto/employees.dto';

@Injectable()
export class EmployeesService {

    constructor(@InjectModel('Employees') private  employeeModel: Model<Employees>) {}

    async getEmployees():Promise<Employees[]>{
        return await this.employeeModel.find().exec()
    }

    async getOneEmployee(id:string):Promise<Employees>{
        return await this.employeeModel.findOne({_id:id}).exec()
    }

    async updateOneEmployee(id:string,data:employeeDTO):Promise<Employees>{
        return await this.employeeModel.findByIdAndUpdate({_id:id},data,{new:true}).exec()
    }


    async deleteEmployee(id:string):Promise<Employees>{
        return await this.employeeModel.findByIdAndDelete({_id:id}).exec()
    }

    async createEmployee(data:employeeDTO):Promise<Employees>{
        const employees=new this.employeeModel(data)   
        return await employees.save()
    }
}
