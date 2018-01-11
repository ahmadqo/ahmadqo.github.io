import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BerandaComponent } from './beranda/beranda.component';
import { ProfilComponent } from './profil/profil.component';
import { ProgramComponent } from './program/program.component';
import { InfoComponent } from './info/info.component';
import { BeritaComponent } from './berita/berita.component';
import { ArsipComponent } from './arsip/arsip.component';
import { LainnyaComponent } from './lainnya/lainnya.component';

export const appRoutes: Routes = [
    { path: 'beranda', component: BerandaComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'program', component: ProgramComponent },
    { path: 'info', component: InfoComponent },
    { path: 'berita', component: BeritaComponent },
    { path: 'arsip', component: ArsipComponent },
    { path: 'lainnya', component: LainnyaComponent },

    { path: '', redirectTo: '/beranda', pathMatch:'full' },
    //{ path: '**', redirectTo: '/beranda', pathMatch:'full' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
