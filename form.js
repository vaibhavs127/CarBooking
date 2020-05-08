var x = document.getElementById("form-book");
var createform = document.createElement('form'); // Create New Element Form
var creatediv = document.createElement('div');
creatediv.className="form-row";
var creatediv1 = document.createElement('div');
creatediv1.className="form-group col-md-6";
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Booking Details ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var contactlabel = document.createElement('label'); // Create Label for E-mail Field
contactlabel.innerHTML = "Your Contact Number : ";
createform.appendChild(contactlabel);

var contactelement = document.createElement('input'); // Create Input Field for E-mail
contactelement.setAttribute("type", "text");
contactelement.setAttribute("name", "demail");
createform.appendChild(contactelement);

var contactbreak = document.createElement('br');
createform.appendChild(contactbreak);

var datelabel = document.createElement('label'); // Append Textarea
datelabel.innerHTML = "Issue Date : ";
createform.appendChild(datelabel);

var texareaelement = document.createElement('input');
texareaelement.setAttribute("type", "date");
texareaelement.setAttribute("Date", "ddate");
createform.appendChild(texareaelement);

var datebreak = document.createElement('br');
createform.appendChild(datebreak);

var datelabel1 = document.createElement('label'); // Append Textarea
datelabel1.innerHTML = "Return Date : ";
createform.appendChild(datelabel1);

var texareaelement1 = document.createElement('input');
texareaelement1.setAttribute("type", "date");
texareaelement1.setAttribute("Date", "ddate");
createform.appendChild(texareaelement1);

var datebreak1 = document.createElement('br');
createform.appendChild(datebreak1);


var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Book");
createform.appendChild(submitelement);
