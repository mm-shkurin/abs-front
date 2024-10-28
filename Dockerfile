# Используем базовый образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы проекта
COPY . .

# Открываем порт, на котором работает ваше приложение
EXPOSE 5173

# Команда для запуска вашего приложения
CMD ["npm", "start"]