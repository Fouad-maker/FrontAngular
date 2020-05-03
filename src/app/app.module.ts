import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client/header/header.component';
import { SliderAreaComponent } from './client/slider-area/slider-area.component';
import { SmallBannerComponent } from './client/small-banner/small-banner.component';
import { ProductAreaComponent } from './client/product-area/product-area.component';
import { MediumBannerComponent } from './client/medium-banner/medium-banner.component';
import { MostPopularComponent } from './client/most-popular/most-popular.component';
import { ShopHomeListComponent } from './client/shop-home-list/shop-home-list.component';
import { CondownAreaComponent } from './client/condown-area/condown-area.component';
import { ShopBlogComponent } from './client/shop-blog/shop-blog.component';
import { ShopServiceAreaComponent } from './client/shop-service-area/shop-service-area.component';
import { NewsletterComponent } from './client/newsletter/newsletter.component';
import { ModalComponent } from './client/modal/modal.component';
import { FooterComponent } from './client/footer/footer.component';
import { PreloaderComponent } from './client/preloader/preloader.component';
import { CartComponent } from './client/cart/cart.component';
import { BreadcrumbsComponent } from './client/cart/breadcrumbs/breadcrumbs.component';
import { ShoppingCartComponent } from './client/cart/shopping-cart/shopping-cart.component';
import { ShoppingSummeryComponent } from './client/cart/shopping-cart/shopping-summery/shopping-summery.component';
import { TotalAmountComponent } from './client/cart/shopping-cart/total-amount/total-amount.component';
import { ClientComponent } from './client/client.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { ContactComponent } from './client/contact/contact.component';
import { BlogSingleSidebarComponent } from './client/blog-single-sidebar/blog-single-sidebar.component';
import { BlogSingleComponent } from './client/blog-single-sidebar/blog-single/blog-single.component';
import { BreadcrumbsCheckoutComponent } from './client/checkout/breadcrumbs-checkout/breadcrumbs-checkout.component';
import { CheckoutBodyComponent } from './client/checkout/checkout-body/checkout-body.component';
import { BreadcrumbsContactComponent } from './client/contact/breadcrumbs-contact/breadcrumbs-contact.component';
import { ContactBodyComponent } from './client/contact/contact-body/contact-body.component';
import { MapSectionComponent } from './client/contact/map-section/map-section.component';
import { ShopGridComponent } from './client/shop-grid/shop-grid.component';
import { SingleWidgetCategoryComponent } from './client/shop-grid/single-widget-category/single-widget-category.component';
import { SingleWidgetPriceComponent } from './client/shop-grid/single-widget-price/single-widget-price.component';
import { SingleWidgetRecentPostComponent } from './client/shop-grid/single-widget-recent-post/single-widget-recent-post.component';
import { SingleWidgetManufacturersComponent } from './client/shop-grid/single-widget-manufacturers/single-widget-manufacturers.component';
import { ShopTopComponent } from './client/shop-grid/shop-top/shop-top.component';
import { ProductsComponent } from './client/shop-grid/products/products.component';
import { SingleProductComponent } from './client/shop-grid/products/single-product/single-product.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { FournisseurModule } from './fournisseur/fournisseur.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderAreaComponent,
    SmallBannerComponent,
    ProductAreaComponent,
    MediumBannerComponent,
    MostPopularComponent,
    ShopHomeListComponent,
    CondownAreaComponent,
    ShopBlogComponent,
    ShopServiceAreaComponent,
    NewsletterComponent,
    ModalComponent,
    FooterComponent,
    PreloaderComponent,
    CartComponent,
    BreadcrumbsComponent,
    ShoppingCartComponent,
    ShoppingSummeryComponent,
    TotalAmountComponent,
    ClientComponent,
    CheckoutComponent,
    ContactComponent,
    BlogSingleSidebarComponent,
    BlogSingleComponent,
    BreadcrumbsCheckoutComponent,
    CheckoutBodyComponent,
    BreadcrumbsContactComponent,
    ContactBodyComponent,
    MapSectionComponent,
    ShopGridComponent,
    SingleWidgetCategoryComponent,
    SingleWidgetPriceComponent,
    SingleWidgetRecentPostComponent,
    SingleWidgetManufacturersComponent,
    ShopTopComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FournisseurModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
