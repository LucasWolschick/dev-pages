import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-header />
      <main class="page">
        <router-outlet />
      </main>
    </div>
  `,
  styles: `
    .container {
      max-width: 700px;
      margin: 0 auto;
    }

    .page {
      margin: 1rem;
    }
  `,
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {}
