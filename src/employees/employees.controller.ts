import { Body, Controller, Delete, Get ,Param,Post, Put} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { employeeDTO } from './dto/employees.dto';
import { Employees } from './interface/employees.interface';

@Controller('employees')
export class EmployeesController {
    
    constructor(private readonly employeesService:EmployeesService){}

    @Get()
    async getEmployee():Promise<Employees[]>{
        return await this.employeesService.getEmployees();
    }

    @Get(':id')
    async getOneEmployee(@Param('id') id:string):Promise<Employees>{
        return await this.employeesService.getOneEmployee(id);
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id:string):Promise<Employees>{
        return await this.employeesService.deleteEmployee(id);
    }

    @Put(':id')
    async updateOneEmployee(@Param('id') id:string,@Body() data:employeeDTO ):Promise<Employees>{
        return await this.employeesService.updateOneEmployee(id,data);
    }

    @Post()
    async createEmployee(@Body() data:employeeDTO): Promise<Employees>{
        return await this.employeesService.createEmployee(data);
    }
}
 