import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountListComponent } from './components/account-list/account-list.component';
import { ManageBounsesComponent } from './components/manage-bounses/manage-bounses.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { OpenRealAccountComponent } from './components/open-real-account/open-real-account.component';
import { OpenDemoAccountComponent } from './components/open-demo-account/open-demo-account.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { InternalTransferComponent } from './components/internal-transfer/internal-transfer.component';
import { WithdrawHistoryComponent } from './components/withdraw-history/withdraw-history.component';
import { DepositHistoryComponent } from './components/deposit-history/deposit-history.component';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './components/interceptors/auth.interceptor';
import { ApiService } from './services/api.service';
// import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonSpinnerService } from './services/common-spinner.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
    SignUpComponent,
    AccountListComponent,
    ManageBounsesComponent,
    MonitoringComponent,
    OpenRealAccountComponent,
    OpenDemoAccountComponent,
    UserStatusComponent,
    WithdrawComponent,
    InternalTransferComponent,
    WithdrawHistoryComponent,
    DepositHistoryComponent,
    TransferHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    ApiService,
    AuthInterceptor,
    CommonSpinnerService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
