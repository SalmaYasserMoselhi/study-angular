import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  /**
   * @Input: Receives data from Parent -> Child.
   * '!' (Non-null Assertion): Tells TS this value will be provided externally.
   */
  @Input({
    required: true,
  })
  product!: Product;
}
