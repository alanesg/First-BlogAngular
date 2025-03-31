import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from './components/menu-title/menu-title.component'; 
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';


@Component({
  selector: 'app-root',
  standalone: true, // Standalone Component ativado
  imports: [RouterOutlet, MenuTitleComponent, MenuBarComponent,
     BigCardComponent, SmallCardComponent], // Importando corretamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBlog';
}