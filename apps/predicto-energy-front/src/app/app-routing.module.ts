import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { RoutePredictoEnergy } from '../../../../libs/shared/data/src/lib/enum/route-predicto-energy.enum';

const routes: Routes = [
    {
        path: '',
        component: MainContainerComponent,
        children: [
            {
                path: RoutePredictoEnergy.ActionPlan,
                loadChildren: () => import('@predicto-energy-front/action-plan').then(m => m.ActionPlanModule),
            },
            { path: '', redirectTo: RoutePredictoEnergy.ActionPlan, pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            paramsInheritanceStrategy: 'always',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}


