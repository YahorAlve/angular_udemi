import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  // we need to give json (java script object) which has path and component(kinda page now) aplication should
  // redirect to. So we need to keepin mind that component should have evrething we want to show in new page
  // that is for locolhost:4200/users
  // 'users/:id' :id means anything in url after users/ will be considered like and id /users/something - something is id
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers', component: ServersComponent, children: [
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ]},
  {path: '', component: HomeComponent},
  {path: 'not-found', component: PageNotFoundComponent},
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
