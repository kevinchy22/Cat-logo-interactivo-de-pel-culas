# Catálogo Interactivo de Películas

Aplicación web hecha con React + Vite (sin backend) para explorar un catálogo de películas.

## Funcionalidades

- Catálogo de películas en tarjetas (imagen, título, género, año, calificación y descripción)
- Buscador por título en tiempo real
- Filtros por género, año, calificación mínima y solo favoritas (combinables con el buscador)
- Detalle de película (se puede abrir y cerrar)
- Favoritos: agregar, quitar y listar (se guardan solo los IDs)
- Valoración personal de 1 a 5 estrellas
- Mensaje cuando no hay resultados

## Estructura

```
src/
├── data/movies.js
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── Filters.jsx
│   ├── MovieList.jsx
│   ├── MovieCard.jsx
│   ├── MovieDetail.jsx
│   ├── StarRating.jsx
│   └── Favorites.jsx
├── App.jsx
└── App.css
```

## Cómo ejecutarlo

```bash

npm install
cd us-laboratory
npm run dev
```

Luego abre http://localhost:5173

## Autor

Kevin David Beltrán Valverde - Universidad de San Buenaventura