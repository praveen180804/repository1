// Function to send message to chatbot
function sendMessage() {
    const input = document.getElementById('chatInput').value;
    const responseDiv = document.getElementById('chatResponse');

    if (input.trim() === '') return;  // Prevent sending empty messages

    fetch("{% url 'chatbot' %}", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": "{{ csrf_token }}",  // Include CSRF token for POST request
        },
        body: JSON.stringify({message: input}),  // Send user message as JSON
    })
    .then(response => response.json())
    .then(data => {
        // Display user message
        responseDiv.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

        // Display bot response
        responseDiv.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;

        // Scroll to the bottom of the chat
        responseDiv.scrollTop = responseDiv.scrollHeight;

        // Clear the input field
        document.getElementById('chatInput').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
