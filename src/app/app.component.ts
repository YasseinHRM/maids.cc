import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from './store/user/user.actions';
import { selectUsers, selectLoading, selectError } from './store/user/user.selectors';
import { User } from './store/user/user.state';
import { RouterOutlet } from '@angular/router';
//import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private store = inject(Store);

  users$: Observable<User[]> = this.store.select(selectUsers);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<string | null> = this.store.select(selectError);
  title = 'Users List';

  constructor() {
    this.store.dispatch(loadUsers());
  }
}
