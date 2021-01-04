function generate(){
	var popup = document.getElementById("popup");
	var outer = document.getElementsByTagName("body");
	popup.classList.add("visible");

	var name = document.getElementById("fname").value;
	var address = document.getElementById("address").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var items=document.getElementsByName('acs');
	var sum = 0; 

	document.getElementById("form").innerHTML += "<h2>Order Report</h2><div class='personalinfo'><h3>Name :"+ name +"</h3><br/>"+
	"<h3>Address :"+ address +"</h3><br/>"+
	"<h3>Email :"+ email +"</h3><br/>"+
	"<h3>Phone :"+ phone +"</h3>"+
	"</div><h4>Item Ordered</h4><ul>";
	
	var selectedItems="";
	for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox' && items[i].checked==true){
			document.getElementById("form").innerHTML += "<li>"+ items[i].id +"<span>"+ items[i].value +"</span></li>";
			sum = sum + parseInt(items[i].value);
		}	
	}

	document.getElementById("form").innerHTML +="</ul>";
	document.getElementById("form").innerHTML += "<p id="+sum+" style='margin-top:20px'>Orignal Amount : <span>"+ sum +"</span></p>";
	var gst = (sum * 5)/100;
	document.getElementById("form").innerHTML += "<p>Total GST : <span>"+gst+"</span></p>";
	var totalAmount = sum + gst;
	document.getElementById("form").innerHTML += "<p style='margin-bottom:20px;'>Total Amount : <span>"+totalAmount+"</span></p>";
	document.getElementById("form").innerHTML += "<input type='submit' id='orderPlaced' class='vieworder' value='Place your order' name='submit' id='submit'>";

	

	var orderPlaced = document.getElementById("orderPlaced");
	orderPlaced.onclick = function(){
		if(name != "" && email != "" && phone != "" && address !="")
		{
			document.getElementById("form").innerHTML = "<h2>Order Report</h2><h3>Your order is successfully Placed!</h3>";
		}
		else{
			document.getElementById("form").innerHTML += "<p class='error'>Please fill all the fields!</p>";
		}
	}
	var cross=document.getElementById("cross");
	cross.onclick = function(){
		popup.classList.remove("visible");
	}
	
}
