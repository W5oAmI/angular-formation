import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableRoutingModule} from "../table/table-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    TableRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule
  ]
})
export class NgMatModule { }
