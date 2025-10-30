#!/bin/bash

# Script de verificación rápida antes de deploy
# Verifica que todo esté correcto antes de subir a Fly.io

set -e

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 DESOKUPA - Verificación Pre-Deploy${NC}"
echo "======================================"
echo ""

# Función para checkmark
check() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para error
error() {
    echo -e "${RED}❌ $1${NC}"
    exit 1
}

# Función para warning
warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# 1. Verificar archivos esenciales
echo "📁 Verificando archivos esenciales..."

[ -f "package.json" ] && check "package.json existe" || error "package.json no encontrado"
[ -f "Dockerfile" ] && check "Dockerfile existe" || error "Dockerfile no encontrado"
[ -f "fly.toml" ] && check "fly.toml existe" || error "fly.toml no encontrado"
[ -f "vite.config.ts" ] && check "vite.config.ts existe" || error "vite.config.ts no encontrado"
[ -f "App.tsx" ] && check "App.tsx existe" || error "App.tsx no encontrado"

echo ""

# 2. Verificar que no hay archivos duplicados
echo "🗑️  Verificando archivos duplicados..."

if [ -f "FUNDING.yml" ]; then
    error "FUNDING.yml duplicado en raíz (debe estar en .github/)"
fi

if [ -f "pull_request_template.md" ]; then
    error "pull_request_template.md duplicado en raíz (debe estar en .github/)"
fi

if [ -d "workflows" ]; then
    error "Carpeta workflows/ duplicada en raíz (debe estar en .github/)"
fi

if [ -d "Dockerfile" ] && [ "$(ls -A Dockerfile 2>/dev/null)" ]; then
    error "Carpeta Dockerfile/ contiene archivos (debe ser un archivo, no carpeta)"
fi

check "Sin archivos duplicados"

echo ""

# 3. Verificar node_modules
echo "📦 Verificando dependencias..."

if [ ! -d "node_modules" ]; then
    warning "node_modules no existe. Ejecuta: npm ci"
else
    check "node_modules existe"
fi

echo ""

# 4. Verificar que build funciona
echo "🔨 Intentando build..."

if npm run build > /dev/null 2>&1; then
    check "Build exitoso"
else
    error "Build falló. Ejecuta: npm run build para ver el error"
fi

echo ""

# 5. Verificar TypeScript
echo "📝 Verificando TypeScript..."

if npm run lint > /dev/null 2>&1; then
    check "TypeScript sin errores"
else
    warning "TypeScript tiene warnings (no crítico)"
fi

echo ""

# 6. Verificar estructura de carpetas
echo "📂 Verificando estructura..."

[ -d "components" ] && check "Carpeta components existe" || error "Carpeta components no encontrada"
[ -d "styles" ] && check "Carpeta styles existe" || error "Carpeta styles no encontrada"
[ -d "public" ] && check "Carpeta public existe" || error "Carpeta public no encontrada"
[ -d ".github/workflows" ] && check "GitHub workflows en lugar correcto" || warning "No hay GitHub workflows"

echo ""

# 7. Verificar archivos GitHub
echo "🐙 Verificando GitHub Actions..."

if [ -f ".github/workflows/deploy.yml" ]; then
    check "Deploy workflow existe"
else
    warning "No hay workflow de deploy (opcional)"
fi

echo ""

# 8. Verificar package.json
echo "📋 Verificando dependencias en package.json..."

if grep -q "jspdf" package.json; then
    check "jspdf en package.json"
else
    error "jspdf faltante en package.json"
fi

if grep -q "react-calendar" package.json; then
    check "react-calendar en package.json"
else
    error "react-calendar faltante en package.json"
fi

echo ""

# 9. Verificar fly.toml
echo "✈️  Verificando fly.toml..."

if grep -q "app = 'desokupaleal'" fly.toml; then
    check "Nombre de app correcto en fly.toml"
else
    warning "Verifica el nombre de app en fly.toml"
fi

echo ""

# 10. Verificar que estamos autenticados en Fly.io
echo "🔐 Verificando autenticación Fly.io..."

if command -v fly &> /dev/null; then
    if fly auth whoami &> /dev/null; then
        check "Autenticado en Fly.io como: $(fly auth whoami)"
    else
        warning "No autenticado en Fly.io. Ejecuta: fly auth login"
    fi
else
    warning "Fly CLI no instalado. Instala desde: https://fly.io/docs/hands-on/install-flyctl/"
fi

echo ""

# 11. Resumen final
echo "======================================"
echo -e "${GREEN}✅ VERIFICACIÓN COMPLETA${NC}"
echo "======================================"
echo ""
echo -e "${BLUE}📊 Resumen:${NC}"
echo "  ✅ Archivos esenciales presentes"
echo "  ✅ Sin duplicados"
echo "  ✅ Build funcional"
echo "  ✅ Estructura correcta"
echo ""
echo -e "${BLUE}🚀 Próximos pasos:${NC}"
echo "  1. Verifica secrets: ${YELLOW}fly secrets list${NC}"
echo "  2. Deploy: ${YELLOW}fly deploy${NC}"
echo "  3. Verifica: ${YELLOW}fly open${NC}"
echo ""
echo -e "${GREEN}¡Listo para deploy!${NC} 🎉"
