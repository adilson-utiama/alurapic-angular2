import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();

    constructor() {
        this.foto.titulo = '';
        this.foto.url = '';
        this.foto.descricao = '';
    }

    cadastrar(event){
        event.preventDefault();

        console.log(this.foto);
    }
}