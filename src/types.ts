interface User {
    id?: number;
    name: string;
    email: string;
    role: "EMPLOYEE" | "ADMIN" | "INTERN";
}