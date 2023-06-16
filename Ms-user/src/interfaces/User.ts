import { Role } from "./Role";
export interface User {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    registrationDate: Date;
    updatedAt: Date;
    token: string;
    tokenExpiration: Date;
    refreshToken: string;
    refreshTokenExpiration: Date;
    roles: string[]
}