import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autenticar-gestor',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './autenticar-gestor.component.html',
  styleUrl: './autenticar-gestor.component.css'
})
export class AutenticarGestorComponent {

  constructor(
    private httpClient: HttpClient
  ) { }

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.email])
  })

  onSubmit() {
    this.httpClient.post('http://localhost:8091/api/gestores/autenticar',
      this.form.value)
      .subscribe({
        next: (data) => {
          location.href = '/pages/monitorar-funcionarios';
        },
        error: (e) => {
          alert('Email ou senha informados estão inválidos.');
          console.log(e.error);
        }
      })
  }
}
