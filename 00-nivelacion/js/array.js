
const names = ["Juan", "Pedro", "Maria", "Ana", "Luis", "Jorge", "Carlos", "Alberto", "Juan", "Pedro", "Maria", "Ana", "Luis", "Jorge", "Carlos", "Alberto"];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

document.write("<ul>");
number.map( (number) => {
    document.write("<li>" + number + "</li>");
})
document.write("</ul>")
document.write("<h3>"+names[1]+"</h3>");
