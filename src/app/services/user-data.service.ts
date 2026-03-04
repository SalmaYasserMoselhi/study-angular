import { Injectable } from '@angular/core';

/**
 * ANGULAR SERVICE — @Injectable
 *
 * A Service is a plain class decorated with @Injectable that holds shared logic
 * or data — things that don't belong inside a single component.
 *
 * Why use services?
 * - Share data/state between multiple components.
 * - Keep components clean (they should only handle the view, not business logic).
 * - Reusable logic in one place (e.g. API calls, calculations, formatters).
 *
 * providedIn: 'root':
 * - Registers the service in the root injector → one singleton instance for the whole app.
 * - Any component can inject it without declaring it anywhere else.
 *
 * How to inject a service into a component:
 *   Option A (constructor):  constructor(private userDataService: UserDataService) {}
 *   Option B (inject fn):    private userDataService = inject(UserDataService);  ← modern preferred
 */
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  // Sample in-memory user data (mock — replace with API call in a real app)
  private users: string[] = ['Salma', 'Rana', 'Hossam', 'Sara', 'Mona'];

  getUsers(): string[] {
    return this.users;
  }

  addUser(name: string): void {
    this.users.push(name);
  }

  removeUser(name: string): void {
    this.users = this.users.filter((u) => u !== name);
  }
}
