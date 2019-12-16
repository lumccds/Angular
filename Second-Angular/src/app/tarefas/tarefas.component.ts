import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { ListawebService } from '../service/listaweb.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {


minhaTarefa: Tarefa[];


  constructor(private servicoLista: ListawebService) { 
    
   }

  ngOnInit() {
  }

public obterTodasAsTarefas(){
    this.servicoLista.obterTarefa().subscribe((resultado:Tarefa[])=>{})

}

}
