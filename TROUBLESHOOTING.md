# 🔧 Troubleshooting - DESOKUPA

Soluciones a problemas comunes.

---

## 🐛 Error: "npm run build failed" en Fly.io

### Síntomas
```
failed to fetch an image or build from source: error building
process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
```

### Soluciones

#### 1. Verificar build localmente
```bash
# Limpiar todo
rm -rf node_modules dist

# Reinstalar
npm ci

# Intentar build
npm run build
```

Si el build funciona localmente pero falla en Fly.io:

#### 2. Verificar dependencias en package.json
Asegúrate de que TODAS las dependencias estén listadas:
```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "latest",
  "react-day-picker": "^8.10.0",
  "date-fns": "^2.30.0",
  "@supabase/supabase-js": "^2.39.0",
  "sonner": "^2.0.3",
  "jspdf": "^2.5.1",
  "react-calendar": "^4.8.0"
}
```

#### 3. Verificar que existe Dockerfile
```bash
ls -la Dockerfile
```

Si no existe, créalo:
```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
```

#### 4. Verificar .dockerignore
Asegúrate de que existe `.dockerignore`:
```
node_modules
dist
.git
*.md
.env*
```

#### 5. Deploy con logs detallados
```bash
fly deploy --verbose
```

---

## 🔐 Error: "Variables de entorno no funcionan"

### Verificar secrets
```bash
fly secrets list
```

Deberías ver:
- SUPABASE_URL
- SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- SUPABASE_DB_URL
- RESEND_API_KEY

### Configurar missing secrets
```bash
fly secrets set NOMBRE_SECRET="valor"
```

---

## 📧 Error: "Email no se envía"

### 1. Verificar RESEND_API_KEY
```bash
fly secrets list | grep RESEND
```

### 2. Verificar dominio en Resend
- Ve a https://resend.com/domains
- El dominio debe estar verificado (✓)

### 3. Test manual
```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer TU_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "test@desokupacionleal.es",
    "to": ["gestion@desokupacionleal.es"],
    "subject": "Test",
    "html": "<p>Test email</p>"
  }'
```

### 4. Ver logs del servidor
```bash
fly logs | grep email
```

---

## 🌐 Error: "App no carga / 502 Bad Gateway"

### 1. Ver estado
```bash
fly status
```

### 2. Ver logs
```bash
fly logs
```

### 3. Reiniciar app
```bash
fly restart
```

### 4. Verificar health checks
```bash
fly checks list
```

---

## 🐳 Error: "Docker build fails"

### Limpiar caché de Docker
```bash
fly deploy --no-cache
```

### Build local para test
```bash
docker build -t desokupa-test .
docker run -p 8080:8080 desokupa-test
```

---

## 📦 Error: "Missing module" o "Cannot find module"

### 1. Verificar imports
Todos los imports deben usar rutas relativas correctas:
```typescript
// ✅ Correcto
import { Hero } from "./components/Hero";

// ❌ Incorrecto
import { Hero } from "components/Hero";
```

### 2. Verificar package.json
```bash
npm ls nombreDelPaquete
```

### 3. Reinstalar
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🔄 Error: "GitHub Actions fails"

### 1. Verificar FLY_API_TOKEN
```bash
# Generar nuevo token
fly auth token
```

Actualizar en GitHub:
1. Settings → Secrets and variables → Actions
2. Update `FLY_API_TOKEN`

### 2. Ver logs del workflow
- Ve a GitHub → Actions
- Click en el workflow fallido
- Revisa los logs

### 3. Re-ejecutar workflow
```bash
gh run rerun
```

---

## ⚡ App es muy lenta

### 1. Verificar bundle size
```bash
npm run build
du -sh dist
```

### 2. Analizar performance
```bash
lighthouse https://tu-app.fly.dev --view
```

### 3. Escalar recursos
```bash
# Más memoria
fly scale memory 512

# Más CPUs
fly scale vm shared-cpu-2x
```

---

## 🗄️ Error: "Supabase connection failed"

### 1. Verificar secrets
```bash
fly secrets list
```

### 2. Test conexión
```bash
curl https://TU-PROJECT.supabase.co/functions/v1/make-server-946c286b/health
```

Debería responder: `{"status":"ok"}`

### 3. Verificar Edge Functions
```bash
supabase functions list
```

### 4. Re-deploy Edge Functions
```bash
supabase functions deploy server
```

---

## 🎨 Cambios CSS no se aplican

### 1. Limpiar caché
```bash
npm run clean
npm run build
```

### 2. Hard refresh en navegador
- Chrome/Firefox: Ctrl+Shift+R (Cmd+Shift+R en Mac)

### 3. Verificar que Tailwind está compilando
```bash
# Ver archivo CSS generado
cat styles/globals.css
```

---

## 📱 No funciona en móvil

### 1. Verificar viewport
En `index.html` debe estar:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 2. Test responsive localmente
```bash
npm run dev
# Abre http://localhost:3000
# Usa DevTools → Toggle device toolbar (Ctrl+Shift+M)
```

### 3. Verificar breakpoints
Tailwind usa:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

---

## 🔍 Comandos de Debugging

```bash
# Ver todo el status
fly status

# Logs en tiempo real
fly logs

# Últimos 100 logs
fly logs --count=100

# SSH a la instancia
fly ssh console

# Ver configuración
fly config display

# Ver releases
fly releases

# Ver máquinas
fly machine list

# Restart específico
fly machine restart MACHINE_ID
```

---

## 🆘 Último Recurso

### Eliminar y recrear app
```bash
# ⚠️ CUIDADO: Esto elimina todo

# 1. Backup de secrets
fly secrets list > secrets-backup.txt

# 2. Eliminar app
fly apps destroy desokupaleal

# 3. Recrear
fly launch --no-deploy

# 4. Restaurar secrets
fly secrets set SUPABASE_URL="..."
# ... etc

# 5. Deploy
fly deploy
```

---

## 📞 Obtener Ayuda

### Logs detallados
```bash
fly logs --count=500 > logs.txt
```

Comparte `logs.txt` cuando pidas ayuda.

### Información del sistema
```bash
fly status
fly config display
fly secrets list (sin mostrar valores)
```

### Comunidades
- Fly.io: https://community.fly.io/
- Supabase: https://discord.supabase.com/
- Stack Overflow: Tag con `flyio` o `supabase`

---

## ✅ Checklist Pre-Deploy

Antes de `fly deploy`:

- [ ] `npm run build` funciona localmente
- [ ] No hay errores de TypeScript (`npm run lint`)
- [ ] Todas las dependencias en package.json
- [ ] Dockerfile existe
- [ ] .dockerignore existe
- [ ] Secrets configurados (`fly secrets list`)
- [ ] fly.toml tiene el nombre correcto de app

---

**Última actualización**: Enero 2025
