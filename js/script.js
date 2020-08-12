/*json = {
    "examples": [{
        "question": `<h1>This is an example question 1 </h1> <mrow>
   <math xmlns="http://www.w3.org/1998/Math/MathML">
 <mrow>
   <msup>
     <mfenced>
       <mrow>
         <mi>a</mi>
         <mo>+</mo>
         <mi>b</mi>
       </mrow>
     </mfenced>
     <mn>2</mn>
   </msup>
 </mrow> 
</math>`,
        "answer": `<p>This is an example answer 1</p>`,
        "video": `<p>This is an example video 1</p>`,
    },
        {
            "question": `<h2>This is an example question 2 </h2> <mrow>
   <math xmlns="http://www.w3.org/1998/Math/MathML">
 <mrow>
   <msup>
     <mfenced>
       <mrow>
         <mi>a</mi>
         <mo>+</mo>
         <mi>b</mi>
       </mrow>
     </mfenced>
     <mn>2</mn>
   </msup>
 </mrow> 
</math>`,
            "answer": `<p>This is an example answer 2</p>`,
            "video": `<p>This is an example video 2</p> <iframe src="https://www.youtube.com/embed/YskpIu4RXZs"></iframe>`,
        },
    ],
};*/


/**
 Below this is the actual code.
 **/

var active = 1;
var page = "question";

var examples = document.getElementById("examples");
var exampleCount = 0;
for (i in json.examples) {
    exampleCount = exampleCount + 1;
    examples.innerHTML += `<a onClick=changeExample(this.id)` + ((exampleCount == 1) ? ` class="active"` : ``) + ` id="example_` +
        exampleCount + `">Example ` + exampleCount + `</a>`;
}

var content = document.getElementById("content");
content.innerHTML += "<div class='text'>" + json.examples[active - 1].question + "</div>";

function changeExample(element_id) {
    if (("example_" + active) != element_id) {
        var oldExample = document.getElementById(("example_" + active));
        oldExample.classList.toggle("active");

        var newExample = document.getElementById(element_id);
        newExample.classList.toggle("active");

        active = parseInt(element_id.replace("example_", ""));

        changePage("question");
    }
}

function changePage(element_id) {
    if (page != element_id) {
        var oldPage = document.getElementById(page);
        oldPage.classList.toggle("active");

        var newPage = document.getElementById(element_id);
        newPage.classList.toggle("active");

        page = element_id;
    }

    switch (element_id) {
        case "question":
            content.innerHTML = "<div class='text'>" + json.examples[active - 1].question + "</div>";
            break;
        case "answer":
            content.innerHTML = "<div class='text'>" + json.examples[active - 1].answer + "</div>";
            break;
        case "video":
            content.innerHTML = "<div class='video'>" + json.examples[active - 1].video + "</div>";
            break;
        default:
            content.innerHTML = "<div class='text'>" + json.examples[active - 1].question + "</div>";
            break;
    }
}