import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Contato } from './model/contato.model';
import { ContatoService } from './service/contato.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.less']
})
export class ContatoComponent implements OnInit {

  isEnviando = false;
  formCliente: FormGroup;
  MASKINITI = '(00)000000000';
  CELLPHONE = '(00)00000-0000';
  LANDLINE = '(00)0000-0000';
  previusLength = 0;

  constructor(private title: Title, private formBuilder: FormBuilder , private contatoservice: ContatoService) { }

  phoneMask = this.MASKINITI;

  ngOnInit() {
    this.title.setTitle('Amazônia Assist - Contato');
    this.createForm(new Contato());
  }

  enviar() {

    const contato = this.formCliente.value;
    this.isEnviando = true;

    this.contatoservice.send(contato).subscribe( response => {
      if (response === 'ok') {
        this.isEnviando = false;
        this.alert();
        this.clear();
       }
    }, error => {this.isEnviando = false; this.alertError() });

  }

  private clear() {
    this.createForm(new Contato());
  }


createForm(contato: Contato) {
  this.formCliente = this.formBuilder.group({
    nome: [contato.nome, [Validators.required, Validators.minLength(5)]],
    email: [contato.email, [Validators.required, Validators.email]],
    telefone: [contato.telefone, [Validators.required, Validators.minLength(12), Validators.maxLength(14)]] ,
    assunto: [contato.assunto, [Validators.required]] ,
    mensagem: [contato.mensagem, [Validators.required]]
  });
}

hasError(formControl): boolean {
  return formControl.invalid && (formControl.dirty || formControl.touched);
}


 getErrorMessage(formControl): string | null {
  if (formControl.errors.required) {
      return 'Campo Obrigatório';

  } else if (formControl.errors.email) {
    return 'Formato de email inválido';

  } else if (formControl.errors.minlength) {
    const requiredLength = formControl.errors.minlength.requiredLength;
    return `O campo deve ter no mínino ${requiredLength} caracteres`;

  } else if (formControl.errors.maxlength) {
    const requiredLength = formControl.errors.maxlength.requiredLength;
    return `O campo deve ter no máximo ${requiredLength} caracteres`;

  } else if (formControl.errors.pattern) {

    //const numberFormat = Mascaras.numberPattern.toString();

    //if (formControl.errors.pattern.requiredPattern === numberFormat) {
     //   return `Valor inválido`;
     // }
    //}
  }
}


resetMask() {
  this.phoneMask = this.MASKINITI;
}

focusOutFunction() {
  if (this.formCliente.get('telefone').value && this.formCliente.get('telefone').value.length === 13) {
    this.phoneMask = this.CELLPHONE;
  } else {
    this.phoneMask = this.LANDLINE;
  }
}

alert() {
  Swal.fire({
    title: 'Mensagem enviada com sucesso !',
    text: 'Em breve entraremos em contato!',
    icon: 'success',
    confirmButtonColor: '#93c01f',
    confirmButtonText: 'Ok!'
  });
  }

  alertError() {
    Swal.fire({
      title: 'Erro na tentativa de envio !',
      text: 'Parece que algo deu errado! tente novamente, se o problema persiste entre em contato através de outros meios.',
      icon: 'error',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Fechar'
    });
    }

}
