import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supervision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#FFFFFF] shadow-sm rounded-md p-4">
  <!-- Titre principal -->
  <div class="flex items-center justify-between cursor-pointer" (click)="toggleEditionMenu()">
    <h2 class="text-xs font-semibold text-[#4070B8]">
      SUPERVISION DE L’EQUIPE PROJET
    </h2>
    <i
      class="pi"
      [ngClass]="isEditionMenuOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-up'"
      class="text-blue-500 text-xs"
    ></i>
  </div>

  <!-- Tableau affiché en fonction de l'état -->
  <div *ngIf="isEditionMenuOpen" class="mt-4">
    <div class="overflow-hidden rounded-md border border-[#EAECF0]">
      <table class="w-full text-xs border-collapse">
        <!-- En-tête -->
        <thead class="bg-[#4070B8] text-white">
          <tr>
            <th class="p-2 text-left"></th>
            <th class="p-2">Oct</th>
            <th class="p-2">Nov</th>
            <th class="p-2">Dec</th>
            <th class="p-2">Jan</th>
            <th class="p-2">Fev</th>
            <th class="p-2">Mars</th>
            <th class="p-2">Avr</th>
            <th class="p-2">Mai</th>
          </tr>
        </thead>
        <!-- Corps du tableau -->
        <tbody>
          <tr>
            <td class="p-2 text-gray-500">Bopa</td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2 text-[#EE201C] font-bold">X</td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
          </tr>
          <tr>
            <td class="p-2 text-gray-500">Bohicon</td>
            <td class="p-2 text-[#40B394]">V</td>
            <td class="p-2 text-[#40B394]">V</td>
            <td class="p-2 text-[#EE201C] font-bold">X</td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
          </tr>
          <tr>
            <td class="p-2 text-gray-500">Djougou Zountori</td>
             <td class="p-2 text-[#EE201C] font-bold">X</td>
            <td class="p-2 text-[#40B394]">V</td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2 text-[#40B394]">V</td>
            <td class="p-2 text-[#40B394]">V</td>
            <td class="p-2 text-[#40B394]">V</td>
          </tr>
          <tr>
            <td class="p-2 text-gray-500">Djougou Taïfa</td>
            <td class="p-2 text-[#40B394]">V</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  `,
})
export class SupervisionComponent {
  isEditionMenuOpen = false;

  toggleEditionMenu() {
    this.isEditionMenuOpen = !this.isEditionMenuOpen;
  }
}
