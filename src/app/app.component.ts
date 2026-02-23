import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

/**
 * @Decorators in Angular
 *
 * Decorators are functions that provide metadata to the Angular compiler.
 * They are prefixed with the '@' symbol and used to define the behavior/type
 * of a class, property, or method.
 *
 * --- Common Decorators ---
 *
 * 1. @Component -> Marks a class as an Angular component and provides its metadata:
 *    - selector: The HTML selector used to represent this component in templates.
 *    - standalone: Boolean that defines if the component manages its own dependencies (Angular 14+).
 *    - imports: List of other components, directives, or modules used within this component's template.
 *    - templateUrl / template: Path to the HTML file or the inline HTML for the component's view.
 *    - styleUrl / styles: Path to the CSS file or the inline styles for the component's view.
 *
 * 2. @Injectable -> Marks a class as a "Service" that can be injected into others.
 *
 * 3. @Directive -> Marks a class as an Angular Directive to modify DOM behavior/appearance.
 *
 * 4. @Pipe -> Marks a class as an Angular Pipe to transform data in templates.
 *
 * 5. @Input() -> Defines a property as an input from a parent component.
 *
 * 6. @Output() -> Defines a property as an EventEmitter to send data to a parent component.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-app';
}
