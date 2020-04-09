var a=document.getElementById("image");
		a.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)";
		var b=document.getElementById("head");
		var dob=document.getElementById("dob");
		function mouseover(element)
		{
			a.style.backgroundImage="url("+element.src+")";
			b.style.borderRadius="50px";
			b.style.backgroundColor="#d8e8cc";
			element.style.border="2px solid red";
			element.style.borderRadius="50px";
			b.style.padding="10px";

		}
		function mouseout(this1)
		{
			a.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)";
			b.style.borderRadius="0px";
			b.style.backgroundColor="transparent";
			this1.style.border="0px solid red";
			this1.style.borderRadius="0px";
		}
		
		function calcAge() {
      var date1 = new Date();
		var dob1= document.getElementById("input").value;
		dob=dob1.split("/");
		var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //to validate date format (dd/mm/yyyy)
		if(dob.length==3 && pattern.test(dob1))
		{
			var i=new Date;
			r=new Date(i.getDate()+"/"+i.getMonth()+"/"+i.getFullYear());
			l=Math.abs(dob[2]-i.getFullYear());
			out.innerHTML="==>You are "+l+" years old!!";
			out.style.color="#2809ed";
		} 
		else 
		{
		    out.innerHTML="==>Invalid date format. Please Input in (dd/mm/yyyy) format!";
		    alert("please enter valid dob");
		    out.style.color="red";
		 }
}
		 function getRandomColor()
		{
			var symbols,color;
			symbols="0123456789ABCDEF";
			color="#";
			for(i=0;i<6;i++)
			{
				color=color+symbols[Math.floor(Math.random()*16)];
				
			}
			return color;
		}
		/*function random_bg_color(){
			 var x=Math.round(Math.random()*255);
			 var y=Math.round(Math.random()*255);
			 var z=Math.round(Math.random()*255);
			 var bg="background:rgb("+x+", "+y+", "+z+");";
			 return bg;
			}*/
		function gcolor()
		{
			var c=getRandomColor();
			var r=document.getElementById("rc");
			var p=document.getElementById("rc1");
			r.style.backgroundImage="linear-gradient("+c+","+c+")"
			p.style.color=getRandomColor();

		}