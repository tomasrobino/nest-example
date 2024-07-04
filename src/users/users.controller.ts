import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    //Get all users
    @Get() //GET /users or /users?role=value
    getAll(@Query("role") role?: "INTERN" | "EMPLOYEE" | "ADMIN"): User[] {
        return this.usersService.getAll(role);
    }

    //Get specific user
    @Get(':id') //GET /users/:id
    getSingle(@Param("id", ParseIntPipe) id: number): User {
        return this.usersService.getSingle(id);
    }

    //Create new user
    @Post() //POST /users
    create(@Body(ValidationPipe) user: CreateUserDto): User {
        return this.usersService.create(user);
    }

    @Patch(":id") //PATCH /users/:id
    update(@Param("id", ParseIntPipe) id: number, @Body(ValidationPipe) updatedUser: UpdateUserDto): User | undefined {
        return this.usersService.update(id, updatedUser);
    }

    @Delete(":id") //DELETE /users/:id
    delete(@Param("id", ParseIntPipe) id: number): User | undefined {
        return this.usersService.delete(id);
    }
}