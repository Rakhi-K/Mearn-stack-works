import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AnimationComponent } from './animation/animation.component';
///import { AnimationModule} from './animation/platform-browser/';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    TransactionHistoryComponent,
    DeleteConfirmationComponent,
    HighlightDirective,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    //BrowserAnimationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
