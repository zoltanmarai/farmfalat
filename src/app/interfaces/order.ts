import {Product} from "./product";


export interface Order {
  id?: number;
  orderTime?: string;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  userID: number;
  postCode_delivery: number;
  city_delivery: string;
  simpleAddress_delivery: string;
  comment_delivery: string;
  deliveryDayID: number;
  deliveryGapsID: number;
  ordersItemList: Product[];
  paymentType: string;
  status: boolean;
  deliveryFee: number;
}
