import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainSiteComponent} from "./components/main-site/main-site.component";
import {JamComponent} from "./components/jam/jam.component";
import {FruitsComponent} from "./components/fruits/fruits.component";
import {VegieComponent} from "./components/vegie/vegie.component";
import {TeeComponent} from "./components/tee/tee.component";
import {EggComponent} from "./components/egg/egg.component";
import {PackagesComponent} from "./components/packages/packages.component";
import {AboutComponent} from "./components/about/about.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {ProductMaintenanceComponent} from "./components/product-maintenance/product-maintenance.component";
import {CartPageComponent} from "./components/cart-page/cart-page.component";
import {ProductTablerowComponent} from "./components/product-tablerow/product-tablerow.component";
import {NewProductComponent} from "./components/new-product/new-product.component";
import {SloganMaintenanceComponent} from "./components/slogan-maintenance/slogan-maintenance.component";
import {UserMaintenanceComponent} from "./components/user-maintenance/user-maintenance.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {SloganTablerowComponent} from "./components/slogan-tablerow/slogan-tablerow.component";
import {OrderMaintenanceComponent} from "./components/order-maintenance/order-maintenance.component";
import {UserTablerowComponent} from "./components/user-tablerow/user-tablerow.component";
import {UserFullinfoComponent} from "./components/user-fullinfo/user-fullinfo.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: MainSiteComponent},
  {path: 'jam', component: JamComponent},
  {path: 'fruits/:id', component: FruitsComponent},
  {path: 'vegie', component: VegieComponent},
  {path: 'tee', component: TeeComponent},
  {path: 'egg/:productName', component: EggComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'registration',component: RegistrationComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'product-maintenance', component: ProductMaintenanceComponent},
  {path: 'product-tablerow', component: ProductTablerowComponent},
  {path: 'new-product', component: NewProductComponent},
  {path: 'slogan-maintenance', component: SloganMaintenanceComponent},
  {path: 'user-maintenance', component: UserMaintenanceComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'slogan-tablerow', component: SloganTablerowComponent},
  {path: 'order-maintenance',component: OrderMaintenanceComponent},
  {path: 'user-tablerow', component: UserTablerowComponent},
  {path: 'user-fullinfo/:id', component: UserFullinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
