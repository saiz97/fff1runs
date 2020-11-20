import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { DrawPositionComponent } from './draw-position/draw-position.component';
import { HistoryComponent } from './history/history.component';
import { RunsResolverService } from './stopwatch/runs-resolver.service';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/stopwatch', pathMatch: 'full'},
  { path: 'stopwatch',
      component: StopwatchComponent
  },
  { path: 'draw', component: DrawPositionComponent },
  { path: 'history',
      component: HistoryComponent,
      resolve: [RunsResolverService]
  },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
