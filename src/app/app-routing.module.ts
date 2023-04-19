import {RouterModule, Routes} from "@angular/router";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./server/server.component";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";

const routes : Routes = [
  { path: 'servers', component: ServersComponent},
  { path: 'components', loadChildren: () => import('./table/table.module').then( m => m.TableModule)},
  { path: ':id', component: ServerComponent},
  { path: '', component: AppComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
