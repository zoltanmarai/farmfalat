import {User} from "./user";
import {DeliveryDate} from "./deliveryDate";
import {Product} from "./product";


export interface Order {
  user: User;
  deliveryDate: DeliveryDate;
  orderedItemList: Product[];
  paymentType: string;
  status: boolean;
  deliveryFee: number;
}
