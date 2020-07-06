import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'skills', component: SkillComponent },
  {path: 'experience', component: ExperienceComponent },
  {path: 'education', component: EducationComponent },
  {path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  {path: 'contactme', component: ContactUsComponent },
  {path: 'aboutme', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
