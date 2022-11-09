import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactsView from '../views/ContactsView'

const Breadcrumb = () => {
  return (
    <section className='breadcrumb d-none'>
        <div className='container'>
          <NavLink className="home" to="/" end>Home</NavLink>
          <p>></p>
          <NavLink className="contacts" to={ContactsView} end>Contacts</NavLink>
        </div>
    </section>
  )
}

export default Breadcrumb