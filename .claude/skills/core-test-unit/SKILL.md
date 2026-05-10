---
name: "core-test-unit"
description: "Especificaciones para el desarrollo de unit test en el módulo core."
---

Cuando escribas unit tests para el módulo core, asegúrate de seguir estas especificaciones:

**Scaffolding**

- Los unit tests deben estar ubicados dentro del directorio `core/tests/unit`.
- Los unit tests deben organizarse en subdirectorios que reflejen la estructura del código fuente, por ejemplo, `core/tests/unit/users/domain/entity` para tests relacionados con el dominio.
- Cada archivo de test debe nombrarse siguiendo el patrón `*.spec.ts`, por ejemplo, `user.spec.ts`.

**Tools**

- Utiliza Jest como framework de testing.

**Best Practices**

- Cada unit test debe enfocarse en una unidad específica de código, como una función o un método, y no debe involucrar dependencias externas.
- Cada unit test debe ser independiente y no depender de otros tests.
- Cuando realices unit tests sobre objetos planos, por ejemplo value objects o data transfer objects, mínimamente cubre los constructores, los métodos accessors y las validaciones de invariantes.
- Cuando realices unit tests sobre enums, mínimamente cubre los casos de uso de cada valor del enum.