import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTauxComponent } from '../card/cardTaux.component';
import { KitsComponent } from '../kits/kits.component';
import { SupervisionComponent } from '../supervision/supervision.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, CardTauxComponent, KitsComponent, SupervisionComponent],
  template: `
    <div class="p-6 bg-slate-100 shadow-md h-full">
      <div class="flex gap-6 mb-4">
          <div class="relative w-[300px]">
            <input
              type="text"
              id="id"
              name="name"
              placeholder="Tous les établissements"
              class="w-full text-[#202020] rounded-lg py-2 px-2 outline-none bg-white text-xs placeholder:text-[#202020]"
            />
            <i
              class="pi pi-caret-down absolute top-1/2 right-3 transform -translate-y-1/2 text-xs text-gray-500 pointer-events-none"
            ></i>
          </div>
          <div class="relative w-[300px]">
                <input
                  type="text"
                  id="id"
                  name="name"
                  placeholder="Toutes les communes"
                  class="w-full text-[#202020] rounded-lg py-2 px-2 outline-none bg-white text-xs placeholder:text-[#202020]"
                />
                <i
                  class="pi pi-caret-down absolute top-1/2 right-3 transform -translate-y-1/2 text-xs text-gray-500 pointer-events-none"
                ></i>
          </div>
      </div>
      <div classs="flex-col gap-6 mb-4">
        <div>
              <app-cardTaux></app-cardTaux>
        </div>
        <div class="mt-4">
               <app-kits></app-kits>
        </div>
        <div class="mt-4">
               <app-supervision></app-supervision>
        </div>
      </div>


</div>  
  `,
})
export class ContentComponent { 
  isEditionMenuOpen = false; 
  toggleEditionMenu() {
    this.isEditionMenuOpen = !this.isEditionMenuOpen; 
  }
}
