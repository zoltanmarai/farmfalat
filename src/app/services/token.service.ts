import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly SERVER_URL = environment.SERVER_URL;

  constructor() { }
}
