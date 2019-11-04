import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  public formData: PaymentDetail;
  public readonly rootURL = 'http://localhost:63344/api/';
  public list: PaymentDetail[];

  constructor(private _http: HttpClient) {
    this.formData = new PaymentDetail();
  }

  postPaymentDetail() {
    return this._http.post(this.rootURL + 'PaymentDetail', this.formData);
  }

  putPaymentDetail() {
    return this._http.put(this.rootURL + 'PaymentDetail/' + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(id:number) {
    return this._http.delete(this.rootURL + 'PaymentDetail/' + id);
  }

  refreshList() {
    return this._http.get(this.rootURL + 'PaymentDetail')
      .toPromise()
      .then(
        res => {
          this.list = res as PaymentDetail[];
        }
      );
  }
}
