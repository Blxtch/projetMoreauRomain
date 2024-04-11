
/*simple fonction d'impression de la page*/

document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.getElementById("print");

    printButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.print();
    });
});

