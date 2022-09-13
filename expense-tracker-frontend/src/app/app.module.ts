import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routers: Routes = [
  { path: 'expenses', component: ListExpensesComponent },
  { path: 'addexpense', component: AddExpenseComponent },
  { path: 'editexpense/:id', component: AddExpenseComponent },
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, ListExpensesComponent, AddExpenseComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
