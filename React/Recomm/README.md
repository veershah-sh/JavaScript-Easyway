# Recomm - An Ecommerce site in React JS

## Steps of installation

```shell
npm create vite@latest
cd <project_folder>
npm install
# run project
npm run dev 
```

> Run following command to install this dependencies or you can install it from the links given below

```shell
npm install react-router-dom
```

- Setup Tailwind CSS

1. Install dependencies & initialize tailwindcss
```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Change this in [tailwind.config.js](./tailwind.config.js) file 

```javascript
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

3. Add the Tailwind directives to your CSS in [index.css](./src/index.css) file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Links for installation

- [Vite](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
- [Tailwind CSS for Vite](https://tailwindcss.com/docs/guides/vite)
