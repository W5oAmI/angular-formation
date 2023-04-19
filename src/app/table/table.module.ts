import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import {NgMatModule} from "../ng-mat/ng-mat.module";




@NgModule({
  declarations: [
    TableComponent,
    AutoCompleteComponent
  ],
  imports: [
    CommonModule,
    NgMatModule

  ]
})
export class TableModule { }
