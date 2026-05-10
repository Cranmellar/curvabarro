# Barrocode: orientaciones gráficas y UI

Este documento define una dirección visual para la interfaz de **barrocode**. No es una especificación cerrada de pantallas, sino una guía de criterio para diseñar una UI mínima, técnica y reconocible.

## Idea central

Barrocode debe sentirse como una herramienta de código, no como una landing page. La interfaz puede tomar prestado el lenguaje de la terminal, los diagramas técnicos, las mediciones impresas y los paneles de instalación tipo CLI.

El referente principal es el panel de instalación de `claude-mem`: una experiencia basada en texto, pasos verticales, estados simples y símbolos ASCII que organizan el flujo sin depender de componentes decorativos.

La interfaz debe comunicar:

- precisión
- sobriedad
- proceso
- trazabilidad
- materia técnica
- baja ornamentación

## Referentes visuales sintetizados

### Panel tipo terminal

Usar una estructura vertical de pasos, con estados visibles mediante signos simples:

```txt
o  Paso pendiente
|  Continuidad del flujo
.  Evento informativo
!  Advertencia
✓  Completado, si el entorno lo permite
```

La UI debe poder funcionar incluso si se reducen colores e iconos. El texto, la alineación y la jerarquía deben sostener la experiencia.

### UI editorial de datos

Del referente móvil de datos ambientales se toma la combinación de:

- valores grandes
- etiquetas pequeñas en mayúsculas
- composición aireada
- pocas divisiones
- paneles con lectura rápida

La información importante debe aparecer como dato, no como tarjeta decorativa.

### Diagramas técnicos

De los wireframes de reloj/dispositivo se toma:

- línea fina
- contornos sobrios
- mediciones
- barras y marcas
- sensación instrumental

Los gráficos de barrocode pueden parecer salidas de diagnóstico o pequeñas mediciones del sistema.

### Código cromático modular

Del diagrama de consonantes/vocales se toma la idea de color como sistema, no como decoración. El color debe aparecer en segmentos, acentos o estados, con significado asignado.

Ejemplo:

- verde: correcto / disponible
- azul: activo / selección
- amarillo: atención / proceso
- rojo: error / bloqueo
- gris: inactivo / contexto

### Gráficos impresos en blanco y negro

Del gráfico de métricas se toma:

- barras planas
- tramas
- bordes finos
- contraste blanco/negro
- estética casi documental

Las visualizaciones deben ser simples, legibles y reproducibles con CSS básico.

## Lenguaje visual

### Paleta

Base recomendada:

- fondo principal: negro suave o blanco cálido, según modo
- texto principal: alto contraste
- texto secundario: gris medio
- líneas: gris fino
- acentos: pocos colores con función explícita

Evitar gradientes grandes, brillos, sombras blandas, fondos con orbes o decoraciones abstractas.

### Tipografía

Usar una tipografía monoespaciada o una combinación:

- mono para navegación, estados, datos, tablas y comandos
- sans sobria para títulos si el producto lo necesita

Las etiquetas pequeñas pueden ir en mayúsculas con espaciado moderado. Los datos clave deben ser grandes y limpios.

### Iconografía

Priorizar símbolos ASCII o caracteres simples sobre iconos complejos:

```txt
[ ]  opción vacía
[x]  opción activa
--   divisor
|    eje / continuidad
>    foco / prompt
o    nodo
!    advertencia
#    bloque / módulo
```

Si se usan iconos SVG o de librería, deben ser mínimos y funcionales.

## Layout

La pantalla inicial debe ser una herramienta usable, no una portada promocional.

Estructura sugerida:

- columna lateral estrecha para navegación o contexto
- panel central para flujo principal
- zona inferior o lateral para estado, logs o mediciones
- módulos compactos, alineados a grilla

Evitar tarjetas grandes con mucho relleno. Usar secciones, líneas, tablas, listas y barras.

## Componentes esperados

### Stepper técnico

Un flujo vertical estilo instalación:

```txt
o  Inicializar proyecto
|  Detectando entorno
.  Node encontrado
!  Falta configurar token
o  Generar interfaz
```

### Panel de comando

Un bloque principal con prompt, salida y acciones:

```txt
> barrocode init
  leyendo estructura...
  generando layout mínimo...
```

### Barras y mediciones

Usar barras simples para progreso, cobertura, complejidad o estado:

```txt
build     ███████░░░  70%
lint      ██████████  ok
tokens    ███░░░░░░░  31%
```

### Tablas compactas

Las tablas deben favorecer lectura rápida y alineación:

```txt
module       status     score
parser       ready      94
ui           active     71
memory       pending    38
```

## Tono de interfaz

El texto debe ser breve, operativo y técnico. Evitar frases de marketing, explicaciones largas dentro de la UI y mensajes demasiado amistosos.

Preferir:

- "Entorno detectado"
- "Configurar token"
- "Generar vista"
- "Reintentar build"

Evitar:

- "Bienvenido a la experiencia definitiva..."
- "Descubre el poder de..."
- "Todo lo que necesitas para..."

## Restricciones

- No crear una landing page como primera pantalla.
- No usar hero sections decorativas.
- No depender de gradientes o ilustraciones abstractas.
- No usar cards anidadas.
- No abusar de bordes redondeados.
- No convertir cada dato en una tarjeta.
- No ocultar la estructura técnica detrás de UI genérica SaaS.

## Resultado deseado

La interfaz de barrocode debe sentirse como una consola gráfica mínima: una capa visual ligera sobre procesos técnicos. Debe ser austera, precisa y distintiva, con una estética donde ASCII, grilla, datos y estados sean parte central del lenguaje del producto.

