import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({},pd);
  }

  
  onDelete(id:number){
    if(confirm('Are you delete this record?'))
    this.service.deletePaymentDetail(id).subscribe(
      res=>{
        this.toastr.warning('Removed Successfully ', 'Payment Detail Register');
        setTimeout(()=>{
          this.service.refreshList();
        },500);
      },
      err=>{
        console.error(err);
      }
    );
  }
}
