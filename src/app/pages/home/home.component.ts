import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

import { ContentComponent } from '../../components/content/content.component';

import { SidebarComponent } from '../../components/sidebar/sidebar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    ContentComponent

  ],
  template: `
    <div class="flex flex-col h-screen">
          <!-- Header -->
          <app-header></app-header>

          <div class="flex flex-1">
            <!-- Sidebar -->
            <app-sidebar class="w-64"></app-sidebar>

            <!-- Content -->
            <app-content class="flex-1"></app-content>
          </div>
    </div>
  `
})
export class HomeComponent { }