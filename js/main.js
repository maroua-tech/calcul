let rectangle = document.querySelector('.rectangle');
let triangle = document.querySelector('.triangle');
let square = document.querySelector('.square');
let circle = document.querySelector('.circle');
let shapes = document.querySelectorAll('.shape');
let sections = document.querySelectorAll('section');
shapes.forEach((el) => {
    el.addEventListener('click', (e) => {
        // console.log(e.currentTarget.dataset.shape);
        sections.forEach((section) => {

            section.classList.remove('active');
            if (e.currentTarget.classList.contains(section.dataset.shape)) {
                section.classList.add('active');
            }
        });
    })
})
let area = document.querySelector('aside:last-of-type input#Area');
let perimeter = document.querySelector('aside:last-of-type input#perimeter');
let calculButton = document.querySelectorAll('input[type="button"]');
calculButton.forEach((button) => {
    button.addEventListener('click', () => {


        // sections.forEach((section) =>{
            

        let active = document.querySelector('section.active');
        let result;

            //  circle
            if (active.dataset.shape === 'circle') {
                console.log('Circle');
                result = document.querySelector('.active .result span');
                const PI = Math.PI;
                let radius = document.getElementById('radius').value;
                function circleArea() {
                    return PI * Math.pow(radius, 2);
                }
                function circlePerimeter() {
                    return 2 * PI * radius;
                }
                //console.log(perimeter.checked);
                if (area.checked == true && perimeter.checked == true) {
                    result.innerHTML = 'Area: ' + circleArea() + '  perimeter: ' + circlePerimeter();
                    console.log(circleArea() + ' perimeter: ' + circlePerimeter());
                }

                else if (area.checked == true) { 
                    result.innerHTML = 'Area: ' + circleArea() ;

                }
                else {
                    result.innerHTML = 'perimeter: ' + circlePerimeter();

                }
            }



            //  square
        if (active.dataset.shape === 'square') {

            console.log('square');
            result = document.querySelector('.active .result span');

                let Squarelength = document.getElementById('squarelength').value;
                function squareArea() {
                    return Math.pow(Squarelength, 2);
                }
                function squarePerimeter() {
                    return 4 * Squarelength;
                }
            if (area.checked == true && perimeter.checked == true) {
                result.innerHTML = 'Area: ' + squareArea() + '<br>' + 'perimeter: ' + squarePerimeter();

            }

            else if (area.checked == true) {
                result.innerHTML = 'Area: ' + squareArea();

            }
            else {
                result.innerHTML = 'perimeter: ' + squarePerimeter();

            }

            }


            //  triangle
        if (active.dataset.shape === 'triangle') {
            result = document.querySelector('.active .result span');

                let base = document.getElementById('base').value;
                let height = document.getElementById('height').value;
                function triangleArea() {
                    return (base * height) / 2;

                }
                function trianglePerimeter() {
                    // return 4 * length;
                }
            if (area.checked == true && perimeter.checked == true) {
                result.innerHTML = 'Area: ' + triangleArea() + '<br>' + 'perimeter: ' + trianglePerimeter();

            }

            else if (area.checked == true) {
                result.innerHTML = 'Area: ' + triangleArea();

            }
            else {
                result.innerHTML = 'perimeter: ' + trianglePerimeter();

            }

            }


            //  rectangle
        if (active.dataset.shape === 'rectangle') {

            result = document.querySelector('.active .result span');

                let length = document.getElementById('length').value;
                let diameter = document.getElementById('diameter').value;
                function rectangleArea() {
                    return diameter * length;
                }
                function rectanglePerimeter() {
                    return length * 2 + diameter * 2;
                }
            
            if (area.checked == true && perimeter.checked == true) {
                result.innerHTML = 'Area: ' + rectangleArea() + '<br>' + 'perimeter: ' + rectanglePerimeter();

               
            }

            else if (area.checked == true) {
                result.innerHTML = 'Area: ' + rectangleArea();

            }
            else {
                result.innerHTML = 'perimeter: ' + rectanglePerimeter();

            }
            }








    });
});