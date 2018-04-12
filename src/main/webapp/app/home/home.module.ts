import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MonoliticSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';

import {ButtonModule} from 'primeng/button';

@NgModule({
    imports: [
        MonoliticSharedModule,
        RouterModule.forChild([ HOME_ROUTE ]),
        ButtonModule
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonoliticHomeModule {}
