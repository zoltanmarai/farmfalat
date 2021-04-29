import {DeliveryDate} from "./deliveryDate";

export interface DateResponse {
  successful: boolean;
  list: DeliveryDate[];
}
