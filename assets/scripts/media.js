<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("user_YOx9NdADaw3Rw01So");
   })();
</script>

function sendmail() {
    let fullname=document.getElementById("name").nodeValue;
    let userEmail=document.getElementById("email").nodeValue;
    let userMessage=document.getElementById("message").nodeValue;

    var contactParams= {
        from_name: fullname,
        from_email: userEmail,
        message: userMessage
    };

emailjs.send('service_piekapi', 'template_2k3tlol', contactParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });