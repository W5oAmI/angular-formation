import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "./components/table/table.component";
import {AutoCompleteComponent} from "./components/auto-complete/auto-complete.component";
import {NgModule} from "@angular/core";

const routes : Routes = [
  { path: 'table', component: TableComponent },
  { path: '', component: AutoCompleteComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TableRoutingModule {}
