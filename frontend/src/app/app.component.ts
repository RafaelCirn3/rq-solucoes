import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MOCK_COMPANIES } from './mock-catalog';
import { Product } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly companies = MOCK_COMPANIES;
  readonly search = signal('');

  readonly filteredCompanies = computed(() => {
    const query = this.search().trim().toLowerCase();
    if (!query) return this.companies;
    return this.companies.map((company) => ({
      ...company,
      products: company.products.filter((product) =>
        [company.name, product.name, product.model, product.category, product.application]
          .join(' ').toLowerCase().includes(query)
      )
    })).filter((company) => company.products.length > 0);
  });

  whatsappLink(product: Product): string {
    const message = `Olá, gostaria de solicitar informações sobre o produto ${product.name} (${product.model}).`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
}
