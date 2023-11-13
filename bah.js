document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById('trainemaentTaskScreen-85');
    let button = document.getElementById('printButton')

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
});
