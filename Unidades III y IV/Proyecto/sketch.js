const audio = new Audio("https://raw.githubusercontent.com/pepinisillo/Alumno/main/carpeta/Echo%20fart-sound%20effect.mp3");
const inicio = new Audio("https://raw.githubusercontent.com/pepinisillo/Alumno/main/carpeta/chiptune-grooving-142242.mp3")
const salto = new Audio("https://raw.githubusercontent.com/pepinisillo/Alumno/main/carpeta/mixkit-arcade-game-jump-coin-216.wav")

var btn1 = null;
var btn2 = null;
let hasPlayedSound = false;
let animationId;
let score = 0;
let objetos = [];
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
    
    if (this.x < -50 && this.speed > 0) 
    { // El objeto ha salido del borde izquierdo de la pantalla
     score++;
     salto.play();
      this.x = this.screenWidth; // Restablecer la posición en el borde derecho
      
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
  }
}
class Mono extends Obstaculo
  {
    constructor(x, y, speed, imageSrc) {
    super(x, y, speed, imageSrc) 
      this.ySpeed = 0;
      this.isJumping = false;
      this.jumpHeight = 150;
  }
    
      move() {
    this.y += this.ySpeed;
    if (this.isJumping) {
      this.ySpeed -= 1;
      if (this.y <= this.jumpHeight) {
        this.isJumping = false;
      }
    } else {
      this.ySpeed += 1;
      if (this.y >= 250) {
        this.y = 250;
        this.ySpeed = 0;
      }
    }
    this.x -= this.speed;
  }

  jump() {
     console.log("Saltando...");
   
    if (!this.isJumping) {
      this.isJumping = true;
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
/*es una interfaz de programación de aplicaciones que proporciona métodos y propiedades para dibujar y manipular gráficos en un elemento <canvas>*/



function animate() 
{
  // Comprobar colisión entre raton y trampa
  // animationId es una variable que se utiliza en animaciones en bucle (como requestAnimationFrame()) para almacenar el ID de la solicitud de animación en curso.
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
    console.log("Colisión detectada");
    ctx.fillText("PERDISTE XD", 100, 100);
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //actualiza el canvas para la siguiente animacion, de forma
  //que no se vea todo lo que se dibujó con anterioridad
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


