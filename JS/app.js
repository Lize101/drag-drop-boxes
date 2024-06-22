const left = document.getElementById('left');
const right = document.getElementById('right');
const lists = document.getElementsByClassName('list');


for (list of lists) {
    list.addEventListener('dragstart', function(e) {
        let selected = e.target;
        console.log(e);

        right.addEventListener('dragover', function(e) {
            e.preventDefault();
        })

        right.addEventListener('drop', function(e) {
            right.appendChild(selected);
            selected.style.background = 'green';
            selected = null;
        })

        left.addEventListener('dragover', function(e) {
            e.preventDefault();
        })

        left.addEventListener('drop', function(e) {
            left.appendChild(selected);
            selected.style.background = '#77180e';
            selected = null;
        })
    })


}




