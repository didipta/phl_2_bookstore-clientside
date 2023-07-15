import { IUser } from './userInterface'

export interface IBook {
    Title: string
    Author: string
    Genre: string
    Publication_Date: Date
    Reviews: [
        {
            Reviewer: IUser
            Review_Date: Date
            Review_Text: string
        },
    ]
    postby: IUser
    image: string
}
