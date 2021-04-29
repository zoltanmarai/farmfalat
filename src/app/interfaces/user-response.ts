import {User} from "./user";

export interface UserResponse {
  succesful: boolean;
  list: User[];
}
