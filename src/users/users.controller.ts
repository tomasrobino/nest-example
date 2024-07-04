import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query} from '@nestjs/common';
import {UsersService} from "./users.service";

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
    getSingle(@Param("id", ParseIntPipe) id: number): User | undefined {
        return this.usersService.getSingle(id);
    }

    //Create new user
    @Post() //POST /users
    create(@Body() user: User): User {
        return this.usersService.create(user);
    }

    @Patch(":id") //PATCH /users/:id
    update(@Param("id", ParseIntPipe) id: number, @Body() updatedUser: User): User | undefined {
        return this.usersService.update(id, updatedUser);
    }

    @Delete(":id") //DELETE /users/:id
    delete(@Param("id", ParseIntPipe) id: number): User | undefined {
        return this.usersService.delete(id);
    }
}