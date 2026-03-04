import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  inject,
} from '@angular/core';
import { UserDataService } from '../services/user-data.service';

/**
 * COMPONENT LIFECYCLE HOOKS
 *
 * Angular calls lifecycle hook methods at specific moments during a component's life.
 * To use them, the component class must implement the corresponding interface.
 *
 * Execution order:
 *   constructor → ngOnChanges → ngOnInit → ngAfterViewInit → ... → ngOnDestroy
 *
 * | Hook              | Interface     | When it runs                                          |
 * |-------------------|---------------|-------------------------------------------------------|
 * | constructor()     | —             | Class is instantiated (before Angular sets up inputs) |
 * | ngOnChanges()     | OnChanges     | Every time an @Input property changes                 |
 * | ngOnInit()        | OnInit        | Once, after the first ngOnChanges (inputs are ready)  |
 * | ngAfterViewInit() | AfterViewInit | Once, after the component's template is rendered      |
 * | ngOnDestroy()     | OnDestroy     | Just before the component is removed from the DOM     |
 *
 * Common use cases:
 * - constructor    → inject dependencies (services), nothing else
 * - ngOnInit       → start data fetching, set up subscriptions, start timers
 * - ngAfterViewInit→ access @ViewChild / @ViewChildren (DOM/child components are ready here)
 * - ngOnDestroy    → clean up (clear intervals, unsubscribe, remove listeners) to avoid memory leaks
 */
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * DEPENDENCY INJECTION — inject()
   *
   * Angular's DI system provides a single shared instance (singleton) of the service.
   * inject() is the modern functional syntax — an alternative to constructor injection.
   *
   * Option A — inject() function (modern, preferred in standalone components):
   *   private userDataService = inject(UserDataService);
   *
   * Option B — constructor injection (classic approach, still valid):
   *   constructor(private userDataService: UserDataService) {}
   *
   * Both produce the same result. Angular resolves the instance from the root injector
   * because the service is decorated with @Injectable({ providedIn: 'root' }).
   */
  private userDataService = inject(UserDataService);

  users: string[] = []; // populated from the service in ngOnInit
  intervalId: any; // stored so we can cancel it in ngOnDestroy

  constructor() {
    // Runs first — before inputs are set and before the template exists.
    // Only use for dependency injection (constructor injection style).
    // With inject() used above, the constructor can stay empty.
    console.log('1. constructor');
  }

  ngOnInit(): void {
    // Runs once after Angular sets all @Input() properties.
    // Best place to: fetch data, start subscriptions, set up timers.
    console.log('2. ngOnInit');

    // Load data from the service (simulates an API fetch)
    this.users = this.userDataService.getUsers();

    this.intervalId = setInterval(() => {
      console.log('interval tick'); // runs every 1s while component is alive
    }, 1000);
  }

  ngAfterViewInit(): void {
    // Runs once after the component's template (and all child components) are rendered.
    // Safe to access @ViewChild / @ViewChildren here — they are undefined before this point.
    console.log('3. ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // Runs just before Angular removes the component from the DOM.
    // ALWAYS clean up here to prevent memory leaks:
    //   - clearInterval / clearTimeout
    //   - unsubscribe from Observables
    //   - remove event listeners
    console.log('4. ngOnDestroy');
    clearInterval(this.intervalId);
  }

  addUser(name: string): void {
    this.userDataService.addUser(name);
    this.users = this.userDataService.getUsers(); // re-read to sync the view
  }

  removeUser(name: string): void {
    this.userDataService.removeUser(name);
    this.users = this.userDataService.getUsers();
  }
}
