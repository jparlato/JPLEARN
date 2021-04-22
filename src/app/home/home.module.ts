import { CommonModule } from '@angular/common';
import { FolderPageRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
