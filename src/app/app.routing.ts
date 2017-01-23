import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { PersonalsComponent } from './personals/personals.component';
import { HousingComponent } from './housing/housing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'personals',
    component: PersonalsComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
