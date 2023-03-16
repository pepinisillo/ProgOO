# Investigación 
## Paradigma orientado a objetos
## Índice
[Paradigma orientado a objetos](#paradigma-orientado-a-objetos)  
[Paradigma en el contexto de lenguajes de programación](#paradigma-en-el-contexto-de-lenguajes-de-programación)  
[Programación Orientada a Objetos](#programación-orientada-a-objetos)  
[Abstracción](#abstracción)  
[Encapsulamiento](#encapsulamiento)  
[Herencia](#herencia)  
[Lenguaje de Modelado Unificado](#lenguaje-de-modelado-unificado)  
[UML de una máquina que vende productos](#uml-de-una-máquina-que-vende-productos)  
  
### Paradigma orientado a objetos 
***
La programación orientada a objetos o POO es un paradigma de programación que usa objetos y sus interacciones, para diseñar aplicaciones y programas de computadoras. Está basado en varias técnicas, incluyendo herencia, abstracción, polimorfismo y encapsulamiento.    
      
Un paradigma de programación representa un enfoque particular o filosofía para la construcción del software. No es mejor uno que otro, sino que cada uno tiene ventajas y desventajas.  
  
En la POO las entidades centrales son los objetos, que son tipos de datos que encapsulan con el mismo nombre estructuras de datos, operaciones o algoritmos que manipulan esos datos.[^1]  

[^1]:Miguel Martínez Martínez y Raul Romero Mañuz, ed. (s/f). [«La programación orientada a objetos»](http://dis.um.es/~lopezquesada/documentos/IES_1415/IAW/curso/UT3/ActividadesAlumnos/java7/paginas/pag1.html)  

  
### Paradigma en el contexto de lenguajes de programación
***
Existen muchos paradigmas de programación diferentes, cada uno de ellos tiene sus propias características y tratan de solucionar los problemas clásicos del desarrollo de software desde diferentes perspectivas y filosofías.  
  
Los paradigmas de programación solo son propuestas tecnológicas adoptadas por la Comunidad de desarrolladores que se enfocan a resolver uno o varios problemas definidos y delimitados. Existen muchos paradigmas de programación diferentes, posiblemente el más ampliamente utilizado hoy en día sea el de la programación orientada a objetos.  
  
Algunos lenguajes de programación pueden soportar múltiples paradigmas de programación. Por ejemplo, C++ puede ser empleado para desarrollar software utilizando para ello un modelo de programación puramente orientado a objetos o bien puramente estructurado.  
  
Otros lenguajes han sido diseñados para soportar un único paradigma de programación, ese es el caso de Smalltalk que soporta únicamente la programación orientada a objetos o Haskell que solo soporta la programación funcional.  
  
Es común el diseño de lenguajes que soporten múltiples paradigmas de programación. Estos lenguajes son aquellos que soportan al menos dos paradigmas:  
  
- **Scala:** Imperativo, orientado a objetos, funcional, genérico y concurrente  
- **Erlang:** Funcional, orientado a objetos y funcional  
- **Perl:** Imperativo, orientado a objetos y funcional  
- **PHP:** Imperativo, orientado a objetos, funcional y reflexivo  
- **JavaScript:** Imperativo, orientado a objetos (prototipos) y funcional  
- **Java:** Imperativo, orientado a objetos, reflexivo y genérico  
- **Python y Ruby:** Imperativo, orientado a objetos, reflexivo y funcional  
- **C++:** Imperativo, orientado a objetos, funcional y genérico  
- **C#:** Imperativo, orientado a objetos, funcional (lambda), reflexivo y genérico  
- **Lisp:** Orientado a objetos, funcional y declarativo  
- **Prolog:** Lógico y declarativo  
Estos son algunos ejemplos, existen lenguajes como Oz que soporta nueve paradigmas de programación.  
  
Paradigmas de programación  
  
Un paradigma define un conjunto de reglas, patrones y estilos de programación que son usados por un grupo de lenguajes de programación.  
  
Cada lenguaje tiene sintaxis y semántica:  
  
- La sintaxis de un lenguaje de programación está relacionada con la forma de los programas, por ejemplo, las expresiones, comandos, declaraciones, etc. son puestos juntos en un programa.  
- La semántica de un lenguaje de programación está relacionada con el significado de los programas, por ejemplo, cómo se comportarán cuando se ejecutan en una computadora.  
La sintaxis de un lenguaje influye en cómo los programas son escritos por el programador, leídos por otro programador y traducidos por el computador. La semántica de un lenguaje determina como los programas son compuestos por el programador, entendidos por otros programadores e interpretados por el computador.[^2]
[^2]: GSITIC, ed. (22 diciembre, 2017). [«Lenguajes y paradigmas actuales de programación»](https://gsitic.wordpress.com/2017/12/22/bii4-lenguajes-y-paradigmas-actuales-de-programacion-caracteristicas-tecnicas/)   
  
  
### Programación Orientada a Objetos
***
La programación orientada a objetos es un modelo de programación en el que el diseño de software se organiza alrededor de datos u objetos, en vez de usar funciones y lógica. Se enfoca en los objetos que los programadores necesitan manipular, en lugar de centrarse en la lógica necesaria para esa manipulación. Un objeto se puede definir como un campo de datos con atributos y comportamientos únicos.  
  
Por tanto, la principal característica de este tipo de programación es que soporta objetos, que tienen un tipo o clase asociado. Esas clases pueden heredar atributos de una clase superior o superclase. Por esa razón, este enfoque de programación se utiliza en programas grandes y complejos que se deben actualizar con cierta regularidad.  

Ventajas de la programación orientada a objetos:  
  
- Reutilización del código heredado. Cuando se diseñan correctamente las clases, se pueden usar en distintas partes del programa y en diferentes proyectos. La técnica de herencia ahorra tiempo porque permite crear una clase genérica y luego definir las subclases que heredarán los rasgos de la misma, de manera que no es necesario escribir esas funciones de nuevo. Además, al aplicar un cambio en la clase, todas las subclases lo adoptarán automáticamente.  
  
- Mayor modificabilidad. Otra de las ventajas de la programación orientada a objetos es que permite añadir, modificar o eliminar nuevos objetos o funciones fácilmente para actualizar los programas, lo cual implica un ahorro de tiempo y esfuerzo para los programadores.  
  
- Facilidad para detectar errores en el código. En los lenguajes de programación orientada a objetos no es necesario revisar línea por línea del código para detectar un error. Gracias a la encapsulación los objetos son autónomos, de manera que es más fácil abstraer un problema y saber dónde buscar el error cuando algo no funciona bien.  
  
- Modularidad. Una de las características de la programación orientada a objetos más interesantes es la modularidad ya que así un equipo puede trabajar en múltiples objetos a la vez mientras se minimizan las posibilidades de que un programador duplique la funcionalidad de otro. El trabajo modular también permite dividir los problemas en partes más pequeñas que se pueden probar de manera independiente.  
  
- Flexibilidad gracias al polimorfismo. El polimorfismo de la programación orientada a objetos permite que una sola función pueda cambiar de forma para adaptarse a cualquier clase donde se encuentre. De esta forma se ahorra tiempo de programación y se gana en versatilidad.[^3]  
[^3]: Universidad Europea, ed. (24 agosto, 2022). [«Programación orientada a objetos»](https://universidadeuropea.com/blog/programacion-orientada-objetos/)  
  
  
#### ¿Cuál fue el primer lenguaje orientado a objetos, quienes y en dónde lo propusieron? 
Smalltalk es considerado el primero de los lenguajes orientados a objetos, aunque en realidad el primero en implementar programación orientada a objetos fue Simula. En Smalltalk todo es un objeto, incluidos los números reales o el propio entorno Smalltalk.  
  
Propuesto en 1980, Smalltalk es el primer lenguaje orientado a objetos disponible con un entorno de desarrollo gráfico integrado. Smalltalk fue diseñado por el equipo del americano Alan Kay, del centro de investigación informática californiana de XEROX (el famoso Palo Alto Research Center).[^4]
[^4]: Éditions ENI, ed. (s/f). [«Historia de la POO»](https://www.ediciones-eni.com/open/mediabook.aspx?idR=dbba30cf4ffac2993c1495a629f282df)  
  
Como lenguaje tiene las siguientes características:  
  
- Orientación a Objetos  
- Tipado dinámico  
- Interacción entre objetos mediante envío de mensajes  
- Herencia simple y con raíz común  
- Reflexión computacional completa  
- Recolección de basura  
- Compilación en tiempo de ejecución o Interpretado (dependiendo de la distribución o del proveedor)  
- Múltiples Implementaciones  
  
Smalltalk ha tenido gran influencia sobre otros lenguajes como Java o Ruby, y de su entorno han surgido muchas de las prácticas y herramientas de desarrollo promulgadas actualmente por las metodologías ágiles (refactorización, desarrollo incremental, desarrollo dirigido por tests, etc.).[^5]
[^5]: Wikipedia, ed (23 diciembre, 2022). [«Smalltalk»](https://es.wikipedia.org/wiki/Smalltalk)  
  
  
### Abstracción
***
La abstracción es aquella eliminación de información no relevante en un contexto en específico, así pues, la abstracción capta aquellas funciones y características que se desempeña mejor un cierto objeto. Entonces, dependiendo del problema a solucionar, se escogen y usan tales funciones y características que puedan satisfacer dicho problema, puesto que es lo necesario para poder solucionarlo.  
  
#### ¿Por qué se considera fundamental en programación? 
La abstracción nos permite crear un modelo conceptual de un objeto o concepto y luego utilizar ese modelo para crear objetos más específicos que heredan las características y comportamientos del modelo conceptual. Esto nos permite reutilizar código y simplificar la creación de objetos complejos.[^6]
[^6]: Cursosdesarrolloweb, ed (24 diciembre, 2022). [<«Abstracción en la programación orientada a objetos»](https://www.cursosdesarrolloweb.es/blog/abstraccion-programacion-orientada-objetos#:~:text=La%20abstracci%C3%B3n%20nos%20permite%20crear,la%20creaci%C3%B3n%20de%20objetos%20complejos.)  
  
    
### Encapsulamiento
***
El encapsulamiento es un mecanismo por el cual la información que tenemos contenida en un objeto puede ser solamente usada a partir de servicios que nosotros especificamos, asi pues el encapsulamiento nos permite proteger dicha información de modificaciones externas y no deseadas. Asi también como que el uso de esta información puede ser usada en la circunstancia en que nosotros queramos.  
  
<img align="center">![](/img/ParadigmaOO/Encapsulamiento1.png)![](/img/ParadigmaOO/encapsulamiento2.png)</img>

#### Importancia y problemas que puede evitar

### Herencia
***
## UML: Diagrama de clases
### Lenguaje de Modelado Unificado
***
### UML de una máquina que vende productos  
***
### Referencias