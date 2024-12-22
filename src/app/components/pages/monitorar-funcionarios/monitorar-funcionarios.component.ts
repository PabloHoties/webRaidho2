import { LatLngBoundsLiteral } from 'leaflet';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { latLng, tileLayer, Map, Marker, Icon } from 'leaflet';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../layout/navbar/navbar.component";

@Component({
  selector: 'app-monitorar-funcionarios',
  templateUrl: './monitorar-funcionarios.component.html',
  styleUrls: ['./monitorar-funcionarios.component.css'],
  imports: [CommonModule, NavbarComponent]
})
export class MonitorarFuncionariosComponent implements OnInit {


  funcionarios = [
    { nome: 'João', email: 'joao@email.com', coordenada: '40.748817,-73.985428' }, // Nova York
    { nome: 'Maria', email: 'maria@email.com', coordenada: '34.052235,-118.243683' }, // Los Angeles
    { nome: 'Carlos', email: 'carlos@email.com', coordenada: '51.5074,-0.1278' }, // Londres
    { nome: 'Ana', email: 'ana@email.com', coordenada: '48.8566,2.3522' }, // Paris
    { nome: 'Lucas', email: 'lucas@email.com', coordenada: '35.6895,139.6917' } // Tóquio
  ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
  }
  
}

