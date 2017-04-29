import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute){
        this.service = service;
        this.route = route;

        this.route.params.subscribe(params => {
            let id = params['id'];
            if(id) {
                this.service.buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro));    
            }
        });

        this.meuForm = fb.group({
            titulo : ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url : ['', Validators.required],
            descricao : ['']
        });
    }
    
    cadastrar(event){
        event.preventDefault();
        console.log(this.foto);
        this.service.cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso');
            }, erro => console.log(erro));
    }
}