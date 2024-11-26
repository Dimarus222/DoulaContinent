function showSection(section) {
    const sections = ['profile', 'registration', 'login', 'about'];
    sections.forEach(function (sec) {
        document.getElementById(sec).classList.add('hidden');
    });
    document.getElementById(section).classList.remove('hidden');
}

function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    // Здесь можно добавить логику регистрации
    alert(`Пользователь ${username} зарегистрирован!`);
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Здесь можно добавить логику входа
    alert(`Пользователь ${username} вошел в систему!`);
}
