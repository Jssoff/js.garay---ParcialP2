import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';

const routes: Routes = [
  { path: '', component: TrainerListComponent },  
  { path: 'detail/:id', component: TrainerDetailComponent },  
];

@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ]
})
export class TrainerModule {}
