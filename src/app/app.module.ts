import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartContainerComponent } from './shopping-cart-container/shopping-cart-container.component';
import { ItemsComponent } from './shopping-cart-container/items/items.component';
import { HeaderComponent } from './shopping-cart-container/header/header.component';
import { FooterComponent } from './shopping-cart-container/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectedItemsContainerComponent } from './selected-items-container/selected-items-container.component';
import { SelectedItemComponent } from './selected-items-container/selected-item/selected-item.component';
import { CheckoutComponent } from './selected-items-container/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: ShoppingCartContainerComponent},
  {path: 'carrinho', component: SelectedItemsContainerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartContainerComponent,
    ItemsComponent,
    HeaderComponent,
    FooterComponent,
    SelectedItemsContainerComponent,
    SelectedItemComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
