import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepositHistoryComponent } from './components/deposit-history/deposit-history.component';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { WithdrawHistoryComponent } from './components/withdraw-history/withdraw-history.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { InternalTransferComponent } from './components/internal-transfer/internal-transfer.component';
// import { InviteFriendComponent } from './components/invite-friend/invite-friend.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { ManageBounsesComponent } from './components/manage-bounses/manage-bounses.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { OpenRealAccountComponent } from './components/open-real-account/open-real-account.component';
import { OpenDemoAccountComponent } from './components/open-demo-account/open-demo-account.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EmailVerifyComponent } from './components/email-verify/email-verify.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'deposit-history', component: DepositHistoryComponent },
  { path: 'transfer-history', component: TransferHistoryComponent },
  { path: 'withdraw-history', component: WithdrawHistoryComponent },
  { path: 'user-status', component: UserStatusComponent },
  // { path: 'invite-friend', component: InviteFriendComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'internal-transfer', component: InternalTransferComponent },
  { path: 'account-list', component: AccountListComponent },
  { path: 'manage-bonuses', component: ManageBounsesComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'open-real-account', component: OpenRealAccountComponent },
  { path: 'open-demo-account', component: OpenDemoAccountComponent },
  { path: 'email-verification', component: EmailVerifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
