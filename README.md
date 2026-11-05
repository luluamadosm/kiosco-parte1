# Kiosco El Rápido – Parte 1 (Frontend)

SPA de un kiosco de barrio hecha con Vite + React + TypeScript y react-router-dom.
Los productos son datos mock (`src/data/products.ts`).

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abrir http://localhost:5173

## Rutas

| Ruta            | Página        |
|-----------------|---------------|
| `/`             | Home          |
| `/products`     | Products      |
| `/products/:id` | ProductDetail |
| `/cart`         | Cart          |
| `*`             | NotFound      |
