document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById('header-container');
    const headerRequest = new XMLHttpRequest();
    headerRequest.onload = function () {
        headerContainer.innerHTML = this.responseText;
    };
    headerRequest.open('GET', 'header.html', true);
    headerRequest.send();
});
