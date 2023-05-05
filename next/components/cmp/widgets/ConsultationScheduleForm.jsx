import React, {useState} from 'react'
import styles from './../style/widgets/ConsultationScheduleForm.module.css'

function ConsultationScheduleForm({ countryListUrl, postFormUrl }) {
    const countries = [];
    const [formSuccess, setFormSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        respondent_id: "", // using email as respondent_id
        country: "",
        phone: "",
        message: ""
      });
    const submitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault()

        const formURL = e.target.action
        const data = new FormData()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })

        // POST the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            body: data,
            headers: { 'accept': 'application/json',},
        })
        .then(response => response.json())
        .then((data) => {
            console.log('done', data);
            // handle data
            setFormData({
                name: "",
                respondent_id: "",
                country: "",
                phone: "",
                message: ""
            })
        }).catch(error => {
            console.error('ConsultationScheduleForm - error',error);
        });
    }

    const handleChange = (event) =>{    
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <form id="consultation-form" className={"row g-3 " + styles.consultation_form} action={postFormUrl} method="POST" onSubmit={submitForm}>
                        <input type="hidden" name="_token" defaultValue="v5no7DcVCAHXRn1Dh5hVdG7BBlUdw2X7NuDKwHo9" />
                        <h4 className=" text-center">Schedule a Consultation</h4>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="inputAddress" name="name" value={formData.name}  onChange={handleChange}  placeholder="Full name" required="required" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="input_respondent_id" className="form-label">Your Email</label>
                            <input type="email" className="form-control" id="input_respondent_id" name="respondent_id" value={formData.respondent_id}  onChange={handleChange} placeholder="Email address" required="required"/>
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputState" className="form-label">Country</label>
                            <select id="inputState" className="form-select" name="country_id">
                                <option>Choose...</option>
                                {countries.map((item, key) => (
                                    <option value={item.id} key={key}>{item.name}</option>
                                ))
                                }
                            </select>
                        </div>
                        <div className="col-md-7">
                            <label htmlFor="inputCity" className="form-label">Your Phone</label>
                            <input type="text" className="form-control" name="phone" id="inputCity" value={formData.phone}  onChange={handleChange} placeholder="Phone number" required="required" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Message</label>
                            <textarea className="form-control" name="message" value={formData.message}  onChange={handleChange} placeholder="Your Message"
                                data-error="Please, leave us a message."></textarea>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#2b5592" }}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ConsultationScheduleForm