# Screenshots
   
   This folder contains application screenshots for the README.
```
4. **Commit message**: `Create screenshots folder`
5. Нажми **"Commit changes"**

**Шаг 2: Загрузи скриншоты**
1. Перейди в папку **screenshots** (теперь она создана)
2. Нажми **"Add file" → "Upload files"**
3. Перетащи свои файлы:
   - `home-page.png` (тот что в корне)
   - `search-result.png` (тот что в корне)
4. **Commit message**: `Add application screenshots`
5. Нажми **"Commit changes"**

**Шаг 3: Удали старые файлы из корня**
1. Вернись в корень репозитория
2. Найди файлы:
   - `home-page.png`
   - `home-page.png.PNG`
   - `search-result.png`
   - `search-result.png.PNG`
3. Для каждого файла:
   - Открой файл
   - Нажми на значок **корзины** (Delete this file)
   - **Commit message**: `Remove duplicate screenshot from root`
   - Нажми **"Commit changes"**

---

### **Способ 2: Переименовать существующие файлы (быстрее)**

1. Открой файл `home-page.png` в корне
2. Нажми на значок **карандаша** (Edit this file)
3. В поле имени файла измени `home-page.png` на `screenshots/home-page.png`
4. **Commit message**: `Move home-page.png to screenshots folder`
5. Нажми **"Commit changes"**

6. Повтори для `search-result.png`:
   - Переименуй в `screenshots/search-result.png`
   - **Commit message**: `Move search-result.png to screenshots folder`

7. Удали дубликаты `home-page.png.PNG` и `search-result.png.PNG` из корня

---

### **После перемещения:**

Структура должна выглядеть так:
```
movie-search-app/
├── app/
├── screenshots/
│   ├── home-page.png       ← скриншот главной страницы
│   └── search-result.png   ← скриншот результатов поиска
├── .gitignore
├── LICENSE
├── README.md
├── next.config.mjs
├── package.json
└── ...
