import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // DECLARO MI VARIABLE CONDICION COMO BOOLEANO
  condicion!: boolean;

  // DECLARO LOS MENSAJES QUE SE VERAN EN LOS INPUTS
  datos!: string;
  confirmo!: string;
  minimo: string = " (Debe tener como mínimo 8 caracteres)";
  minimoApe: string = " (Debe tener como mínimo 10 caracteres)"
  valido: string = " (El email no es válido)";
  textmensaje: string = " (El mensaje no puede quedar vacio)";

  // CON FORMLOGIN ENLAZAMOS NUESTRO FORM
  public formLogin!: FormGroup;

  // CREAMOS NUESTRO CONSTRUCTOR
  constructor(private formBuilder: FormBuilder) {

  }
  // CREAMOS EL ngOnInit AQUI SE VERAN LAS VALIDACIONES QUE INGRESE EL USUARIO
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('[a-zA-Z ]*')
        ]
      ],
      apellido: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('[a-zA-Z ]*')
        ]
      ],

      correo: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      mensaje: ['',
        [
          Validators.required,
          Validators.maxLength(500)
        ]
      ]
    })
  }

  // IMPRIMO LOS DATOS INGRESADOS Y SI ES CORRECTO ENVIARA UN MENSAJE DE DATOS VALIDOS
  // LOS MENSAJE DE ADVERTENCIA SE BORRARAN SI TODO FUE CORRECTO.
  send(): any {
    this.datos = `Nombre= ${this.formLogin.value.nombre}
                  Apellido= ${this.formLogin.value.apellido}
                  Correo= ${this.formLogin.value.correo}
                  Mensaje= ${this.formLogin.value.mensaje}
                `;
    this.confirmo = "Todos los datos son válidos";
    this.minimo = "\n";
    this.minimoApe = "\n";
    this.valido = "\n";
    this.textmensaje = "\n";
  }
}
