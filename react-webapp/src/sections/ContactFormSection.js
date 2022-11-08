import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactsView from '../views/ContactsView'

const ContactFormSection = () => {
  return (
    <section className='contact-form'>
        <div className='breadcrumb'>
          <NavLink className="home" to="/" end>Home</NavLink>
          <p>/</p>
          <NavLink className="contacts" to={ContactsView} end>Contacts</NavLink>
        </div>
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37687.32778216318!2d15.176897095024389!3d59.2705750129479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14ce5262c35d%3A0x35322003293cc49e!2sEC%20Utbildning%20%C3%96rebro!5e0!3m2!1ssv!2sse!4v1667920645013!5m2!1ssv!2sse" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form className='contact-us'></form>
    </section>
  )
}

export default ContactFormSection