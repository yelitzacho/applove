window.addEventListener('load', function (evento){
	evento.preventDefault();

	var galeriaContenedor = document.getElementById('galeria');

	for (var i = 1; i <= 12; i++) {
		var urlImg = 'assets/img/galeria/img-'+ i + '.jpg';
		var li = document.createElement('li');
		var div = document.createElement('div');
		var figure = document.createElement('figure');
		var img = document.createElement('img');
		var img2 = document.createElement('img');
		var figcaption = document.createElement('figcaption');
		var span = document.createElement('span');
		var span2= document.createElement('span');

		img.setAttribute('src', urlImg);
		img.setAttribute('class', 'img-galeria');

		figure.appendChild(img);
		figure.setAttribute('class','contenedor-galeria');

		span.innerText = 'NOMBRE DEL PROYECTO '+i;
		span.setAttribute('class','close');
		figcaption.appendChild(span);

		figcaption.appendChild(img2);
		img2.setAttribute('class',"modalimagen");
		img2.setAttribute('id','myImg');

		figcaption.setAttribute('class','modal');

		figure.appendChild(figcaption);

		div.appendChild(figure);
  
		li.appendChild(div);

		galeriaContenedor.appendChild(li);

		var modalImg = document.getElementsByClassName("modal-content");
		var modal = document.getElementsByClassName('modal')[0];
		var imgModal = document.getElementById('myImg');
		var galeria = document.getElementById("galeria");
	    
		};

		galeria.addEventListener('click', function(e){
			if (e.target.tagName == "IMG") {
	        modal.style.display = "block";
	        console.log (e.target.src);
	        imgModal.src = e.target.src;
	        }

	    });
	}); 

/*

		var span = document.getElementsByClassName("close");

		

*/