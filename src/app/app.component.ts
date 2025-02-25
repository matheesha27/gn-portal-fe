import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grama-niladhari-portal-fe';
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenwidth = signal<number>(window.innerWidth);

  changeLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  @HostListener('window:resize')
  onResize() {
    this.screenwidth.set(window.innerWidth);
    if (this.screenwidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }
}
