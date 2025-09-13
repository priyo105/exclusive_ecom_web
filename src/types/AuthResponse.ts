import { User } from "./User";

export interface AuthResponse {
    token: string ;
    refreshToken:string,
    user: User;
  }


export interface GoogleSignInResponse {
  token: string;
  refreshToken: string;
  user: {
    _id: string;
    username: string;
    email: string;
    password: string;
    role: "enduser" | "admin" | string;
    createdAt: string; 
    updatedAt: string;
    __v: number;
  };
}
