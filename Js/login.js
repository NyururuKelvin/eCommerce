function check(form)
{

if(form.userid.value == "kelvin" && form.pwd.value === "nyururu")
{
	alert ("Login successfully");
	window.location = "index.html"; // Redirecting to users home page.
	return false;
	
}
else if(form.userid.value == "Amimo" && form.pwd.value === "amimo")
{
	window.location = "index.html"; // Redirecting to users home page.
	return false;
}
else if(form.userid.value == "Wanzala" && form.pwd.value === "wanzala")
{
	window.location = "index.html"; // Redirecting to users users page.
	return false;

}
else if(form.userid.value == "Israel" && form.pwd.value === "israel")
{
	window.location = "userhomepage.html"; // Redirecting to users home page.
	return false;
	
}
else if(form.userid.value == "admin" && form.pwd.value === "admin")
{
	window.location = "Admin.html"; // Redirecting to users admin page.
	return false;

}
else
{
	alert("Error invalid Username or Password")
	return false;
}
}