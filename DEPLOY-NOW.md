# 🚀 Deploy AHORA - Instrucciones Rápidas

Los errores han sido corregidos. Sigue estos pasos para desplegar inmediatamente.

---

## ⚡ Opción 1: Deploy Directo (Más Rápido)

```bash
# 1. Asegúrate de estar en la raíz del proyecto
cd /ruta/a/desokupa-web

# 2. Deploy
fly deploy
```

**¡Eso es todo!** La app se desplegará automáticamente.

---

## ✅ Opción 2: Verificar Antes de Deploy (Recomendado)

### Paso 1: Test Local
```bash
# Limpiar
rm -rf node_modules dist

# Reinstalar dependencias
npm ci

# Build
npm run build
```

✅ **Si ves**: `✓ built in XXXms` → Continúa
❌ **Si hay errores**: Ve a [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

### Paso 2: Deploy
```bash
fly deploy
```

### Paso 3: Verificar
```bash
# Ver logs
fly logs

# Abrir app
fly open
```

---

## 🔍 Verificar Deploy Exitoso

### En la Terminal
Deberías ver algo como:
```
--> Building image done
==> Pushing image to fly
--> Pushing image done
==> Creating release
--> release v2 created
```

### Ver la App
```bash
fly open
```

La app debería abrir en tu navegador.

---

## 📋 Checklist Post-Deploy

Una vez que la app esté en línea:

- [ ] La web carga correctamente
- [ ] Todas las secciones son visibles
- [ ] El formulario de reservas funciona
- [ ] Los PDFs se descargan
- [ ] El sistema de cookies funciona
- [ ] No hay errores en la consola del navegador

---

## 🐛 Si Algo Falla

### Ver qué pasó
```bash
fly logs
```

### Verificar estado
```bash
fly status
```

### Ver releases
```bash
fly releases
```

### Reintentar
```bash
fly deploy --no-cache
```

---

## 🔧 Troubleshooting Rápido

### Error: "App not found"
```bash
# Verificar que estás en el proyecto correcto
fly status

# Si dice que no existe, verificar fly.toml
cat fly.toml | grep app
```

### Error: "Build failed"
```bash
# Build local primero
npm run build

# Si funciona local pero no en Fly.io
fly deploy --verbose
```

### Error: "Secrets not set"
```bash
# Verificar secrets
fly secrets list

# Configurar faltantes
fly secrets set NOMBRE="valor"
```

---

## 📊 Después del Deploy

### 1. Configurar GitHub Actions (Opcional)
Para deploy automático en cada push:

```bash
# 1. Obtener token
fly auth token

# 2. Agregar a GitHub
# Settings → Secrets → New secret
# Name: FLY_API_TOKEN
# Value: (pegar token)
```

### 2. Configurar Dominio Personalizado (Opcional)
```bash
fly certs add desokupacionleal.es
fly certs add www.desokupacionleal.es
```

### 3. Monitorear
```bash
# Logs en tiempo real
fly logs

# Dashboard
fly dashboard
```

---

## 🎉 Deploy Exitoso

Si todo funcionó, ahora tienes:

✅ Web en producción: `https://desokupaleal.fly.dev`
✅ HTTPS automático
✅ Sistema de reservas funcional
✅ Generación de PDFs
✅ Todo optimizado y listo

---

## 📚 Próximos Pasos

1. ✅ Verificar que todo funciona: [POST-DEPLOY.md](./POST-DEPLOY.md)
2. 🤖 Configurar deploy automático: [GITHUB-DEPLOY.md](./GITHUB-DEPLOY.md)
3. 🌐 Configurar dominio personalizado (en Fly.io dashboard)
4. 📊 Agregar Google Analytics (opcional)

---

## 💡 Tips

- **Logs**: Mantén `fly logs` abierto en una terminal
- **Status**: Verifica `fly status` regularmente
- **Updates**: Cada `fly deploy` actualiza la app
- **Rollback**: Si algo sale mal, `fly releases rollback vXXX`

---

## 🆘 Ayuda Adicional

- **Problemas comunes**: [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- **Comandos útiles**: [COMMANDS.md](./COMMANDS.md)
- **Guía completa**: [DEPLOY.md](./DEPLOY.md)
- **Fix reciente**: [FIX-SUMMARY.md](./FIX-SUMMARY.md)

---

**¡Listo para deploy!** 🚀

Ejecuta: `fly deploy`
