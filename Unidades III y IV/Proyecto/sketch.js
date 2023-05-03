const audio = new Audio("https://raw.githubusercontent.com/pepinisillo/Alumno/main/carpeta/Echo%20fart-sound%20effect.mp3");
const inicio = new Audio("https://raw.githubusercontent.com/pepinisillo/Alumno/main/carpeta/chiptune-grooving-142242.mp3")
const salto = new Audio("https://raw.githubusercontent.com/pepinisillo/Alumno/main/carpeta/mixkit-arcade-game-jump-coin-216.wav")
// se crean nuevos objeto de audio llamado "audio, inicio, salto" utilizando la clase Audio integrada en el navegador web

var btn1 = null;
var btn2 = null;
let hasPlayedSound = false;
//para verificar si se ha producido un sonido
let animationId;
//se utiliza para almacenar el identificador devuelto por requestAnimationFrame() como cuando 
//se inicia una animación. Y si se desea detener la animación, se puede llamar a la función cancelAnimationFrame() 
//pasando como argumento el valor de animationId.
let score = 0;
let objetos = [];
//arreglo, matriz para guardar las trampas
function animate() {
}
function setup() {
createCanvas(0,0);
btn1 = createButton("Play");
btn1.position(250,500);
/*btn2 = createButton("pe");
btn2.position(300,500);*/
btn1.mousePressed(Play);
}


class Obstaculo 
{
  constructor(x, y, speed, imageSrc) 
  {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = new Image();
    this.image.src = imageSrc;
    this.screenWidth = 800;
    
  }

  move() 
  {
    this.x -= this.speed;
    //se mueve el objeto a la izquierda
    
    if (this.x < -50 && this.speed > 0) 
    { // Si el objeto ha salido del borde izquierdo de la pantalla
      //entonces significa que no solisionó por lo que score z 
     score++;
     salto.play();
      this.x = this.screenWidth; // Restablecer la posición en el borde derecho
      //ancho
    } else if (this.x > this.screenWidth && this.speed < 0) 
    { // El objeto ha salido del borde derecho de la pantalla
      
      
      this.x = 0; // Restablecer la posición en el borde izquierdo
     
    }
  }

  draw(ctx) 
  {
    
    ctx.drawImage(this.image, this.x, this.y);
     // dibujar texto
  ctx.font = "20px Roboto";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`Muertes fracasadas: ${score}`, 10, 30);
    //se dibuja en el canvas
  }
}
class Mono extends Obstaculo
  {
    constructor(x, y, speed, imageSrc) {
    super(x, y, speed, imageSrc) 
      this.ySpeed = 0;
      
      this.isJumping = false;
      //para saber si esta saltando
      this.jumpHeight = 150;
      //cuando el raton salta lo hace en 150 pixeles
  }
    
      move() {
    this.y += this.ySpeed;
        //se aumenta la velocidad del raton en y es decir verticalmente
    if (this.isJumping) {
      //cuando el raton salta, se dismiuye su velocidad en y
      this.ySpeed -= 1;
      //si y es menor o igual que el salto que es 150 significa que el raton ya saltó entonces isJumping ahora es falso
      if (this.y <= this.jumpHeight) {
        this.isJumping = false;
      }
    } else {
      //sino ejecutaran las siguientes instrucciones
      //se establece su velocidad y en 1
      this.ySpeed += 1;
      //se establece el raton al "piso" practicamente la caida despues de haber saltado
      if (this.y >= 250) {
        this.y = 250;
        this.ySpeed = 0;
      }
    }
    //this.x -= this.speed;
  }

  jump() {
     console.log("Saltando...");
   //para saber si funciona el salto
    
    if (!this.isJumping) {
      //cuando ! se usa antes de la expresion significa que si la expresión es verdadera, se convierte en falsa y viceversa.
      this.isJumping = true;
      //se hace el efecto de impulso para saltar
      this.ySpeed = 10;
    }
  
    }
  
    
  }
const trampa = new Obstaculo(800, 380, 8, "https://imgur.com/xxnSz7o.png");
objetos.push(trampa);
const trampa2 = new Obstaculo(800, 380, 8, "https://imgur.com/egBEBEU.png");
objetos.push(trampa2);
const raton = new Mono(50, 500, 0, "https://imgur.com/OS8Fz3i.png");
objetos.push(raton);
  
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
/*es una interfaz de programación de aplicaciones que proporciona métodos y propiedades para dibujar 
//y manipular gráficos en un elemento <canvas>*/



function animate() 
{
  // Comprobar colisión entre raton y trampa
  // animationId es una variable que se utiliza en animaciones en bucle (como requestAnimationFrame()) 
  //para almacenar el ID de la solicitud de animación en curso.
  if (raton.x < trampa.x + trampa.image.width - 60 &&
      raton.x + raton.image.width > trampa.x &&
      raton.y < trampa.y + trampa.image.height &&
      raton.y + raton.image.height > trampa.y) {
    // Detener animación si hay colisión
     audio.currentTime = 0; // Coloca la reproducción en el segundo 0 (inicio)
      inicio.pause();
      audio.play();  
     /* window.setTimeout(h,600);
      function h(){
        audio.pause();
      }*/
    cancelAnimationFrame(animationId);
    //se detiene la animación que se inició con el identificador animationId.
    console.log("Colisión detectada");
    //para comprobar que efectivamente hubo una colisión
    ctx.fillText("PERDISTE XD", 100, 100);
   //texto en el canvas
    return;
    // el return se utiliza en este caso para prevenir errores y hacer que la función sea 
    //más robusta y segura, evitando que se siga ejecutando si no se cumple la condición
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //actualiza el canvas para la siguiente animacion, de forma
  //que no se vea todo lo que se dibujó con anterioridad
  //para que se dibujen y se muevan los objetos en el canvas
  trampa.move();
  trampa.draw(ctx);
  raton.move();
  raton.draw(ctx);
  
  requestAnimationFrame(animate);
  // permite ejecutar una función de animación antes de que se actualice la pantalla
  
}

document.addEventListener("keydown", function (event) {
  
   //console.log("Keydown event detected");
  if (event.code === "Space") {
    raton.jump();
    //console.log("Se presionó la tecla Espacio");
  }
});

function Play(){
  animate();
  inicio.loop = true;
  inicio.currentTime = 1;
  inicio.play();
 // btn1.disabled = true;
  btn1.style.opacity = 0.7;
  btn1.style( 'background-color', '#3ccccc')
}


