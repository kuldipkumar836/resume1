import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skills/skill/skill.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'skills', loadChildren: './skills/skills.module#SkillsModule' },
  {path: 'experience', loadChildren: './skills/skills.module#SkillsModule'},
  {path: 'education', loadChildren: './academic/academic.module#AcademicModule' },
  {path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  {path: 'personal-info', loadChildren: './personal-info/personal-info.module#PersonalInfoModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
