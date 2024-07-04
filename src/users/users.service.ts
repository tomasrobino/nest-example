import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: {id: number, name: string, email: string, role: "EMPLOYEE" | "ADMIN" | "INTERN"}[] = [
        {
            id: 0,
            name: "a b",
            email: "a@b.com",
            role: "EMPLOYEE"
        },
        {
            id: 1,
            name: "c d",
            email: "c@d.com",
            role: "ADMIN"
        },
        {
            id: 2,
            name: "e f",
            email: "e@f.com",
            role: "INTERN"
        },
        {
            id: 3,
            name: "g h",
            email: "g@h.com",
            role: "EMPLOYEE"
        },
    ]

    getAll(role?: "INTERN" | "EMPLOYEE" | "ADMIN"): User[] {
        if (role) {
            this.users.filter(user => user.role === role );
        }
        return this.users
    }

    getSingle(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    create(user: { name: string, email: string, role: "EMPLOYEE" | "ADMIN" | "INTERN"}): User {
        const lastUser: User = this.users.slice(-1)[0];
        let id;
        if (lastUser.id) {
            id = lastUser.id+1;
        } else id = 0;
        this.users.push({id: id, ...user});
        return this.users.slice(-1)[0];
    }

    update(id: number, updatedUser: {name: string, email: string, role: "EMPLOYEE" | "ADMIN" | "INTERN"}): User | undefined {
        const gotId: number | undefined = this.users.findIndex(element => element.id === id);
        if (gotId) {
            this.users[gotId] = {...this.users[gotId], ...updatedUser};
            return this.users[gotId];
        }
    }

    delete(id: number): User | undefined {
        const gotId: number | undefined = this.users.findIndex(element => element.id === id);
        if (gotId) {
            this.users.splice(gotId, 1);
            return this.users[gotId];
        }
    }
}