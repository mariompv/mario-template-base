# Mario Template Base

Plantilla de arquitectura lista para producción con flujos de integración continua automatizados para calidad de código, pruebas de extremo a extremo, seguridad y rendimiento.

## Características

* ⚡ **Core**: React 19 + TypeScript + Vite.
* 🔍 **Calidad de Código**: ESLint y Prettier preconfigurados a nivel estricto.
* 🛡️ **Seguridad**: Análisis estático y de dependencias con Snyk Security.
* 🧪 **Pruebas Unitarias**: Vitest.
* 🎭 **Pruebas E2E**: Playwright levantando navegadores reales (Chromium, Firefox, WebKit).
* 📈 **Pruebas de Estrés**: k6 (de Grafana) para simular rampa de carga y latencia.
* ⚙️ **Git Hooks**: Hooks locales configurados para formatear y validar código en pre-commit y pre-push.

## Estructura de Comandos

Instalar todas las dependencias y browsers E2E:
```bash
npm install
npx playwright install --with-deps
