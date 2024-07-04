import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';

@Controller('users')
export class UsersController {
    //Get all users
    @Get() //GET /users or /users?role=value
    getAll(@Query("role") role?: "INTERN" | "EMPLOYEE" | "ADMIN"): [] {
        return [];
    }

    //Get specific user
    @Get(':id') //GET /users/:id
    getSingle(@Param(":id") id: string): {id: string} {
        return { id }
    }

    //Create new user
    @Post() //POST /users
    create(@Body() user: {}): {} {
        return user;
    }

    @Patch(":id") //PATCH /users/:id
    update(@Param("id") id: string, @Body() body: string) {
        return { id };
    }

    @Delete(":id") //DELETE /users/:id
    delete(@Param("id") id: string): {id:string} {
        return {id}
    }
}