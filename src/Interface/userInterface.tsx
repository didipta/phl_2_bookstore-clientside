
export type IRole = "user" | "admin";
export type IUser = {
    phoneNumber: string;
    role: IRole;
    password: string;
    Name: string;
    address: string;
    email: string;
  };