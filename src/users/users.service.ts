import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: {id: number, name: string, email: string, role: "EMPLOYEE" | "ADMIN" | "INTERN"}[] = [
        {
            id: 1,
            name: "a b",
            email: "a@b.com",
            role: "EMPLOYEE"
        },
        {
            id: 2,
            name: "c d",
            email: "c@d.com",
            role: "ADMIN"
        },
        {
            id: 3,
            name: "e f",
            email: "e@f.com",
            role: "INTERN"
        },
        {
            id: 4,
            name: "g h",
            email: "g@h.com",
            role: "EMPLOYEE"
        },
    ]

    getAll(role?: "INTERN" | "EMPLOYEE" | "ADMIN") {
        if (role) {
            this.users.filter(user => user.role === role );
        }
        return this.users
    }

    getSingle(id: number) {
        return this.users.find(user => user.id === id);
    }

    create(user: { name: string, email: string, role: "EMPLOYEE" | "ADMIN" | "INTERN"}) {
        this.users.push({id: this.users.slice(-1)[0].id+1, ...user});
    }

    update(id: number, updatedUser: {name: string, email: string, role: "EMPLOYEE" | "ADMIN" | "INTERN"}) {
        const gotId: number | undefined = this.users.findIndex(element => element.id === id);
        if (gotId) {
            this.users[gotId] = {...this.users[gotId], ...updatedUser};
            return 0;
        } else return 1;
    }

    delete(id: number) {
        const gotId: number | undefined = this.users.findIndex(element => element.id === id);
        if (gotId) {
            this.users.splice(gotId, 1);
            return 0;
        } else return 1;
    }
}