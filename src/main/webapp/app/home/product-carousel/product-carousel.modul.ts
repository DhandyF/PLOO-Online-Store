import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarouselComponent } from './product-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'app/entities/product';
import { JhiAlertService } from 'ng-jhipster';
@NgModule({
    declarations: [ProductCarouselComponent],
    imports: [CommonModule, NgbModule, JhiAlertService],
    providers: [ProductService]
})
export class ProductCarouselModule {}
