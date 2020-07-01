function check(form)
{

if(form.userid.value == "Kelvin" && form.pwd.value === "nyururu")
{
	alert ("Login successful");
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
	window.location = "index.html"; // Redirecting to users home page.
	return false;
	
}
else if(form.userid.value == "Peter" && form.pwd.value === "peter")
{
	window.location = "index.html"; // Redirecting to users home page.
	return false;
	
}
else if(form.userid.value == "admin" && form.pwd.value === "admin")
{
	window.location = "index.html"; // Redirecting to users admin page.
	return false;

}
else
{
	alert("Error: invalid Username or Password")
	return false;
}
}