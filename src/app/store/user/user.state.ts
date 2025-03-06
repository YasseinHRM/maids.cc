
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
  }
  
  export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
  }