<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login and Signup</title>
    <style>
        /* Your existing styles here */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body, html {
            height: 100%;
            font-family: Arial, sans-serif;
        }

        /* Background Image */
        body {
            background: url('path_to_your_background_image') no-repeat center center fixed; /* Replace with your image URL */
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Container */
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Form Container */
        .form-container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            width: 350px;
            text-align: center;
        }

        .form-container input[type="email"],
        .form-container input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        .form-container input[type="checkbox"] {
            margin-right: 5px;
        }

        .form-container label {
            font-size: 14px;
            color: #333;
        }

        /* Button */
        .form-container button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            border: none;
            color: white;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
        }

        .form-container button:hover {
            background-color: #0069d9;
        }

        /* Links */
        .form-container .forgot-password {
            display: block;
            text-align: right;
            font-size: 14px;
            margin-top: 5px;
            color: #007bff;
            text-decoration: none;
        }

        .form-container .forgot-password:hover {
            text-decoration: underline;
        }

        .form-container .remember-me {
            display: inline-block;
            font-size: 14px;
        }

        /* Tab navigation */
        .tab {
            cursor: pointer;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 5px;
        }

        .tab.active {
            background-color: #007bff;
            color: white;
        }

        .tab-container {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="form-container">
            <div class="tab-container">
                <div id="login-tab" class="tab active" onclick="showLogin()">Login</div>
                <div id="signup-tab" class="tab" onclick="showSignup()">Sign Up</div>
            </div>

            <div id="login-form">
                <h2>Login</h2>
                <form>
                    <div>
                        <input type="email" id="login-email" placeholder="Email address" required>
                    </div>
                    <div>
                        <input type="password" id="login-password" placeholder="Password" required>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <label class="remember-me">
                            <input type="checkbox" id="remember-me"> Remember me
                        </label>
                        <a href="#" class="forgot-password">Forgot password?</a>
                    </div>
                    <button type="button" onclick="handleLogin()">Sign In</button>
                </form>
            </div>

            <div id="signup-form" style="display: none;">
                <h2>Sign Up</h2>
                <form>
                    <div>
                        <input type="email" id="signup-email" placeholder="Email address" required>
                    </div>
                    <div>
                        <input type="password" id="signup-password" placeholder="Password" required>
                    </div>
                    <button type="button" onclick="handleSignup()">Sign Up</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        function showLogin() {
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('login-tab').classList.add('active');
            document.getElementById('signup-tab').classList.remove('active');
        }

        function showSignup() {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('signup-form').style.display = 'block';
            document.getElementById('login-tab').classList.remove('active');
            document.getElementById('signup-tab').classList.add('active');
        }

        async function handleLogin() {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            const response = await fetch('https://your-backend-url/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            alert(result.message);
        }

        async function handleSignup() {
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            const response = await fetch('https://your-backend-url/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            alert(result.message);

            if (result.success) {
                // Redirect to login page on successful signup
                showLogin();
            }
        }
    </script>

</body>
</html>
