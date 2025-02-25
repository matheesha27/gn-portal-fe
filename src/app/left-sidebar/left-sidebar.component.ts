import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard'
    },
    {
      routeLink: 'ds-map',
      icon: 'fal fa-map',
      label: 'Map'
    },
    {
      routeLink: 'portal',
      icon: 'fal fa-file',
      label: 'Portal'
    },
    {
      routeLink: 'contact',
      icon: 'fal fa-phone',
      label: 'Contact'
    }
  ]

  toggleCollapse(): void {
    this.changeLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSideNav(): void {
    this.changeLeftSidebarCollapsed.emit(true);
  }
}
