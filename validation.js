$().ready(function() {
    $("form[name='contact_form']").validate({
        rules: {
            Email: {
                email: true
            }
        },
        messages: {
            Email: "Please Enter a Valid Email id",
            Name: "Please Enter your Name",
            subject: "Please Enter the subject of your message",
            message: "Please Enter your message"
        },
        submitHandler: function(form) {
            form.submit();
        }

    });
});