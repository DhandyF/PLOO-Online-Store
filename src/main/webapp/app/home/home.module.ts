import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';

@NgModule({
    imports: [JhipsterSharedModule, MatCardModule, MatButtonModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent, ProductCatalogComponent, ProductCarouselComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterHomeModule {}
