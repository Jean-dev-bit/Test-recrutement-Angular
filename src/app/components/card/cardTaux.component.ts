import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardTaux',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="bg-[#FFFFFF] shadow-sm rounded-md p-4">
      <!-- Titre principal -->
      <div class="flex items-center justify-between"  (click)="toggleEditionMenu()"> 
          <h2 class="text-xs font-semibold text-[#4070B8] mb-2">
          TAUX DE RÉALISATION DES FORMATIONS
          </h2>
          <i class="pi" [ngClass]="isEditionMenuOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-up'" class="text-blue-500 text-xs mt-[-10px]"></i>
      </div>
  <div *ngIf="isEditionMenuOpen" class="space-y-3">
      <hr />
      <h3 class="text-xs font-bold text-[#4070B8] my-2">
        1ère formation des filles - 1er cycle
      </h3>

      <!-- 1ere Carte -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Carte individuelle -->
        <div class="bg-white rounded-lg shadow-md p-0">
          <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
            <h4 class="text-white text-xs font-bold">COMÈ</h4>
            <span class="text-xs font-bold text-white">45/45</span>
            <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
            </div>
            <span class="text-sm font-bold text-white">100%</span>
          </div>

          <!-- Détails -->
          <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
          <span class="text-[#202020] text-xs font-semibold">Établissements</span>
          <span class="text-[#202020] text-xs font-semibold">Nombres de classes</span>
          <span class="text-[#202020] text-xs font-semibold">Progression</span>
          <span class="text-[#202020] text-xs font-semibold">Pourcentage</span>
          </div>

        <!-- Prémière ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 2 COMÈ</span>
              <span class="text-gray-500 text-xs">12/12</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
        <!-- Deuxième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 4 COMÈ</span>
              <span class="text-gray-500 text-xs">11/11</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
        <!-- Troisième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG AKODEHA</span>
              <span class="text-gray-500 text-xs">22/22</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>

          
        

    </div>  
 <!-- 2e carte -->
     <div class="bg-white rounded-lg shadow-md p-0">
          <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
            <h4 class="text-white text-xs font-bold">BANTÈ</h4>
            <span class="text-xs font-bold text-white">10/16</span>
            <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-2 bg-[#FFA500] rounded-full" style="width: 60%"></div>
            </div>
            <span class="text-sm font-bold text-white">60%</span>
          </div>

          <!-- Détails -->
          <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
          <span class="text-[#202020] text-xs font-semibold">Établissements</span>
          <span class="text-[#202020] text-xs font-semibold">Nombres de classes</span>
          <span class="text-[#202020] text-xs font-semibold">Progression</span>
          <span class="text-[#202020] text-xs font-semibold">Pourcentage</span>
          </div>

        <!-- Prémière ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 1 BANTÈ</span>
              <span class="text-gray-500 text-xs">2/6</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#EE201C] rounded-full" style="width: 20%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">20%</span>
          </div>
        <!-- Deuxième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG AKPASSI</span>
              <span class="text-gray-500 text-xs">2/4</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#FFA500] rounded-full" style="width: 50%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">50%</span>
          </div>
        <!-- Troisième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG ANOUDE</span>
              <span class="text-gray-500 text-xs">6/6</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>

          
        

    </div>  
 <!-- 3e carte -->
     <div class="bg-white rounded-lg shadow-md p-0">
          <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
            <h4 class="text-white text-xs font-bold">HOUÉYOGBÉ</h4>
            <span class="text-xs font-bold text-white">20/51</span>
            <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-2 bg-[#EE201C] rounded-full" style="width: 10%"></div>
            </div>
            <span class="text-sm font-bold text-white">10%</span>
          </div>

          <!-- Détails -->
          <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
          <span class="text-[#202020] text-xs font-semibold">Établissements</span>
          <span class="text-[#202020] text-xs font-semibold">Nombres de classes</span>
          <span class="text-[#202020] text-xs font-semibold">Progression</span>
          <span class="text-[#202020] text-xs font-semibold">Pourcentage</span>
          </div>

        <!-- Prémière ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG HOUÉYOGBÉ</span>
              <span class="text-gray-500 text-xs text-center">20/24</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#EE201C] rounded-full" style="width: 45%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">45%</span>
          </div>
        <!-- Deuxième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 1 DOUTOU</span>
              <span class="text-gray-500 text-xs text-center">4/19</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#EE201C] rounded-full" style="width: 21%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">21%</span>
          </div>
        <!-- Troisième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG AHOULOUMÈ</span>
              <span class="text-gray-500 text-xs text-center">3/8</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#EE201C] rounded-full" style="width: 35%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">35%</span>
          </div>

          
        

    </div>  

     <!-- 4e carte -->

     <div class="bg-white rounded-lg shadow-md p-0">
          <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
            <h4 class="text-white text-xs font-bold">SAVALOU</h4>
            <span class="text-xs font-bold text-white">44/44</span>
            <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
            </div>
            <span class="text-sm font-bold text-white">100%</span>
          </div>

          <!-- Détails -->
          <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
          <span class="text-[#202020] text-xs font-semibold">Établissements</span>
          <span class="text-[#202020] text-xs font-semibold">Nombres de classes</span>
          <span class="text-[#202020] text-xs font-semibold">Progression</span>
          <span class="text-[#202020] text-xs font-semibold">Pourcentage</span>
          </div>

        <!-- Prémière ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 1 SAVALOU</span>
              <span class="text-gray-500 text-xs text-center">24/24</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
        <!-- Deuxième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 2 SAVALOU</span>
              <span class="text-gray-500 text-xs text-center">11/11</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
        <!-- Troisième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG TCHOGODO</span>
              <span class="text-gray-500 text-xs text-center">9/9</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>

          
        

    </div>  
</div>

      <hr class="my-4" />
      <h3 class="text-xs font-bold text-[#4070B8] my-2">
        1ère formation des filles - 2nd cycle
      </h3>


                <!-- 1ere Carte -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Carte individuelle -->
        <div class="bg-white rounded-lg shadow-md p-0">
          <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
            <h4 class="text-white text-xs font-bold">COMÈ</h4>
            <span class="text-xs font-bold text-white">45/45</span>
            <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
            </div>
            <span class="text-sm font-bold text-white">100%</span>
          </div>

          <!-- Détails -->
          <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
          <span class="text-[#202020] text-xs font-semibold">Établissements</span>
          <span class="text-[#202020] text-xs font-semibold">Nombres de classes</span>
          <span class="text-[#202020] text-xs font-semibold">Progression</span>
          <span class="text-[#202020] text-xs font-semibold">Pourcentage</span>
          </div>

        <!-- Prémière ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 2 COMÈ</span>
              <span class="text-gray-500 text-xs">12/12</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
        <!-- Deuxième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 4 COMÈ</span>
              <span class="text-gray-500 text-xs">11/11</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
        <!-- Troisième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG AKODEHA</span>
              <span class="text-gray-500 text-xs">22/22</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>

          
        

    </div>  
 <!-- 2e carte -->
     <div class="bg-white rounded-lg shadow-md p-0">
          <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
            <h4 class="text-white text-xs font-bold">BANTÈ</h4>
            <span class="text-xs font-bold text-white">10/16</span>
            <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-2 bg-[#FFA500] rounded-full" style="width: 60%"></div>
            </div>
            <span class="text-sm font-bold text-white">60%</span>
          </div>

          <!-- Détails -->
          <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
          <span class="text-[#202020] text-xs font-semibold">Établissements</span>
          <span class="text-[#202020] text-xs font-semibold">Nombres de classes</span>
          <span class="text-[#202020] text-xs font-semibold">Progression</span>
          <span class="text-[#202020] text-xs font-semibold">Pourcentage</span>
          </div>

        <!-- Prémière ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 1 BANTÈ</span>
              <span class="text-gray-500 text-xs">2/6</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#EE201C] rounded-full" style="width: 20%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">20%</span>
          </div>
        <!-- Deuxième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG AKPASSI</span>
              <span class="text-gray-500 text-xs">2/4</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#FFA500] rounded-full" style="width: 50%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">50%</span>
          </div>
        <!-- Troisième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG ANOUDE</span>
              <span class="text-gray-500 text-xs">6/6</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>

          
        

    </div>  
 <!-- 3e carte -->
     <div class="bg-white rounded-lg shadow-md p-0">
          <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
            <h4 class="text-white text-xs font-bold">HOUÉYOGBÉ</h4>
            <span class="text-xs font-bold text-white">20/51</span>
            <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-2 bg-[#EE201C] rounded-full" style="width: 10%"></div>
            </div>
            <span class="text-sm font-bold text-white">10%</span>
          </div>

          <!-- Détails -->
          <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
          <span class="text-[#202020] text-xs font-semibold">Établissements</span>
          <span class="text-[#202020] text-xs font-semibold">Nombres de classes</span>
          <span class="text-[#202020] text-xs font-semibold">Progression</span>
          <span class="text-[#202020] text-xs font-semibold">Pourcentage</span>
          </div>

        <!-- Prémière ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG HOUÉYOGBÉ</span>
              <span class="text-gray-500 text-xs text-center">20/24</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#EE201C] rounded-full" style="width: 45%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">45%</span>
          </div>
        <!-- Deuxième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 1 DOUTOU</span>
              <span class="text-gray-500 text-xs text-center">4/19</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#EE201C] rounded-full" style="width: 21%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">21%</span>
          </div>
        <!-- Troisième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG AHOULOUMÈ</span>
              <span class="text-gray-500 text-xs text-center">3/8</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#EE201C] rounded-full" style="width: 35%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">35%</span>
          </div>

          
        

    </div>  

     <!-- 4e carte -->

     <div class="bg-white rounded-lg shadow-md p-0">
          <div class="bg-[#4070B8] p-3 rounded-t-lg flex justify-between items-center">
            <h4 class="text-white text-xs font-bold">SAVALOU</h4>
            <span class="text-xs font-bold text-white">44/44</span>
            <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
            </div>
            <span class="text-sm font-bold text-white">100%</span>
          </div>

          <!-- Détails -->
          <div class="flex items-center justify-between bg-blue-100 p-2 -mt-[1px]">
          <span class="text-[#202020] text-xs font-semibold">Établissements</span>
          <span class="text-[#202020] text-xs font-semibold">Nombres de classes</span>
          <span class="text-[#202020] text-xs font-semibold">Progression</span>
          <span class="text-[#202020] text-xs font-semibold">Pourcentage</span>
          </div>

        <!-- Prémière ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 1 SAVALOU</span>
              <span class="text-gray-500 text-xs text-center">24/24</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
        <!-- Deuxième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG 2 SAVALOU</span>
              <span class="text-gray-500 text-xs text-center">11/11</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
        <!-- Troisième ligne -->
          <div class="flex items-center justify-between p-2 border-b-2">
              <span class="text-gray-500 text-xs">CEG TCHOGODO</span>
              <span class="text-gray-500 text-xs text-center">9/9</span>
              <span class="text-gray-500 text-xs  text-right">
                <div class="h-2 bg-gray-300 rounded-full">
                    <div class="h-2 bg-[#40B394] rounded-full" style="width: 100%"></div>
                  </div>
              </span>
              <span class="text-gray-500 text-xs">100%</span>
          </div>
  `,
})
export class CardTauxComponent { 
  isEditionMenuOpen = false; 
  toggleEditionMenu() {
    this.isEditionMenuOpen = !this.isEditionMenuOpen; 
  }
}
