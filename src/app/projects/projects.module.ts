import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SmartExamComponent } from './smart-exam/smart-exam.component';
import { ShopZoneComponent } from './shop-zone/shop-zone.component';
import { SocialComponent } from './social/social.component';
import { DhamalMusicComponent } from './dhamal-music/dhamal-music.component';
import { ListsComponent } from './lists/lists.component';

@NgModule({
  declarations: [SmartExamComponent, ShopZoneComponent, SocialComponent, DhamalMusicComponent, ListsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
