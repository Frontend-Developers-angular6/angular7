import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatMenuModule, MatTabsModule, MatToolbarModule, MatInputModule, MatTooltipModule, MatSnackBarModule,MatBadgeModule,MatStepperModule,MatTableModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './layout/home-header/home-header.component';
import { HomeFooterComponent } from './layout/home-footer/home-footer.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { EmployeeComponent } from './modules/employees/employee/employee.component';
import { EmployeeService } from './modules/shared/employee.service';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeComponent,
    EmployeeComponent,
    HomeLayoutComponent,
    EmployeeListComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    // EmployeesModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatBadgeModule,
    MatStepperModule,
    MatTableModule,
    FlexLayoutModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

  entryComponents: [
    EmployeeComponent,
  ],
  providers: [EmployeeService,EmployeeListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

