import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LayoutComponent,
    RouterModule,
    ProductListComponent,
    CategoryListComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
