import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-kits',
    standalone: true,
    imports: [CommonModule],
    template: `
  <div class="bg-[#FFFFFF] shadow-sm rounded-md p-4">
      <!-- Titre principal -->
        <div class="flex items-center justify-between"  (click)="toggleEditionMenu()"> 
            <h2 class="text-xs font-semibold text-[#4070B8] mb-2">
            NB DE KITS RESTANTS
            </h2>
            <i class="pi" [ngClass]="isEditionMenuOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-up'" class="text-blue-500 text-xs mt-[-10px]"></i>
        </div>
        <div *ngIf="isEditionMenuOpen" class="space-y-3">
                        
            <div class="grid grid-cols-4 gap-6">
                        <!-- Carte individuelle -->
                        <div class="bg-white rounded-lg shadow-md p-0">
                        <div class="bg-[#EE201C] p-3 rounded-t-lg flex justify-between items-center">
                            <h4 class="text-white text-xs font-bold">BANTÈ</h4>
                            <span class="text-xs font-bold text-white">113
                             <i class="pi pi-exclamation-triangle mr-2 text-xs"></i>
                            </span>
                        </div>

                        <!-- Détails -->
                        <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
                        <span class="text-[#202020] text-xs font-semibold">Types de Kits</span>
                        <span class="text-[#202020] text-xs font-semibold">Nombres restants</span>
                        </div>

                        <!-- Prémière ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Kits moyens de 4</span>
                            <span class="text-gray-500 text-xs">0</span>
                        </div>
                        <!-- 2ème ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Kits moyens de 2</span>
                            <span class="text-gray-500 text-xs">72</span>
                        </div>
                        <!-- 3ème ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Grands kits de 4</span>
                            <span class="text-gray-500 text-xs">41</span>
                        </div>
                        <!-- 4eme ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Grands kits de 2</span>
                            <span class="text-gray-500 text-xs">0</span>
                        </div>
                    </div>    
                <!-- 2e carte -->
                    <div class="bg-white rounded-lg shadow-md p-0">
                        <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
                            <h4 class="text-white text-xs font-bold">COMÈ</h4>
                            <span class="text-xs font-bold text-white">890</span>
                        </div>

                        <!-- Détails -->
                        <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
                        <span class="text-[#202020] text-xs font-semibold">Types de Kits</span>
                        <span class="text-[#202020] text-xs font-semibold">Nombres restants</span>
                        </div>

                        <!-- Prémière ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Kits moyens de 4</span>
                            <span class="text-gray-500 text-xs">100</span>
                        </div>
                        <!-- 2ème ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Kits moyens de 2</span>
                            <span class="text-gray-500 text-xs">280</span>
                        </div>
                        <!-- 3ème ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Grands kits de 4</span>
                            <span class="text-gray-500 text-xs">310</span>
                        </div>
                        <!-- 4eme ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Grands kits de 2</span>
                            <span class="text-gray-500 text-xs">200</span>
                        </div>
                    </div>   
                <!-- 3e carte -->
                    <div class="bg-white rounded-lg shadow-md p-0">
                        <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
                            <h4 class="text-white text-xs font-bold">HOUÉYOGBÉ</h4>
                            <span class="text-xs font-bold text-white">1070</span>
                        </div>

                        <!-- Détails -->
                        <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
                        <span class="text-[#202020] text-xs font-semibold">Types de Kits</span>
                        <span class="text-[#202020] text-xs font-semibold">Nombres restants</span>
                        </div>

                        <!-- Prémière ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Kits moyens de 4</span>
                            <span class="text-gray-500 text-xs">500</span>
                        </div>
                        <!-- 2ème ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Kits moyens de 2</span>
                            <span class="text-gray-500 text-xs">300</span>
                        </div>
                        <!-- 3ème ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Grands kits de 4</span>
                            <span class="text-gray-500 text-xs">200</span>
                        </div>
                        <!-- 4eme ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Grands kits de 2</span>
                            <span class="text-gray-500 text-xs">70</span>
                        </div>
                    </div>   
                    <!-- 4e carte -->

                    <div class="bg-white rounded-lg shadow-md p-0">
                        <div class="bg-[#EE201C] p-3 rounded-t-lg flex justify-between items-center">
                            <h4 class="text-white text-xs font-bold">SAVALOU</h4>
                            <span class="text-xs font-bold text-white">113
                            <i class="pi pi-exclamation-triangle mr-2 text-xs"></i>
                            </span>
                        </div>

                        <!-- Détails -->
                        <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
                        <span class="text-[#202020] text-xs font-semibold">Types de Kits</span>
                        <span class="text-[#202020] text-xs font-semibold">Nombres restants</span>
                        </div>

                        <!-- Prémière ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Kits moyens de 4</span>
                            <span class="text-gray-500 text-xs">0</span>
                        </div>
                        <!-- 2ème ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Kits moyens de 2</span>
                            <span class="text-gray-500 text-xs">72</span>
                        </div>
                        <!-- 3ème ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Grands kits de 4</span>
                            <span class="text-gray-500 text-xs">41</span>
                        </div>
                        <!-- 4eme ligne -->
                        <div class="flex items-center justify-between p-2 border-b-2">
                            <span class="text-gray-500 text-xs">Grands kits de 2</span>
                            <span class="text-gray-500 text-xs">0</span>
                        </div>
                    </div>   
                </div>

                </div>

</div>   
`,

})

export class KitsComponent {
    isEditionMenuOpen = false;
    toggleEditionMenu() {
        this.isEditionMenuOpen = !this.isEditionMenuOpen;
    }
}