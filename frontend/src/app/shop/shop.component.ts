import { Component } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShopInfoComponent } from './shop-info/shop-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoyaltyInfoComponent } from './loyalty-info/loyalty-info.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShoppingCartComponent, ShopInfoComponent, ProductListComponent, LoyaltyInfoComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {}
