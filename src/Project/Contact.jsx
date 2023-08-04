import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <img src="/image/desk.png" id="desk"/>
            
            <form id="contactform">
                <div class="mb-3" id="contact1">
                    <input type="text" placeholder="Enter Your First Name" class="form-control" id="Inputtext1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3" id="contact1">
                    <input type="text" placeholder="Enter Your last Name" class="form-control" id="Inputtext2" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <input type="email" placeholder="Enter Your Email Address" class="form-control" id="Inputmail1"/>
                </div>
                <div class="mb-3">
                    <input type="number" placeholder="Enter Your Phone Number" class="form-control" id="Inputnumber1"/>
                </div>
                <textarea class="form-control" placeholder="Reason To Contact Us" id="Textarea1"></textarea>
                
                <button type="submit" class="btn btn-primary" id="contactbutton">Submit</button>
            </form>
        </div>
    )
}

export default Contact;