export interface User {
    _id: string | undefined;
    username: string;
    email: string | undefined;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}