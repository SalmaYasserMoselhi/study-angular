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
   * @Input — Parent → Child data flow.
   *
   * required: true (Angular 16+): Angular will throw an error at compile time if
   * the parent forgets to pass this value. This makes the '!' (non-null assertion)
   * technically unnecessary, but keeping both is fine — they serve the same guarantee
   * in different layers (Angular vs TypeScript).
   */
  @Input({ required: true }) product!: Product;
}
