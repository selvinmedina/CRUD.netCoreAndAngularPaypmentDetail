import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  public formData: PaymentDetail
  constructor(private _http: HttpClient) {
    this.formData = new PaymentDetail();
  }

  postPaymentDetail(formData:PaymentDetail){

  }
}
