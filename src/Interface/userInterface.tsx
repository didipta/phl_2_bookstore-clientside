export type IRole = 'user' | 'admin'
export interface IUser {
    phoneNumber: string
    role: IRole
    password: string
    Name: string
    address: string
    email: string
}
