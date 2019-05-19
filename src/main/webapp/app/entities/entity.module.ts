import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'product',
                loadChildren: './product/product.module#JhipsterProductModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#JhipsterProductCategoryModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#JhipsterCustomerModule'
            },
            {
                path: 'product-order',
                loadChildren: './product-order/product-order.module#JhipsterProductOrderModule'
            },
            {
                path: 'order-item',
                loadChildren: './order-item/order-item.module#JhipsterOrderItemModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#JhipsterInvoiceModule'
            },
            {
                path: 'shipment',
                loadChildren: './shipment/shipment.module#JhipsterShipmentModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
