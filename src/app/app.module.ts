import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentDetailComponent } from './components/payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './components/payment-details/payment-detail-list/payment-detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
