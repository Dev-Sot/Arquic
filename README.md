# Estudiante API — Clean Architecture (Node.js + Express)

## Estructura del proyecto

```
src/
├── domain/
│   ├── entities/
│   │   └── Estudiante.js
│   └── repositories/
│       └── EstudianteRepository.js
├── application/
│   └── usecases/
│       ├── CreateEstudiante.js
│       └── GetAllEstudiantes.js
├── infrastructure/
│   ├── controllers/
│   │   └── EstudianteController.js
│   ├── repositories/
│   │   └── InMemoryEstudianteRepository.js
│   └── config/
│       ├── container.js
│       └── routes/
│           └── estudianteRoutes.js
├── app.js
└── index.js
```

## Instalación y ejecución

```bash
npm install
npm start
```

## Endpoints

| Método | Ruta                | Descripción              |
|--------|---------------------|--------------------------|
| POST   | /api/estudiantes    | Crear un estudiante      |
| GET    | /api/estudiantes    | Obtener todos            |

## Pruebas con curl

```bash
# Crear un estudiante
curl -X POST http://localhost:3000/api/estudiantes -H "Content-Type: application/json" -d "{\"codigo\":\"EST-001\",\"nombre\":\"Juan Perez\"}"

# Crear estudiante alternativa

Invoke-RestMethod -Method POST http://localhost:3000/api/estudiantes -Headers @{"Content-Type"="application/json"} -Body '{"codigo":"EST-001","nombre":"Juan Perez"}'

# crear profesor

Invoke-RestMethod -Method POST `
  -Uri "http://localhost:3000/api/profesores" `
  -ContentType "application/json" `
  -Body '{"cedula":"123456","nombre":"Juan Pérez"}'

# Listar todos los estudiantes
curl http://localhost:3000/api/estudiantes

#Listar todos los profesores

Invoke-RestMethod -Method POST `
  -Uri "http://localhost:3000/api/profesores" `
  -ContentType "application/json" `
  -Body '{"cedula":"123456","nombre":"Juan Pérez"}'
```

