import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, AvatarModule],
  template: `
  <nav class="h-16 bg-white border-b flex items-center justify-between px-6">
      <!-- Left side -->
      <div class="w-56 flex items-center justify-between gap-4">
        <img src="../assets/images/logo.png" alt="" class="h-[57px] w-[126px] top-[11px] left-[21px]">
        <button class="bg-slate-200 p-1 rounded-sm">
          <i class="pi pi-angle-double-left text-xs text-[#4070B8]"></i>
        </button>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-6">
            <div class="relative">
                    <i class="pi pi-bell text-[#4070B8] text-xs cursor-pointer bg-slate-200 rounded-full p-2"></i>
                    <span class="absolute top-0 right-0 bg-[#EE201C] rounded-full w-2.5 h-2.5"></span>
            </div>

            <div class="flex items-center gap-3 bg-[#F5F7FA] p-2 rounded-full">
                <div class="w-8 h-8 text-[#4070B8] bg-slate-200 rounded-full flex items-center justify-center">
                  <i class="pi pi-user text-xs"></i>
                </div>
                <div class="flex flex-col justify-between">
                  <span class="text-[#4070B8] text-xs">Sara AMAGEDJI</span>
                  <span class="text-[#4070B8] text-xs">Administrateur</span>
                </div>
                <i class="pi pi-chevron-down text-blue-500 text-xs"></i>
            </div>

      </div>
    </nav>
  `
})
export class HeaderComponent { }
