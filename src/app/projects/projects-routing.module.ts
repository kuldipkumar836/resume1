import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartExamComponent } from './smart-exam/smart-exam.component';
import { ShopZoneComponent } from './shop-zone/shop-zone.component';
import { SocialComponent } from './social/social.component';
import { DhamalMusicComponent } from './dhamal-music/dhamal-music.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
 { path: 'list', component: ListsComponent },
 { path: 'smart-exam', component: SmartExamComponent },
 { path: 'shop-zone', component: ShopZoneComponent },
 { path: 'social', component: SocialComponent },
 { path: 'dhamal-music', component: DhamalMusicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
