import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver.service';


const appRoutes: Routes = [
  // we need to give json (java script object) which has path and component(kinda page now) aplication should
  // redirect to. So we need to keepin mind that component should have evrething we want to show in new page
  // that is for locolhost:4200/users
  // 'users/:id' :id means anything in url after users/ will be considered like and id /users/something - something is id
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers',
      // canActivate: [AuthGuardService],
      component: ServersComponent,
      // sometimes we want activate guard only for children and we can do it by adding to each child canActiveate
      // what is not the best way to do, or by adding property canActivateChild
      canActivateChild: [AuthGuardService],
    children: [
    // Each time route will be loaded angular will execute resolve from ServerResolverService and return the property or observable
    {path: ':id', component: ServerComponent, resolve: {server: ServerResolverService}},
    // Now Angular will run this CandeactivateGuardService each time we are trying to leave this path
    {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]}
  ]},
  {path: '', component: HomeComponent},
  // {path: 'not-found', component: PageNotFoundComponent},
  // we can pass static data to Component by using data porperty
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Error Message !'}},
  // wildcards should be placed as last elemnt in Routes[] otherwise everething would be redirected to not found
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
