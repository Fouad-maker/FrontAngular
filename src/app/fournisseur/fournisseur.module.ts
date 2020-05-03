import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterFourComponent } from './footer-four/footer-four.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { MapComponent } from './map/map.component';
import { RtlComponent } from './rtl/rtl.component';
import { TableComponent } from './table/table.component';
import { TopographyComponent } from './topography/topography.component';
import { UserComponent } from './user/user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';



@NgModule({
  declarations: [FooterFourComponent, NavbarComponent, SidebarComponent, AdminComponent, AuthLayoutComponent, DashboardComponent, IconsComponent, MapComponent, RtlComponent, TableComponent, TopographyComponent, UserComponent, FournisseurComponent],
  imports: [
    CommonModule
  ],
  exports: [ FooterFourComponent , FournisseurComponent]
})
export class FournisseurModule { }
