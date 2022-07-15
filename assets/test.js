const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    initial:0,
    focusableElements: ['input'],
    slidesPerPage: 1,
    slidesPerView: 2,
    spaceBetween: 12,
    breakpoints: {
        900:{
            slidesPerPage: 1,
            slidesPerView: 3,
            spaceBetween: 20,
            loop:false
        },
        1230: {
            slidesPerPage: 1,
            slidesPerView: 4,
            spaceBetween: 24,
            loop:false
        }
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

let forms = document.querySelectorAll("form.shopify-product-form");
[].forEach.call(forms, function (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let el = event.target;
        let postObj = {
            id: el['id'].value,
            quantity: 1,
            sections: 'header'
        };
        window.fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'post',
            body: JSON.stringify(postObj),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((res) => {
            let header = document.getElementById('shopify-section-header');
            header.innerHTML = res.sections.header;
        }).catch((error) => {
            console.log(error)
        });
    });
});