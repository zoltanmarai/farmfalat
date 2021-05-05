import {DeliveryWindow} from "./delivery-window";

export interface DeliveryDate {
  deliveryDayID: number;
  year: number;
  month: string;
  dayOfTheMonth: number;
  dayOfWeek: string;
  listOfGaps: DeliveryWindow[];
  active: boolean;
}
