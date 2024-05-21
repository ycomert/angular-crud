// src/app/components/category-add/category-add.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService, Category } from '../../services/category.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ]
})
export class CategoryAddComponent {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private router: Router,) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const category: Category = this.categoryForm.value;
      this.categoryService.addCategory(category).subscribe(() => {
        console.log('Category added successfully');
        // Geçici bir route'a gidip tekrar geri dön
        this.router.navigateByUrl('/categories', { skipLocationChange: true }).then(() => {
          this.router.navigate(['']); // 'add-category' route'u sizin form component'inizin route'u olmalı.
        });
      });
    }
  }
}

