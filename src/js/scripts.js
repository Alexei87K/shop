 function Popup(options){
    this.modal = document.querySelector(options.modal);
    this.modal2 = document.querySelector(options.modal2);
    this.overlay = document.querySelector(options.overlay); 
    this.catalog = document.querySelector(options.catalog);
    this.magazinelist = document.querySelector(options.magazinelist);
    this.magazinelist2 = document.querySelector(options.magazinelist2);
    this.own2 = document.querySelector(options.own2);
    this.closebtn2 = document.querySelector(options.closebtn2);

    var popup = this;
    
    this.open = function(content){
        popup.modal.append(content)
        content.style.display = 'block'
        popup.overlay.classList.add('open');
        popup.modal.classList.add('open');
    }
    this.open2 = function(content){
        popup.modal2.append(content)
        content.style.display = 'block'
        
        popup.modal2.classList.add('open');
    }
    this.close = function(){
        popup.overlay.classList.remove('open');
        popup.modal.classList.remove('open');
        popup.modal2.classList.remove('open');
    }
    this.openK = function(){
        
        popup.catalog.classList.toggle('open');
        // popup.catalog.style.display = 'block';
        

    }
    
    this.openBlock = function(){   
        popup.magazinelist.classList.toggle('open');
        //popup.magazinelist.style.display = 'block';
    }
    this.openBlock2 = function(){   
        popup.magazinelist2.classList.toggle('open');
        //popup.magazinelist.style.display = 'block';
    }

    this.overlay.onclick = popup.close;
    this.closebtn2.onclick = popup.close;
}

window.onload = function(){
    var p = new Popup({
        modal: '.modal',
        modal2: '.modal2',
        overlay: '.overlay',
        catalog: '.catalog',
        magazinelist: '.magazinelist',
        magazinelist2: '.magazinelist2',
        own2: '.own2',
        closebtn2: '.closebtn2'
    });


    document.querySelector('.city').onclick = function(){
        var form = document.querySelector('.for-callme-popup');
        p.open(form);
    };
    document.querySelector('.city2').onclick = function(){
        var form = document.querySelector('.own2');
        p.open2(form);
    };

    document.querySelector('.magazine').onclick = function(){
        p.openBlock();
    };
    document.querySelector('.magazine2').onclick = function(){
        p.openBlock2();
    };

    document.querySelector('.catalog-block').onclick = function(){
        p.openK('magazinelist');
    };
    

    document.querySelector('.own').onclick = function(evt) {
  if (evt.target.matches('li')) {
    choose.textContent = evt.target.textContent
  }
}
  document.querySelector('.own2').onclick = function(evt) {
  if (evt.target.matches('li')) {
    mob.textContent = evt.target.textContent
  }

 }
}





$('.slider').slick({
  dots: true,
  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
});





/* Открытие меню */
var main = function() { 
    $('.fa-align-center').click(function() { 
        $('.menu').animate({ 
            right: '0px' 
        }, 200); 
        $('body').animate({ 
            right: '225px' 
        }, 200); 
    });


/* Закрытие меню */
    $('.icon-close').click(function() { //выбираем класс icon-close и метод click
        $('.menu').animate({ //выбираем класс menu и метод animate
            right: '-480px' //при клике на крестик меню вернется назад в свое положение и скроется
        }, 200); //скорость движения меню в мс
        
    $('body').animate({ //выбираем тег body и метод animate
            right: '0px' //а содержимое страницы снова вернется в положение 0px
        }, 200); //скорость движения меню в мс
    });
};

$(document).ready(main);