document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения формы
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Здесь можно добавить логику для обработки регистрации (например, отправка на сервер)

    // Уведомляем пользователя об успешной регистрации
    document.getElementById('message').innerText = `Спасибо, ${username}! Вы успешно зарегистрированы.`;

    // Очищаем поля формы
    document.getElementById('registrationForm').reset();
});
