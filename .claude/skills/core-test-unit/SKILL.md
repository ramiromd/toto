---
name: "core-test-unit"
description: "Especificaciones para el desarrollo de unit test en el módulo core."
---

# Specifications for core unit tests

Cuando escribas unit tests para el módulo core, asegúrate de seguir estas especificaciones:

## Scaffolding

- Los unit tests deben estar ubicados dentro del directorio `core/tests/unit`.
- Los unit tests deben organizarse en subdirectorios que reflejen la estructura del código fuente, por ejemplo, `core/tests/unit/users/domain/entity` para tests relacionados con el dominio.
- Cada archivo de test debe nombrarse siguiendo el patrón `*.spec.ts`, por ejemplo, `user.spec.ts`.

## Tools

- Utiliza Jest como framework de testing.

## Best practices


- Cada unit test debe enfocarse en una unidad específica de código, como una función o un método, y no debe involucrar dependencias externas.
- Cada unit test debe ser independiente y no depender de otros tests.
- Cuando realices unit tests sobre objetos planos, por ejemplo value objects o data transfer objects, mínimamente cubre los constructores, los métodos accessors (en un mismo test) y las validaciones de invariantes.
- Cuando realices unit tests sobre enums, mínimamente cubre los casos de uso de cada valor del enum.
- Utiliza el enfoque Given-When para estructurar y describir los tests, evitando el uso de Then para mantener la claridad y simplicidad de los tests unitarios.
- Asegúrate de que cada test tenga un nombre descriptivo que indique claramente lo que se está probando y el resultado esperado, siguiendo el formato `should [expected behavior] when [condition]`.
- Evita la duplicación de código en los tests utilizando funciones helper o setup común cuando sea necesario, pero mantén la simplicidad y claridad de los tests.
- Utiliza descripciones en inglés.