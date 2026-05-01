# EUL - Elite Ukraine Logistics

Офіційний вебсайт-візитка для компанії EUL. Проєкт створений для залучення нових клієнтів, демонстрації послуг вантажоперевезень та швидкого зв'язку з менеджерами.

## Tech stack
- **Фреймворк:** [Next.js](https://nextjs.org/) (App Router)
- **Бібліотека:** [React](https://react.js.org/)
- **Стилізація:** CSS Modules 
- **Форматування коду:** Prettier

## Getting started

Щоб розгорнути проєкт на своєму комп'ютері, виконайте наступні кроки:
1. **Клонуйте репозиторій:**
```bash

git clone https://github.com/Vladislav-Pavlenko/eul.git
```
2. **Перейдіть у директорію проєкту:**
```bash

cd eul
```
3. **Встановіть залежності:**
```bash

npm install

# yarn install / pnpm install
```
4. **Запустіть сервер для розробки:**
```bash

npm run dev

# yarn dev / pnpm dev
```
5. Відкрийте http://localhost:3000 у вашому браузері, щоб побачити результат.

```
### EUL
├── 📂 public
│    └── 📂 image  
├── 📂 src
│    └── 📂 app
│        ├──  📂 components   
│        ├──  📂 fonts 
│        │    └── 📄 LiberationMono.woff2
│        ├──  📄 globals.css  
│        ├──  📄 layout.css
│        ├──  📄 page.module.css 
│        ├──  📄 page.tsx    
│        └──  📄 reset.css  
├── 📄 .gitignore
├── 📄 .prettierrc
├── 📄 eslint.config.mjs
├── 📄 next.config.ts
├── 📄 next-env.d.ts
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
└── 📄 tsconfig.json
```