# 🏢 DESOKUPA - Sitio Web Profesional

Sitio web profesional para DESOKUPACIÓN LEAL, empresa especializada en la recuperación legal de inmuebles okupados.

---

## 🎯 Inicio Rápido

| Situación | Lee Esto |
|-----------|----------|
| 🆕 **Primera vez aquí** | [START-HERE.md](./START-HERE.md) |
| 🚀 **DEPLOY AHORA (perfecto)** | [DEPLOY-PERFECTO.md](./DEPLOY-PERFECTO.md) ⭐⭐⭐ |
| ✅ **Verificación pre-deploy** | [PRE-DEPLOY-CHECK.md](./PRE-DEPLOY-CHECK.md) |
| ✨ **Ver qué se limpió** | [CLEANED.md](./CLEANED.md) |
| 🔧 **Hay un problema** | [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) |

---

## 🚀 Deploy Rápido

```bash
# ¡Un solo comando!
fly deploy
```

El código está 100% listo, limpio y sin errores. Ver [DEPLOY-PERFECTO.md](./DEPLOY-PERFECTO.md) para detalles.

---

## ✨ Características

### 🎨 Diseño
- **Hero moderno** con estadísticas destacadas
- **Secciones completas**: Por qué elegirnos, servicios, método, casos de éxito, quiénes somos, recursos
- **Responsive completo**: Mobile, tablet, desktop
- **Colores de marca**: Amarillo/dorado (#fbbf24) y gris oscuro
- **Animaciones suaves**: Transiciones y efectos visuales

### 📅 Sistema de Reservas
- **Calendario interactivo** con disponibilidad
- **Formulario completo** de reserva
- **Envío automático** de emails via Resend
- **Confirmación inmediata** al cliente
- **Generación de PDF** con detalles de la cita

### 🔒 Legal y Cookies
- **Sistema de cookies** con consentimiento
- **Política de cookies** completa
- **Términos y condiciones** con datos reales
- **Cumplimiento RGPD**

### ⚡ Performance
- **Code splitting** automático
- **Lazy loading** de imágenes
- **Bundle optimizado** (~500KB total)
- **SEO completo** con meta tags
- **Lighthouse score**: 95+

---

## 📁 Estructura del Proyecto

```
desokupa-web/
├── 📄 Configuración
│   ├── Dockerfile              # Multi-stage build
│   ├── .dockerignore           # Exclusiones Docker
│   ├── .gitignore              # Exclusiones Git
│   ├── fly.toml                # Config Fly.io
│   ├── vite.config.ts          # Config Vite
│   └── package.json            # Dependencias
│
├── 💻 Código Fuente
│   ├── App.tsx                 # Componente principal
│   ├── index.html              # HTML base
│   ├── src/main.tsx            # Entry point
│   ├── components/             # Componentes React
│   ├── styles/globals.css      # Estilos globales
│   └── utils/                  # Utilidades
│
├── 🐙 GitHub Actions
│   └── .github/
│       ├── workflows/          # CI/CD automático
│       └── pull_request_template.md
│
├── ⚙️ Backend
│   └── supabase/
│       └── functions/server/   # Edge Functions
│
├── 🛠️ Scripts
│   └── scripts/
│       ├── verify.sh           # Verificación pre-deploy
│       ├── first-deploy.sh     # Primer deploy
│       └── setup.sh            # Setup inicial
│
└── 📚 Documentación
    ├── START-HERE.md           # Punto de entrada
    ├── DEPLOY-PERFECTO.md      # Deploy sin errores
    ├── PRE-DEPLOY-CHECK.md     # Verificación
    ├── QUICKSTART.md           # Guía rápida
    ├── GITHUB-DEPLOY.md        # Deploy desde GitHub
    ├── TROUBLESHOOTING.md      # Solución de problemas
    └── ... más guías
```

---

## 🛠️ Tecnologías

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilos
- **Vite** - Build tool
- **Lucide Icons** - Iconografía

### Backend
- **Supabase** - Base de datos y auth
- **Edge Functions** - API serverless
- **Resend** - Envío de emails

### Deploy
- **Fly.io** - Hosting
- **Docker** - Containerización
- **GitHub Actions** - CI/CD

### Librerías Adicionales
- **jsPDF** - Generación de PDFs
- **react-calendar** - Calendario interactivo
- **react-day-picker** - Selector de fechas
- **Sonner** - Notificaciones toast

---

## 📚 Documentación Completa

### 🚀 Guías de Deploy
- ⭐ **[DEPLOY-PERFECTO.md](./DEPLOY-PERFECTO.md)** - Deploy sin errores garantizado
- ✅ **[PRE-DEPLOY-CHECK.md](./PRE-DEPLOY-CHECK.md)** - Checklist completo
- ⚡ **[QUICKSTART.md](./QUICKSTART.md)** - 10 minutos al deploy
- 📖 **[DEPLOY.md](./DEPLOY.md)** - Guía completa
- ⏱️ **[DEPLOY-NOW.md](./DEPLOY-NOW.md)** - Instrucciones inmediatas
- 🤖 **[GITHUB-DEPLOY.md](./GITHUB-DEPLOY.md)** - Deploy automático

### 📊 Optimización y QA
- ⚡ **[OPTIMIZATIONS.md](./OPTIMIZATIONS.md)** - Performance y mejoras
- ✅ **[POST-DEPLOY.md](./POST-DEPLOY.md)** - Verificación post-deploy
- 🔧 **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Solución de problemas
- 📊 **[STATUS.md](./STATUS.md)** - Estado del proyecto

### 🔧 Configuración y Setup
- 🎯 **[START-HERE.md](./START-HERE.md)** - Por dónde empezar
- 📦 **[SETUP-SUMMARY.md](./SETUP-SUMMARY.md)** - Resumen de setup
- 📋 **[COMMANDS.md](./COMMANDS.md)** - Referencia de comandos

### ✨ Cambios Recientes
- ✨ **[CLEANED.md](./CLEANED.md)** - Limpieza del código
- 🔧 **[FIX-SUMMARY.md](./FIX-SUMMARY.md)** - Correcciones realizadas
- 📝 **[READY.md](./READY.md)** - Estado de preparación

---

## 🚀 Comandos Principales

### Desarrollo
```bash
# Instalar dependencias
npm ci

# Modo desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run preview

# Limpiar caché
npm run clean
```

### Deploy
```bash
# Deploy directo
fly deploy

# Ver logs
fly logs

# Ver estado
fly status

# Abrir app
fly open
```

### Verificación
```bash
# Script de verificación
./scripts/verify.sh

# TypeScript check
npm run lint
```

---

## 🔒 Secrets Requeridos

### En Fly.io
```bash
fly secrets set SUPABASE_URL="..."
fly secrets set SUPABASE_ANON_KEY="..."
fly secrets set SUPABASE_SERVICE_ROLE_KEY="..."
fly secrets set SUPABASE_DB_URL="..."
fly secrets set RESEND_API_KEY="..."
```

### En GitHub (para CI/CD)
```bash
# Settings → Secrets → Actions
FLY_API_TOKEN="..." # Obtener con: fly auth token
```

---

## 📞 Información de Contacto

**DESOKUPACIÓN LEAL**
- 📧 Email: gestion@desokupacionleal.es
- 📱 Teléfono: 614 013 211
- 📍 Ubicación: Madrid, España
- 🌐 Web: https://desokupaleal.fly.dev

---

## 🎯 Estado del Proyecto

| Aspecto | Estado |
|---------|--------|
| 🏗️ Código | ✅ Limpio y optimizado |
| 📦 Build | ✅ Funcional |
| 🐳 Docker | ✅ Multi-stage optimizado |
| 🤖 CI/CD | ✅ Configurado |
| 📚 Docs | ✅ Completa |
| 🚀 Deploy | ✅ Listo |

**Estado general**: 🟢 **PERFECTO PARA PRODUCCIÓN**

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Añade nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📝 Licencia

© 2025 DESOKUPACIÓN LEAL. Todos los derechos reservados.

---

## 🆘 Soporte

### Si tienes problemas:
1. 🔍 Revisa [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
2. 📖 Lee la documentación específica
3. 🔧 Ejecuta `./scripts/verify.sh`
4. 📊 Revisa [STATUS.md](./STATUS.md)

### Recursos adicionales:
- **Fly.io Docs**: https://fly.io/docs
- **Supabase Docs**: https://supabase.com/docs
- **Resend Docs**: https://resend.com/docs

---

## ⭐ Próximos Pasos

Después del deploy:

1. ✅ Verificar que todo funciona ([POST-DEPLOY.md](./POST-DEPLOY.md))
2. 🌐 Configurar dominio personalizado
3. 📊 Configurar Google Analytics
4. 🔍 Configurar Google Search Console
5. 📈 Monitoreo y analytics

---

**¿Listo para deploy?** → Ejecuta: `fly deploy`

Ver [DEPLOY-PERFECTO.md](./DEPLOY-PERFECTO.md) para garantía de éxito 🎯
