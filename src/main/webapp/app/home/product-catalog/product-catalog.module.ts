import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogComponent } from './product-catalog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'app/entities/product';
import { JhiAlertService } from 'ng-jhipster';
@NgModule({
    declarations: [ProductCatalogComponent],
    imports: [CommonModule, NgbModule, JhiAlertService],
    providers: [ProductService]
})
export class ProductCatalogModule {}
