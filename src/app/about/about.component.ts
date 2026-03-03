import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-about',
  standalone: true,
  /**
   * NESTED ROUTING — Required Imports
   * - RouterLink: Enables routerLink="..." on anchor tags for child navigation.
   * - RouterOutlet: Renders the matched child component inside <router-outlet>.
   * - RouterLinkActive: Applies a CSS class when the link's route is active.
   *
   * AlertComponent is imported here to demonstrate ng-content (Content Projection).
   * It is NOT related to routing — it's just a concept demo on this page.
   */
  imports: [RouterLink, RouterOutlet, RouterLinkActive, AlertComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
