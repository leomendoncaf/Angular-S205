import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ProdutoDTO } from 'src/app/dtos/produto.dto';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss']
})
export class ProdutoTabelaComponent {

  produtos : ProdutoDTO[] = [];
  constructor( private service: ProdutoService ) {
    this.service.findAll()
      .subscribe({
        next: (data) => this.produtos = data
        ,
        error: (e) => console.error( e )
      });

    }
    
}