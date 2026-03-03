import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

/**
 * ANGULAR DECORATORS — Quick Reference
 *
 * Decorators are functions (prefixed with '@') that attach metadata to a class,
 * telling Angular how to process it.
 *
 * | Decorator      | Purpose                                                  | See Example In        |
 * |----------------|----------------------------------------------------------|-----------------------|
 * | @Component     | Marks a class as a component (defines selector, template)| Every component file  |
 * | @Injectable    | Marks a class as a Service (dependency injection)        | (services — future)   |
 * | @Directive     | Marks a class as a Directive (DOM manipulation)          | (directives — future) |
 * | @Pipe          | Marks a class as a Pipe (template data transform)        | (pipes — future)      |
 * | @Input()       | Receives data from a parent component                    | product-card.ts       |
 * | @Output()      | Emits events to a parent component                       | alert.ts              |
 */
@Component({
  selector: 'app-root', // Used as <app-root> in index.html
  standalone: true, // Manages its own imports (no NgModule needed)
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
