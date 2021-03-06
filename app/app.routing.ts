import { RouterModule, Routes }     from "@angular/router";

import { HomeComponent }    from "./home.component";
import { NotFoundComponent }    from "./not-found.component";

export const appRouterModule = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
]);