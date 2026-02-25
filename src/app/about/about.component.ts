import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-about',
  standalone: true,
  /**
   * NESTED ROUTING: IMPORTS
   * - RouterLink, RouterOutlet, RouterLinkActive: Required for child routes.
   */
  imports: [RouterLink, RouterOutlet, RouterLinkActive, AlertComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
