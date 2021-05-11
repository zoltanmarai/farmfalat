import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { HeaderComponent } from './components/header/header.component';
import { VegieComponent } from './components/vegie/vegie.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { EggComponent } from './components/egg/egg.component';
import { TeeComponent } from './components/tee/tee.component';
import { JamComponent } from './components/jam/jam.component';
import { FooterComponent } from './components/footer/footer.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AboutComponent } from './components/about/about.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProductMaintenanceComponent } from './components/product-maintenance/product-maintenance.component';
import {HttpClientModule} from "@angular/common/http";
import { CartComponent } from './components/cart/cart.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ProductTablerowComponent } from './components/product-tablerow/product-tablerow.component';
import { ProductModifyModalComponent } from './components/product-modify-modal/product-modify-modal.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { SloganMaintenanceComponent } from './components/slogan-maintenance/slogan-maintenance.component';
import { UserMaintenanceComponent } from './components/user-maintenance/user-maintenance.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SloganTablerowComponent } from './components/slogan-tablerow/slogan-tablerow.component';
import { OrderMaintenanceComponent } from './components/order-maintenance/order-maintenance.component';
import { UserTablerowComponent } from './components/user-tablerow/user-tablerow.component';
import { UserFullinfoComponent } from './components/user-fullinfo/user-fullinfo.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductCategoryNewComponent } from './components/product-category-new/product-category-new.component';
import { ProductCategoryTableRowComponent } from './components/product-category-table-row/product-category-table-row.component';
import { PackagesCardComponent } from './components/packages-card/packages-card.component';
import { OrdersTablerowComponent } from './components/orders-tablerow/orders-tablerow.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSiteComponent,
    HeaderComponent,
    VegieComponent,
    FruitsComponent,
    EggComponent,
    TeeComponent,
    JamComponent,
    FooterComponent,
    PackagesComponent,
    AboutComponent,
    ProductCardComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ProductMaintenanceComponent,
    CartComponent,
    ProductRowComponent,
    CartPageComponent,
    ProductTablerowComponent,
    ProductModifyModalComponent,
    NewProductComponent,
    SloganMaintenanceComponent,
    UserMaintenanceComponent,
    UserProfileComponent,
    SloganTablerowComponent,
    OrderMaintenanceComponent,
    UserTablerowComponent,
    UserFullinfoComponent,
    ProductCategoriesComponent,
    ProductCategoryNewComponent,
    ProductCategoryTableRowComponent,
    PackagesCardComponent,
    OrdersTablerowComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
