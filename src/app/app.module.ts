import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentDetailComponent } from './components/payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './components/payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './components/shared/payment-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
