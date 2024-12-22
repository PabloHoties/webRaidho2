import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";

export enum Operacao {
  EXPEDIENTE_INICIO = 'EXPEDIENTE_INICIO',
  ALMOÇO_INICIO = 'ALMOÇO_INICIO',
  ALMOÇO_FIM = 'ALMOÇO_FIM',
  EXPEDIENTE_FIM = 'EXPEDIENTE_FIM'
}
@Component({
  selector: 'app-historico',
  imports: [
    CommonModule,
    NavbarComponent
],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css',
})

export class HistoricoComponent {
  historico: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('http://localhost:8091/api/historico/obterPorIdDeFuncionarioHoje/ffc4cc44-685e-445f-b4ba-9674099ad356').subscribe({
      //aguardando a API retornar uma resposta
      next: (data) => {
        //capturando os dados retornados pela API
        //data: nome de variável que está capturando o retorno da API
        this.historico = data as any[];
      },
    });
  }
  mapOperacao(operacao: Operacao): string {
    switch (operacao) {
      case Operacao.EXPEDIENTE_INICIO:
        return 'Início do Expediente';
      case Operacao.ALMOÇO_INICIO:
        return 'Início do Almoço';
      case Operacao.ALMOÇO_FIM:
        return 'Fim do Almoço';
      case Operacao.EXPEDIENTE_FIM:
        return 'Fim do Expediente';
      default:
        return 'Desconhecido';
    }
  }
}
