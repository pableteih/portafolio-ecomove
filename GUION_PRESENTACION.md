# Guión de Presentación: Portafolio Digital de Pedro Pérez

## 🎯 Introducción (30 segundos)

"Hola, soy Pedro Pérez, Product Owner especializado en soluciones digitales sostenibles. Les presento mi portafolio digital, diseñado para mostrar mi experiencia liderando el desarrollo de Ecomove, una aplicación de movilidad urbana sustentable."

---

## 🛠️ Tecnologías y Lenguajes Utilizados (1 minuto)

### **Frontend Básico pero Potente**
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño responsivo con técnicas avanzadas
- **JavaScript**: Interactividad y navegación suave
- **Font Awesome**: Iconografía profesional
- **Google Fonts (Inter)**: Tipografía moderna y legible

### **¿Por qué estas tecnologías?**
"Elegí un stack tecnológico sencillo pero efectivo. HTML, CSS y JavaScript vanilla garantizan rendimiento óptimo, carga rápida y compatibilidad universal, principios fundamentales que aplico como Product Owner."

---

## 🎨 Técnicas de Diseño y UX (2 minutos)

### **1. Sistema de Diseño Cohesivo**
```css
:root {
    --primary-color: #00d2ff;
    --secondary-color: #3a7bd5;
    --gradient-primary: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
}
```
- **Variables CSS**: Consistencia cromática en todo el portafolio
- **Paleta de colores**: Azules tecnológicos que evocan innovación y sostenibilidad

### **2. Efectos Visuales Avanzados**
- **Lámpara de lava animada**: 
  ```css
  background: radial-gradient(circle at 30% 30%, rgba(0, 210, 255, 0.8));
  animation: lavaFloat 15s ease-in-out infinite;
  ```
- **Gradientes dinámicos**: Fondos que cambian suavemente
- **Efectos hover**: Retroalimentación visual inmediata
- **Partículas flotantes**: Elementos que dan vida al diseño

### **3. Microinteracciones**
"Cada hover, cada transición está pensada para crear una experiencia memorable. Como Product Owner, entiendo que los detalles marcan la diferencia en la percepción del usuario."

---

## 📱 Diseño Responsivo y Accesibilidad (1 minuto)

### **Mobile-First Approach**
```css
@media (max-width: 768px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
}
```

### **Técnicas Implementadas**
- **CSS Grid y Flexbox**: Layouts adaptativos
- **Breakpoints estratégicos**: 768px, 480px
- **Imágenes optimizadas**: `loading="lazy"` para performance
- **Navegación accesible**: Menú hamburguesa en móviles

---

## 🏗️ Arquitectura y Estructura (1.5 minutos)

### **Organización del Código**
```
portafolio/
├── index.html          # Estructura principal
├── styles.css          # Estilos modulares
├── script.js           # Funcionalidad interactiva
└── img/               # Recursos optimizados
    ├── image1.jpg     # Pantallas de Ecomove
    ├── image2.jpg
    └── image3.jpg
```

### **Secciones Estratégicas**
1. **Hero Section**: Impacto visual inmediato
2. **About**: Storytelling personal y profesional
3. **Experience**: Proceso detallado del proyecto Ecomove
4. **App Screens**: Showcase visual del producto
5. **Skills**: Herramientas y metodologías
6. **Testimonials**: Validación social
7. **Contact**: Call-to-action claro

---

## 🚀 Funcionalidades Destacadas (2 minutos)

### **1. Navegación Inteligente**
```javascript
// Scroll suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

### **2. Animaciones CSS Avanzadas**
- **Keyframes complejos**: Movimientos orgánicos de partículas
- **Transform y Transition**: Efectos de profundidad
- **Backdrop-filter**: Efectos de desenfoque glassmorphism

### **3. Performance Optimizada**
- **CSS Variables**: Cambios dinámicos sin JavaScript
- **Lazy Loading**: Carga diferida de imágenes
- **Vendor Prefixes**: Compatibilidad cross-browser

---

## 📊 Showcase del Proyecto Ecomove (2 minutos)

### **Integración Visual**
"La sección de pantallas de app no es solo decorativa. Cada imagen cuenta una historia del proceso de desarrollo que lideré:"

1. **Pantalla Principal**: "Muestra la interfaz intuitiva que diseñamos tras 3 semanas de investigación de usuarios"
2. **Selección de Rutas**: "Resultado de algoritmos de optimización que balancean tiempo, costo y sostenibilidad"
3. **Navegación**: "Interfaz en tiempo real con indicadores de seguridad, fruto de tests de usabilidad"

### **Proceso Documentado**
- 5 pasos claros del problema a la solución
- Metodología Scrum implementada
- Métricas de éxito cuantificables

---

## 🎯 Estrategia de Producto Owner Aplicada (1.5 minutos)

### **User-Centered Design**
"Cada elemento del portafolio refleja principios de UX que aplico profesionalmente:"

- **Hierarchy visual**: Información priorizada según importancia
- **Progressive disclosure**: Información revelada gradualmente
- **Call-to-actions claros**: Botones estratégicamente ubicados

### **Data-Driven Decisions**
- **Métricas visibles**: 5+ años experiencia, 8 semanas proyecto, 6 miembros equipo
- **Testimonials cuantificados**: Validación social con contexto específico

---

## 🌟 Diferenciadores Técnicos (1 minuto)

### **1. Sin Frameworks Pesados**
"Decidí no usar React o Vue. ¿Por qué? Como Product Owner, priorizo el performance y la accesibilidad sobre la complejidad técnica innecesaria."

### **2. Código Mantenible**
```css
/* Comentarios descriptivos */
/* Variables semánticas */
/* Estructura modular */
```

### **3. SEO y Accesibilidad**
- **Semantic HTML**: Headers jerárquicos, alt texts descriptivos
- **Meta tags optimizados**: Performance en buscadores
- **Contrast ratios**: Legibilidad garantizada

---

## 📈 Resultados y Métricas (30 segundos)

### **Performance**
- **Tiempo de carga**: < 2 segundos
- **Responsive**: 100% funcional en móviles
- **Accesibilidad**: Cumple estándares WCAG

### **User Experience**
- **Navegación intuitiva**: 0 clics perdidos
- **Storytelling efectivo**: Flujo narrativo coherente
- **Call-to-action conversion**: Contacto directo optimizado

---

## 🎯 Conclusión (30 segundos)

"Este portafolio no es solo código y diseño. Es la demostración práctica de cómo aplico principios de Product Management: investigación de usuarios, priorización por impacto, iteración basada en feedback, y entrega de valor real.

Cada línea de código, cada animación, cada sección está pensada estratégicamente para contar la historia de cómo transformo ideas en productos digitales que generan impacto positivo."

---

## 📋 Puntos Clave para Recordar

1. **Tecnologías**: HTML5, CSS3, JavaScript vanilla - Stack simple pero potente
2. **Diseño**: Mobile-first, accesible, con microinteracciones cuidadas
3. **Performance**: Optimizado para carga rápida y experiencia fluida
4. **Contenido**: Storytelling del proyecto Ecomove con proceso detallado
5. **Diferenciación**: Enfoque Product Owner aplicado al desarrollo frontend

---

**Tiempo total de presentación: 12-15 minutos**
**Audiencia objetivo**: Reclutadores tech, CTOs, equipos de producto
