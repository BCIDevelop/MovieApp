export type User ={
    userId:string;
    email:string;
}
export interface UserContextType {
    user: User | null;
    loginUser: ({ email, userId }: User) => void;
}