document.getElementById('min-price').addEventListener('input', function () {
    if (this.value < 0) {
        this.value = 0;
    }
});

document.getElementById('max-price').addEventListener('input', function () {
    if (this.value < 0) {
        this.value = 0;
    }
});
