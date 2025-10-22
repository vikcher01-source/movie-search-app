# 🎬 Movie Search App

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://your-app-url.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

Современное, адаптивное веб-приложение для поиска фильмов, созданное с использованием Next.js 14, TypeScript и TMDB API. Ищите свои любимые фильмы и получайте подробную информацию о них, включая рейтинги, даты выхода и описания.

![Movie Search App Screenshot](./screenshots/home-page.png)

## ✨ Возможности

- 🔍 **Поиск в реальном времени** - Мгновенный поиск фильмов через TMDB API
- 🎨 **Современный UI** - Красивый дизайн с эффектами glassmorphism
- 📱 **Полная адаптивность** - Работает на компьютерах, планшетах и телефонах
- ⚡ **Быстрая загрузка** - Построен на Next.js 14 App Router
- 🎯 **Типобезопасность** - Полная реализация на TypeScript
- 🌙 **Темная тема** - Удобный для глаз темный интерфейс
- ⭐ **Рейтинги фильмов** - Отображение оценок TMDB и дат выхода
- 🖼️ **Качественные постеры** - Оптимизированные изображения с Next.js Image

## 🛠️ Технологии

- **Фреймворк**: [Next.js 14](https://nextjs.org/) (App Router)
- **Язык**: [TypeScript](https://www.typescriptlang.org/)
- **Стили**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [TMDB API](https://www.themoviedb.org/documentation/api)
- **Хостинг**: [Vercel](https://vercel.com/)

## 📸 Скриншоты

### Главная страница
![Home Page](./screenshots/home-page.png)

### Результаты поиска
![Search Results](./screenshots/search-result.png)

## 🚀 Быстрый старт

### Требования

- Node.js 18+ и npm
- API ключ TMDB ([Получить здесь](https://www.themoviedb.org/settings/api))

### Установка

1. **Клонировать репозиторий**
```bash
   git clone https://github.com/yourusername/movie-search-app.git
   cd movie-search-app
```

2. **Установить зависимости**
```bash
   npm install
```

3. **Настроить переменные окружения**
   
   Создайте файл `.env.local` в корневой директории:
```
   NEXT_PUBLIC_TMDB_API_KEY=ваш_api_ключ
```

4. **Запустить сервер разработки**
```bash
   npm run dev
```

5. **Открыть в браузере**
   
   Перейдите на [http://localhost:3000](http://localhost:3000)

## 📦 Сборка для продакшена
```bash
npm run build
npm start
```

## 🌐 Развертывание

Проект оптимизирован для развертывания на Vercel:

1. Загрузите код на GitHub
2. Импортируйте репозиторий на [Vercel](https://vercel.com)
3. Добавьте переменную окружения: `NEXT_PUBLIC_TMDB_API_KEY`
4. Разверните!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/movie-search-app)

## 🤝 Вклад в проект

Буду рад любому вкладу! Не стесняйтесь отправлять Pull Request.

1. Форкните проект
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Закоммитьте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Запушьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT - см. файл [LICENSE](LICENSE) для деталей.

## 👨‍💻 Контакты

**Ваше Имя**

- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 🌐 Upwork: [Your Upwork Profile](https://upwork.com/freelancers/yourprofile)
- 📧 Email: your.email@example.com
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

⭐ Если вам понравился этот проект, поставьте звезду на GitHub!

**Сделано с ❤️ используя Next.js и TMDB API**
