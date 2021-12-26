/*
Componentes {
  HTML - CSS - TS
}

Diretivas {
  attribute Directives: Altera a aparência e o comportamento de um elemento, componente ou outra diretiva.

  @Directive({
    selector: '[appRed]'
  })
  export class RedDirective {
    constructor(el: ElementRef) {
      el.nativeElement.style.color = '#e35e6b';
    }
  }

  //HTML
  <i class="material-icons c-middle">favorite</i>
  <i class="material-icons c-middle" appRed>favorite</i>

  Stuctural Directives: Altera o layout adicionando e removendo elementos da DOM.

  <form *ngIf="product" class="product-form"></form>
  <ul>
    <li *ngFor="let product of products">
      {{ product.name }}
    </li>
  </ul>
}

Property Binding {
  one way data Binding:
  <table
    [dataSource]="products">

  <table/>

  event Binding: 
  <button mat-raised-button
  (click)="createProduct()"
  color="primary">
    Salvar
  </button>

  <input [value]="nome">
  // TS: nome: String;

  two way Data Binding:
  <input [(ngModel)]="nome">
  // TS: nome: String;
}

Rotas {
  Angular Router

  /home [comp. Home]
  /produto [comp. Prod]
  /usuario [Comp. Usuário]

  /Router outlet

  :{
    <a routerLink="/products">
      Produtos
    </a>

    const routes: Routes [{
      path: "products",
      components: ProductCrudComponent
    }, {
      path: "products/create",
      component: ProductCreateComponent
    }];

    <mat-sidenav-content>
      <router-oulet></router-oulet>
    </mat-sidenav-content>
  }
}

Pipes {
  Angular Pipes:
  <p>
    O vencimento é
    {{ produto.vencimento | date }}
  </p>


}

Observables {
  Programação Reativa (ReactiveX)

  import { Observable } from "rxjs";
  
  O padrão Observer: Padrçao orientado a Evento!
  
  Subject

  callbacks => Promises => Observables { reusável - stream dados - operadores }

  criarNoBackend(produto: Produto): Observable<Produto> {
    return this.httpp.post<Produto>(this.url, produto);
  }

  criarProduto(): void {
  this.criarNoBackend(this.produto).subscribe(() => this.exibirMensagem("Salvo com Sucesso!"));
  }
}

Services {
  São classes que têm como principal objetivo organizar e compartilhar métodos e dados entre componentes.
  
}

Injeção de depêndencia {
  É um padrão no qual a classe recebe as dependências de uma fonte externa ao invés de criar por conta própria.

  @Injectable: 
  
  Services são singletons dentro do escopo de um [injector] : MOduleInjector && ElementInjector.
  [MOduleInjector]: @NgModule && Injectable
  [ElementInjector]: @Directive && @Component
}

biding {
  
}

two-way-data-biding
*/

/*
generetors {
  ng new <name>
  ng g c <name>
  ng g @angular/material:table components/products/products-read2 // angular material schematics
  ng serve
}

*/