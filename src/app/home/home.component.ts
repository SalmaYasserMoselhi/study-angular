import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**
   * =========================================
   * 1. DATA INTERPOLATION PROPERTIES
   * =========================================
   */
  title: string = "Home Page";
  userName: string = "Salma Yasser";
  
  // This string contains HTML tags, but interpolation renders them as plain text (escaped).
  htmlSnippet: string = '<button class="btn btn-danger">Dangerous Button</button>';

  getName(): string {
    return this.userName;
  }

  /**
   * =========================================
   * 2. PROPERTY BINDING PROPERTIES
   * =========================================
   * Note: These preserve their data types (boolean, number, etc.)
   */
  imgSrc: string = "images/1.jpeg";
  isBtnDisabled: boolean = true;

  /**
   * =========================================
   * 3. EVENT BINDING METHODS
   * =========================================
   */
  sayHello(): void {
    alert("Hello! This is an Event Binding example.");
  }

  onKeydown(event: KeyboardEvent): void {
    console.log("Key pressed:", event.key);
  }

  /**
   * =========================================
   * 4. ATTRIBUTE BINDING PROPERTIES
   * =========================================
   * - Used when no DOM property exists.
   * - Vital for: Accessibility (ARIA), SEO.
   */
  colSpanValue: number = 2;
  ariaLabelText: string = "Close icon";
  roleName: string = "button";


  /**
   * =========================================
   * 5. CLASS & STYLE BINDING PROPERTIES
   * =========================================
   * Used for dynamic CSS class and inline style manipulation.
   */
  userAge: number = 25;
  role: string = "admin";
  
  // Object for [class] binding
  classStyleObj = {
    'bg-info': this.userAge >= 20,
    'text-white': this.role === 'admin' || this.role === 'user',
    'text-danger': this.role === 'guest',
  };

  // Variable for [style] binding
  color: string = 'red';
}
