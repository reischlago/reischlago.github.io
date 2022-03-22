

<script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>


<script>
   const constraints = {
       ques1: {
           presence: { allowEmpty: true }
       },
       ques2: {
           presence: { allowEmpty: true }
       },
       ques3: {
           presence: { allowEmpty: true }
       },
       email: {
           presence: { allowEmpty: true },
           email: true
       }
   };

   const form = document.getElementById('contact-form');

   form.addEventListener('submit', function (event) {
     const formValues = {
         ques1: form.elements.message.value,
         ques2: form.elements.message.value,
         ques3: form.elements.message.value,
         email: form.elements.email.value
     };

     const errors = validate(formValues, constraints);

     if (errors) {
       event.preventDefault();
       const errorMessage = Object
           .values(errors)
           .map(function (fieldValues) { return fieldValues.join(', ')})
           .join("\n");

       alert(errorMessage);
     }
   }, false);
</script>
