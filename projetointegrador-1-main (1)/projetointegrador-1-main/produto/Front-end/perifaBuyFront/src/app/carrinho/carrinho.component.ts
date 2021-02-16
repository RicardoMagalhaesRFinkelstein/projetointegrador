import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrinho } from '../model/carrinho';
import { Produto } from '../model/produto';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produto: Produto = new Produto();
  carrinho: Carrinho = new Carrinho();

  listaCarrinho: Carrinho[];

  preco: number = 0.0;

  constructor(
    private authService: AuthService,
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {

    window.scroll(0, 0)
    this.findAllCarrinho()
  }



  findAllCarrinho() {
    this.carrinhoService.getAllCarrinho().subscribe((resp: Carrinho[]) => {
      this.listaCarrinho = resp
      console.log(this.listaCarrinho)
    })
  }

  quantidade(event: any) {
    let precoInicio: number;
    precoInicio = 299.99;
    this.preco = precoInicio;
    this.preco = this.preco * event.target.value;
  }



  /*remover(id: number) {
    console.log(id)
    this.carrinhoService.DeleteById(id).subscribe(() => {
      alert('Removido do carrinho com sucesso')
      this.findAllCarrinho
      this.router.navigate(['/carrinho'])
    })
  }*/

  remover(id: number) {
    console.log(id);
    this.carrinhoService.deleteIdCarrinho(id).subscribe(() => { });
    console.log('chegay');
    alert('Removido do carrinho com sucesso!');
    this.findAllCarrinho();
  }
}
