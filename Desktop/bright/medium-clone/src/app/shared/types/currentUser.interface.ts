export interface CurrentUserInterface{
    id:number;
    username:string;
    createdAt:string;
    updatedAt:string;
    email:string;
    bio: string | null;
    image: string | null;
    token: string;
}