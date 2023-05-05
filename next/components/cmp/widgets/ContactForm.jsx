import React from 'react'
import styles from './../style/widgets/ContactForm.module.css'

function ContactForm({ title, description, actionUrl, selectCategoryLabel, selectCategoryOptions, selectCategoryHelpText, businessEmailLabel, businessEmailHelpText, MessageLabel, MessageHelpText, receivePromoCheckboxLabel, receivePromoCheckboxHelpText, submitButtonLabel }) {
    const countries = [];
    return (
        <div>
            <div style={{"padding": "2em"}}>
                <h3>{title}</h3>
                <p>{description}</p>
                <form method="POST" action="actionUrl">
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">{selectCategoryLabel}</label>
                        <select className="form-select" aria-label="Default select example" aria-describedby="emailHelp">
                            {
                                selectCategoryOptions.map((opt) => {
                                    <option value={opt.value} key={opt.id}>{opt.label}</option>
                                })
                            }
                        </select>
                        <div id="emailHelp" className="form-text">{selectCategoryHelpText}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">{businessEmailLabel}</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">{businessEmailHelpText}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="messageInput" className="form-label">{MessageLabel}</label>
                        <textarea className="form-control" id="messageInput" aria-describedby="emailHelp"></textarea>
                        <div id="emailHelp" className="form-text">{MessageHelpText}</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" aria-describedby="emailHelp" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleCheck1">{receivePromoCheckboxLabel}</label>
                        <div id="emailHelp" className="form-text">{receivePromoCheckboxHelpText}</div>
                    </div>
                    <button type="submit" className="btn btn-secondary" style={{"padding": "1em 5em"}}>{submitButtonLabel}</button>
                </form>
            </div>

        </div>
    )
}

export default ContactForm