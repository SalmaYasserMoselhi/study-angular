import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  /**
   * =========================================
   * NESTED ROUTING: COMPONENT IMPORTS
   * =========================================
   * - RouterLink: To use [routerLink] in the HTML.
   * - RouterOutlet: To use <router-outlet> in the HTML.
   * - RouterLinkActive: To style active links with [routerLinkActive].
   */
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
