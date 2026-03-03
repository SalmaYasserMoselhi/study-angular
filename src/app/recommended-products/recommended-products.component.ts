import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductCardComponent } from '../product-card/product-card.component';

/**
 * RecommendedProductsComponent
 *
 * This component is intentionally kept separate from HomeComponent so it can
 * be used inside an @defer block in home.component.html.
 *
 * @defer lazy-loads this component's JS bundle — it is only downloaded
 * when the trigger fires (e.g. on user interaction), not at app startup.
 * If this were inlined in HomeComponent, it could not be deferred separately.
 */
@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css',
})
export class RecommendedProductsComponent {
  // Mock data — kept small since this component is loaded lazily as a demo.
  recommendedProducts: Product[] = [
    {
      id: '1',
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
      price: 190,
      quantity: 225,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg',
      ],
      onSale: false,
    },
    {
      id: '2',
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
      ],
      onSale: true,
    },
    {
      id: '3',
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156554-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156556-4.jpeg',
      ],
      onSale: false,
    },
  ];
}
