import React from 'react'

const Contact = () => {
    return (
        <div>
            <div class="contact-clean" style={{paddingTop: 141}}>
                <form method="post">
                    <h2 class="text-center">Nous contacter</h2>
                    <div class="form-group"><input class="form-control" type="text" name="name" placeholder="Nom" required=""/></div>
                    <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" required=""/></div>
                    <div class="form-group"><textarea class="form-control" name="message" placeholder="Message" rows="14" style={{marginRight: 7 ,marginLeft: 7}} ></textarea></div>
                    <div class="form-group"><button class="btn btn-primary" type="submit">Envoyer </button></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
