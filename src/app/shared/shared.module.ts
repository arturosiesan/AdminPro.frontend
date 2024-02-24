import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarAdminComponent,
    HeaderAdminComponent,
    HeaderComponent,
    FooterComponent,
    FooterAdminComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarAdminComponent,
    HeaderAdminComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
