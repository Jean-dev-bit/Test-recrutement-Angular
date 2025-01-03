import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="w-64 bg-[#F9FAFB] h-screen border-r border-[#EAECF0] px-1 py-3">
      <!-- Section Préparation de l'édition -->
      <div class="mb-6 bg-[#F3F3F5] rounded-lg">
        <div 
          class="p-3 text-[#4070B8] font-bold flex justify-between items-center cursor-pointer" 
          (click)="toggleEditionMenu()"
        >
          <span class="text-xs">Préparation de l'édition</span>
          <i 
            class="pi"
            [ngClass]="isEditionMenuOpen ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
            class="mr-2 text-xs"
          ></i>
        </div>
        <!-- Sous-menus -->
        <div *ngIf="isEditionMenuOpen" class="space-y-1">
          <div class="p-3 text-[#000000] hover:bg-gray-100 cursor-pointer flex rounded-lg justify-between">
            <span class="text-xs">Identification des établissements</span>
            <i class="pi pi-angle-right mr-2 text-xs"></i>
          </div>
          <div class="p-3 text-[#000000] hover:bg-gray-100 cursor-pointer flex rounded-lg justify-between">
            <span class="text-xs">Composition des équipes</span>
            <i class="pi pi-angle-right mr-2 text-xs"></i>
          </div>
          <div class="p-3 text-[#000000] hover:bg-gray-100 cursor-pointer flex rounded-lg justify-between">
            <span class="text-xs">Recrutement équipe GHM</span>
            <i class="pi pi-angle-right mr-2 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- Autres sections -->
      <div class="space-y-1">
        <div class="p-3 bg-[#4070B817] text-[#4070B8] flex items-center cursor-pointer rounded-lg">
          <span class="text-xs font-medium ml-auto mr-auto">Tableau de bord</span>
        </div>
        <div class="p-3 text-[#202020] hover:bg-gray-100 flex items-center justify-between cursor-pointer rounded-lg border-b-2">
          <div class="flex items-center gap-1">
            <i class="pi pi-briefcase mr-2 text-xs"></i>
            <span class="text-xs">Gestion de projet</span>
          </div>
          <i class="pi pi-angle-right mr-2 text-xs"></i>
        </div>
        <div class="p-3 text-[#202020] hover:bg-gray-100 flex items-center justify-between cursor-pointer rounded-lg border-b-2">
          <div class="flex items-center gap-1">
            <i class="pi pi-chart-line mr-2 text-xs"></i>
            <span class="text-xs">Suiv-évaluation</span>
          </div>
          <i class="pi pi-angle-right mr-2 text-xs"></i>
        </div>
        <div class="p-3 text-[#202020] hover:bg-gray-100 flex items-center justify-between cursor-pointer rounded-lg border-b-2">
          <div class="flex items-center gap-1">
            <i class="pi pi-users mr-2 text-xs"></i>
            <span class="text-xs">Gestion des ressources</span>
          </div>
          <i class="pi pi-angle-right mr-2 text-xs"></i>
        </div>
        <div class="p-3 text-[#202020] hover:bg-gray-100 flex items-center justify-between cursor-pointer rounded-lg border-b-2">
          <div class="flex items-center gap-1">
            <i class="pi pi-server mr-2 text-xs"></i>
            <span class="text-xs">Bibliothèque</span>
          </div>
          <i class="pi pi-angle-right mr-2 text-xs"></i>
        </div>
        <div class="p-3 text-[#202020] hover:bg-gray-100 flex items-center cursor-pointer rounded-lg">
          <i class="pi pi-cog mr-2 text-xs"></i>
          <span class="text-xs">Paramétrages</span>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  isEditionMenuOpen = false; 
  toggleEditionMenu() {
    this.isEditionMenuOpen = !this.isEditionMenuOpen; 
  }
}
