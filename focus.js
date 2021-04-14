const post = document.documentElement;
	post.addEventListener("mousemove", e =>{
		post.style.setProperty('--x', e.clientX + "px");
		post.style.setProperty('--y', e.clientY + "px");
	})