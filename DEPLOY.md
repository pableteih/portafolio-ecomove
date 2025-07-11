# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a publicar tu portafolio en GitHub Pages para que esté disponible públicamente.

## 📋 Requisitos Previos

- Cuenta de GitHub
- Git instalado en tu computadora
- Portafolio terminado y funcionando localmente

## 🔧 Pasos para el Despliegue

### 1. Crear un Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón "New" o "+" para crear un nuevo repositorio
3. Nombra tu repositorio (ej: `portafolio-pedro-perez`)
4. Asegúrate de que sea **público** (para GitHub Pages gratuito)
5. No inicialices con README (ya tenemos uno)
6. Haz clic en "Create repository"

### 2. Subir el Código al Repositorio

Abre la terminal en la carpeta de tu portafolio y ejecuta:

```bash
# Inicializar Git (si no lo has hecho)
git init

# Añadir todos los archivos
git add .

# Crear el primer commit
git commit -m "Initial commit: Add portfolio files"

# Conectar con el repositorio remoto
git remote add origin https://github.com/tu-usuario/portafolio-pedro-perez.git

# Cambiar a la rama main
git branch -M main

# Subir el código
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña "Settings"
3. Desplázate hacia abajo hasta la sección "Pages"
4. En "Source", selecciona "Deploy from a branch"
5. En "Branch", selecciona "main"
6. En "Folder", deja seleccionado "/ (root)"
7. Haz clic en "Save"

### 4. Acceder a tu Portafolio

Después de unos minutos, tu portafolio estará disponible en:
```
https://tu-usuario.github.io/portafolio-pedro-perez/
```

## 🛠️ Actualizar el Portafolio

Para actualizar tu portafolio después de hacer cambios:

```bash
# Añadir cambios
git add .

# Crear commit con descripción
git commit -m "Update portfolio content"

# Subir cambios
git push origin main
```

Los cambios se reflejarán automáticamente en tu sitio web en unos minutos.

## 🎯 Consejos Adicionales

### Dominio Personalizado (Opcional)
Si tienes un dominio propio, puedes configurarlo:
1. Crea un archivo `CNAME` en la raíz del proyecto
2. Añade tu dominio (ej: `www.pedroperez.com`)
3. Configura los DNS de tu dominio para apuntar a GitHub Pages

### Optimización SEO
- Asegúrate de que el título de la página sea descriptivo
- Añade meta descriptions en el `<head>`
- Usa structured data para mejor indexación

### Certificado SSL
GitHub Pages proporciona automáticamente HTTPS para tu sitio.

## 🐛 Solución de Problemas

### El sitio no se carga
- Verifica que el archivo principal se llame `index.html`
- Asegúrate de que todos los archivos estén en la rama main
- Revisa que no haya errores en la consola del navegador

### Los estilos no se aplican
- Verifica que las rutas a CSS y JS sean correctas
- Asegúrate de que todos los archivos estén subidos al repositorio

### Error 404
- Confirma que el repositorio sea público
- Verifica que GitHub Pages esté habilitado en Settings

## 📞 Soporte

Si tienes problemas con el despliegue, puedes:
- Consultar la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages)
- Buscar ayuda en [GitHub Community](https://github.com/community)
- Revisar el estado de GitHub en [GitHub Status](https://www.githubstatus.com/)

## 🎉 ¡Felicitaciones!

Una vez que tu portafolio esté online, puedes:
- Compartir el enlace en tu CV
- Incluirlo en tu perfil de LinkedIn
- Enviarlo a empleadores potenciales
- Usarlo como referencia en aplicaciones de trabajo

---

**¡Tu portafolio profesional ya está listo para el mundo!** 🌟 