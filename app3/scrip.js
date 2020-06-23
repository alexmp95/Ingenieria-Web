var nombre = "Alexis";
var apellido = "Montoya"; 
let subtotal =500;
var descuento= 0;
const iva=0.12;
var nombrescompletos= nombre+" "+apellido;

//presentar datos en el navegado

//document.write(nombre);
//document.write(apellido);
//document.write(nombrescompletos);

var datos= document.getElementById("contenido");
var datos2= document.getElementById("contenido2");
var datos3= document.getElementById("contenido3");

datos.innerHTML=`
<h2> Nombre del cliente: ${nombre} ${apellido}</h2>`;

if (subtotal>=200) {
    datos2.innerHTML="Su monto es mayor a $200 ";
    descuento =0.10;
}else{
    datos2.innerHTML="Su monto es menor a $199 ";
    descuento =0.05;
}
for (let i = 0; i<10;i++){
    datos2.innerHTML += "<br>Poner atencion en clase<br>"  
}

function calculoIva(){
    var calIva = subtotal*iva;
    return calIva;
    
}

function imprimir(){
    var resIva=calculoIva(subtotal);
    var total=subtotal+resIva;
    datos.innerHTML +="<br>Su valor de iva a pagar es:"+resIva;
    datos.innerHTML +="<br>Su valor total de la factura es:"+total;
}


imprimir();

var productos =['Arroz','Azucar','Harina','Sal'];
datos3.innerHTML += "<h3> Detalle de productos</h3>";

for(let x=0;x<productos.length; x++){
    datos3.innerHTML += "<ul><li>"+productos[x]; "</li></ul>"
    
}
productos.forEach((producto)=>{
    document.write(producto+"<br>");
});
//alert("Welcome: " +nombrescompletos);
console.log(nombrescompletos);