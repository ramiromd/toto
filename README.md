# Toto

## Tech specs

- Node.js
- TypeScript
- SQLite
- Vue.js
- Electron

## Architecture

Toto sigue una arquitectura mono repo, donde cada paquete vive en su propio directorio en la raíz del proyecto y evoluciona de forma independiente, compartiendo historial de versiones y herramientas comunes.

Actualmente el repositorio se organiza en los siguientes paquetes:

| Módulo | Descripción | Documentación |
| --- | --- | --- |
| `core` | Núcleo de la aplicación, escrito en TypeScript sobre Node.js. Implementa la lógica de negocio siguiendo los principios de Domain-Driven Design y Clean Architecture, con una separación clara entre dominio, casos de uso e infraestructura. | [core/README.md](core/README.md) |