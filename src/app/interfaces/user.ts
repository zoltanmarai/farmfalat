export interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password2: string;
  simpleAddress_home: string;
  city_home: string;
  postCode_home: number;
  phoneNumber: string;
  userID?: number;
  role?: string;
  postCode_delivery: number;
  city_delivery: string | null;
  simpleAddress_delivery: string | null;
  postCode_billing: number;
  city_billing: string | null;
  simpleAddress_billing: string | null;
  active: boolean;
}
