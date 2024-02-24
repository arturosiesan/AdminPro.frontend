import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';



@NgModule({
  declarations: [
    PagesComponent,

    NopagefoundComponent,

    IndexComponent,
    ContactComponent,
    ServicesComponent,
    PricesComponent
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PagesComponent,

    NopagefoundComponent,

    IndexComponent,
    ContactComponent,
    ServicesComponent,
    PricesComponent
  ]
})
export class PagesModule { }
