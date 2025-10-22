"use client";

import { useState } from "react";
import Image from "next/image";

// Интерфейс для типизации объекта фильма из API
interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
}

export default function Home() {
  // Хуки состояния для управления данными приложения
  const [query, setQuery] = useState<string>(""); // Поисковый запрос
  const [movies, setMovies] = useState<Movie[]>([]); // Массив найденных фильмов
  const [loading, setLoading] = useState<boolean>(false); // Индикатор загрузки
  const [error, setError] = useState<string>(""); // Сообщение об ошибке
  const [searched, setSearched] = useState<boolean>(false); // Флаг что поиск был выполнен

  // Асинхронная функция для поиска фильмов через TMDB API
  const searchMovies = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем что пользователь ввел название фильма
    if (!query.trim()) {
      setError("Пожалуйста введите название фильма");
      return;
    }

    // Начинаем процесс загрузки
    setLoading(true);
    setError("");
    setSearched(true);

    try {
      // Получаем API ключ из переменных окружения
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      
      // Проверяем наличие ключа
      if (!apiKey) {
        throw new Error("API ключ не настроен");
      }

      // Делаем запрос к TMDB API для поиска фильмов
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
      );

      // Проверяем успешность запроса
      if (!response.ok) {
        throw new Error("Не удалось загрузить фильмы");
      }

      // Парсим JSON ответ и сохраняем результаты
      const data = await response.json();
      setMovies(data.results || []);
    } catch (err) {
      // Обрабатываем ошибки с правильной типизацией
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Произошла неожиданная ошибка");
      }
      setMovies([]);
    } finally {
      // Завершаем загрузку в любом случае
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🎬 Movie Search App
          </h1>
          <p className="text-gray-300 text-lg">
            Найди свои любимые фильмы с помощью TMDB
          </p>
        </div>

        {/* Форма поиска фильмов */}
        <form onSubmit={searchMovies} className="mb-12">
          <div className="flex gap-4 max-w-2xl mx-auto">
            {/* Поле ввода для названия фильма */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Введите название фильма..."
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            {/* Кнопка отправки формы */}
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? "Поиск..." : "Найти"}
            </button>
          </div>
        </form>

        {/* Блок отображения ошибок */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-500/20 border border-red-500 rounded-lg">
            <p className="text-red-200 text-center">{error}</p>
          </div>
        )}

        {/* Сообщение когда фильмы не найдены */}
        {searched && !loading && movies.length === 0 && !error && (
          <p className="text-center text-gray-300 text-xl">
            Фильмы не найдены. Попробуйте другой запрос!
          </p>
        )}

        {/* Сетка с карточками фильмов */}
        {movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-white/20 hover:border-purple-500"
              >
                {/* Постер фильма */}
                <div className="relative h-64 bg-gray-800">
                  {movie.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    // Плейсхолдер если постера нет
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Нет изображения
                    </div>
                  )}
                </div>

                {/* Информация о фильме */}
                <div className="p-4">
                  {/* Название фильма */}
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {movie.title}
                  </h3>
                  
                  {/* Год выпуска и рейтинг */}
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="text-gray-300">
                      {movie.release_date?.split("-")[0] || "Неизвестно"}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </span>
                  </div>

                  {/* Описание фильма */}
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {movie.overview || "Описание отсутствует."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
