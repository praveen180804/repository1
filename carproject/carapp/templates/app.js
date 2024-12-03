document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('https://your-backend-url/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    alert(result.message);
});

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('https://your-backend-url/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    alert(result.message);
});
