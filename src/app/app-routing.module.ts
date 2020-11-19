import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { DrawPositionComponent } from './draw-position/draw-position.component';
import { HistoryComponent } from './history/history.component';
import { RunsResolverService } from './stopwatch/runs-resolver.service';

import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/stopwatch', pathMatch: 'full'},
  { path: 'stopwatch',
      component: StopwatchComponent,
      resolve: [RunsResolverService] },
  { path: 'draw', component: DrawPositionComponent },
  { path: 'history',
      component: HistoryComponent,
      resolve: [RunsResolverService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
