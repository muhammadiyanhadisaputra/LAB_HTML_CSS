// Validasi form Bootstrap + tampilkan modal saat valid
const form = document.getElementById('demoForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        e.stopPropagation();
    } else {
        new bootstrap.Modal(document.getElementById('successModal')).show();
    }
    form.classList.add('was-validated');
});
form.addEventListener('reset', function () { form.classList.remove('was-validated'); });