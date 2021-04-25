let count=0;
	let pass=document.querySelector('.pass');
    let decrease=document.querySelector('.decrement').addEventListener('click',function(){
	count-=1;
	pass.innerHTML=count;
	colours();
	})
	let increase=document.querySelector('.increment').addEventListener('click',function(){
	count+=1;
	pass.innerHTML=count;
	colours();
	})
	let reset=document.querySelector('.reset').addEventListener('click',function(){
	count=0;
	pass.innerHTML=count;
	colours();
	})
	
	function colours(){
		if(count>0)
		{
			pass.style.color="blue";
		}
		else if(count<0)
		{
			pass.style.color="red";
		}
		else
		{
			pass.style.color="purple";
		}
	}