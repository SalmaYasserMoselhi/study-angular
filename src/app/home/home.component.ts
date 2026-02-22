import { Component } from '@angular/core';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  /**
   * =========================================
   * 1. DATA INTERPOLATION PROPERTIES
   * =========================================
   */
  title: string = 'Home Page';
  userName: string = 'Salma Yasser';

  // This string contains HTML tags, but interpolation renders them as plain text (escaped).
  htmlSnippet: string =
    '<button class="btn btn-danger">Dangerous Button</button>';

  getName(): string {
    return this.userName;
  }

  /**
   * =========================================
   * 2. PROPERTY BINDING PROPERTIES
   * =========================================
   * Note: These preserve their data types (boolean, number, etc.)
   */
  imgSrc: string = 'images/1.jpeg';
  isBtnDisabled: boolean = true;

  /**
   * =========================================
   * 3. EVENT BINDING METHODS
   * =========================================
   */
  sayHello(): void {
    alert('Hello! This is an Event Binding example.');
  }

  onKeydown(event: KeyboardEvent): void {
    console.log('Key pressed:', event.key);
  }

  /**
   * =========================================
   * 4. ATTRIBUTE BINDING PROPERTIES
   * =========================================
   * - Used when no DOM property exists.
   * - Vital for: Accessibility (ARIA), SEO.
   */
  colSpanValue: number = 2;
  ariaLabelText: string = 'Close icon';
  roleName: string = 'button';

  /**
   * =========================================
   * 5. CLASS & STYLE BINDING PROPERTIES
   * =========================================
   * Used for dynamic CSS class and inline style manipulation.
   */
  userAge: number = 18;
  role: string = 'admin';

  // Object for [class] binding
  classStyleObj = {
    'bg-info': this.userAge >= 20,
    'text-white': this.role === 'admin' || this.role === 'user',
    'text-danger': this.role === 'guest',
  };

  // Variable for [style] binding
  color: string = 'red';

  /**
   * =========================================
   * 6. CONTROL FLOW: @for
   * =========================================
   * Used to render lists of items dynamically.
   */
  users: string[] = ['Salma', 'Rana', 'Hossam', 'Sara', 'Mona'];

  productsList: Product[] = [
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
    {
      id: '4',
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838330-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-5.jpeg',
      ],
      onSale: true,
    },
    {
      id: '5',
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg',
      price: 349,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563675-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-5.jpeg',
      ],
      onSale: false,
    },
    {
      id: '6',
      title: 'Woman Bordeaux Long Sleeve Blouse BORDEAUX',
      description: 'ShellFabric1 Cotton 65% Polyester 35%',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411833-cover.jpeg',
      price: 499,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-1.jpeg',
      ],
      onSale: true,
    },
    {
      id: '7',
      title: 'Woman Brown Long Sleeve Tunic LT.CAMEL',
      description: 'ShellFabric1 Cotton 65% Polyester 35%',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402295928-cover.jpeg',
      price: 499,
      quantity: 229,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296306-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296305-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296305-2.jpeg',
      ],
      onSale: false,
    },
    {
      id: '8',
      title: 'Woman Standart Fit Knitted Cardigan',
      description:
        'Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg',
      price: 499,
      quantity: 222,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893497-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-3.jpeg',
      ],
      onSale: true,
    },
    {
      id: '9',
      title: 'Relaxed Fit Knitted Joggers Lilac',
      description:
        'Colour Name\tPink\nDepartment\tWomen\nMaterial Composition\tPolyester Blend',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672268-cover.jpeg',
      price: 499,
      quantity: 222,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672624-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672623-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672624-3.jpeg',
      ],
      onSale: false,
    },
    {
      id: '10',
      title: 'Woman Socks',
      description:
        'Colour Name\tPink\nDepartment\tWomen\nMaterial Composition\tPolyester Blend',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401528864-cover.jpeg',
      price: 199,
      quantity: 117,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401528923-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401528924-2.jpeg',
      ],
      onSale: true,
    },
    {
      id: '11',
      title: 'Woman Karma Socks Multicolour',
      description:
        'Soft and comfortable cotton fabric\nCrew neck and short sleeves\nComfortable, regular fit\nWash according to care label instructions',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401176411-cover.jpeg',
      price: 199,
      quantity: 117,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401176767-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401176766-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401176768-3.jpeg',
      ],
      onSale: false,
    },
    {
      id: '12',
      title: 'Logo T-Shirt Green',
      description:
        'Soft and comfortable cotton fabric\nCrew neck and short sleeves\nComfortable, regular fit\nWash according to care label instructions',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287654-cover.jpeg',
      price: 744,
      quantity: 111,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287765-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287767-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287767-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287765-2.jpeg',
      ],
      onSale: true,
    },
    {
      id: '13',
      title: 'Orca Leather Boots Anthracite',
      description:
        'Genuine and smooth leather upper\nSecure lace-ups with side zipper closure\nSlightly cushioned footbed provides comfort\nPatterned chunky outsole provides traction and grip',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120400-cover.jpeg',
      price: 4829,
      quantity: 273,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120770-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120771-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120769-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120771-4.jpeg',
      ],
      onSale: false,
    },
    {
      id: '14',
      title: 'Softride Enzo NXT CASTLEROCK-High Risk R',
      description: 'Sole Material\tRubber\nColour Name\tRED\nDepartment\tMen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913757-cover.jpeg',
      price: 2999,
      quantity: 173,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913850-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913850-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-5.jpeg',
      ],
      onSale: true,
    },
    {
      id: '15',
      title: 'ESS Big Logo Hoodie TR Puma Black',
      description: 'Material\tCombination\nColour Name\tblack\nDepartment\tMen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661234-cover.jpeg',
      price: 2649,
      quantity: 200,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661306-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661306-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661306-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661305-1.jpeg',
      ],
      onSale: false,
    },
  ];

  /**
   * =========================================
   * 9. TWO-WAY BINDING PROPERTIES
   * =========================================
   * Syncs data between logic and UI automatically.
   */
  searchInput: string = '';
}
