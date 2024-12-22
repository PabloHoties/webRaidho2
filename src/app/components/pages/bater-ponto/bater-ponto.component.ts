import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from
  '@angular/forms';
import { NavbarComponent } from "../../layout/navbar/navbar.component";

@Component({
  selector: 'app-bater-ponto',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent
],
  templateUrl: './bater-ponto.component.html',
  styleUrl: './bater-ponto.component.css'
})
export class BaterPontoComponent {

  constructor(
    private httpClient: HttpClient
  ) { }

  form = new FormGroup({
    funcionario_id: new FormControl('ffc4cc44-685e-445f-b4ba-9674099ad356', Validators.required),
    operacao: new FormControl('', Validators.required),
    latitude: new FormControl('76.044346', Validators.required),
    longitude: new FormControl('-154.763957', Validators.required),
  })

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.httpClient.post('http://localhost:8091/api/historico',
      this.form.value)
      .subscribe({
        next: (data) => {
          alert('Ponto batido com sucesso!');
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }
}
