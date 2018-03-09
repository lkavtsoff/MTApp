import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { mtAppComponent } from './mtapp.component';
import { MseafComponent } from './mseaf/mseaf.component';
import { MhomeComponent } from './mhome/mhome.component';
import { MmenuComponent } from './mmenu/mmenu.component';

const mRoutes: Routes = [
  { path: '', component: MhomeComponent},
  {path: 'seafarers', component: MseafComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    mtAppComponent,
    MseafComponent,
    MhomeComponent,
    MmenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mRoutes)
  ],
  providers: [],
  bootstrap: [mtAppComponent]
})
export class mtAppModule { }
