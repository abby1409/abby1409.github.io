//javascript toggle

function toggle(id, link) {
      var e = document.getElementById(id);
     
      if (e.style.display == '') {
        e.style.display = 'none';
	link.innerHTML = '+Additional Details';
	}
      else {
        e.style.display = '';
	link.innerHTML = '-Additional Details';
	}
    }