function loadTime() {
    fetch('/time')
        .then(res => res.text())
        .then(data => {
            document.getElementById('time').innerText = data;
        });
}