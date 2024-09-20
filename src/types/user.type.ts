export type User ={
    userId:string;
    email:string;
}
export interface UserContextType {
    user: User | undefined;
    loginUser: ({ email, userId }: User) => void;
    logOutUser: () => void;
}