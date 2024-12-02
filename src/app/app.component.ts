import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListAllNursesComponent } from './list-all-nurses/list-all-nurses.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListAllNursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'm12pr06-indiv';
}
