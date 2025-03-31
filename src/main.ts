import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Verifique se o caminho está correto
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter([])] // Coloque suas rotas aqui, caso tenha
}).catch(err => console.error(err));