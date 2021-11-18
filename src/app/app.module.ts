import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartContainerComponent } from './shopping-cart-container/shopping-cart-container.component';
import { ItemsComponent } from './shopping-cart-container/items/items.component';
import { HeaderComponent } from './shopping-cart-container/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartContainerComponent,
    ItemsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
