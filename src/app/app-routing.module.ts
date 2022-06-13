import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonChartsComponent } from './components/common-charts/common-charts.component';

const routes: Routes = [
    {
        path: '',
        component: CommonChartsComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
