import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [JhipsterSharedModule, MatCardModule, MatButtonModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent, ProductCatalogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterHomeModule {}
