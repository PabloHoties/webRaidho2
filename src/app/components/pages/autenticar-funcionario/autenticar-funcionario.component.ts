import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autenticar-funcionario',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './autenticar-funcionario.component.html',
  styleUrl: './autenticar-funcionario.component.css'
})
export class AutenticarFuncionarioComponent {

  constructor(
    private httpClient: HttpClient
  ) { }

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.email])
  })

  onSubmit() {
    this.httpClient.post('http://localhost:8091/api/funcionarios/autenticar',
      this.form.value)
      .subscribe({
        next: (data) => {
          location.href = '/pages/bater-ponto';
        },
        error: (e) => {
          alert('Email ou senha informados estão inválidos.');
          console.log(e.error);
        }
      })
  }
}
