import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { CoursesComponent } from './courses/courses.component';


export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'gallery', component: GalleryComponent },
    { path: 'registartion', component: RegistrationComponent },
    {path:'contactus',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'restapi',component:RestApiComponent},
    {path:'courses',component:CoursesComponent}
];


export const routes = RouterModule.forRoot(router);