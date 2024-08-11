document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const uploadResult = document.getElementById('upload-result');
            uploadResult.innerHTML = `<p>File uploaded successfully!</p><img src="${event.target.result}" alt="Uploaded Image" style="max-width: 300px; margin-top: 1rem;">`;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file to upload.');
    }
});
