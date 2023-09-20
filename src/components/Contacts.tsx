import React from 'react'
import '../App.css'

const phoneNumber = '+358465508147';

function openWhatsAppWithPhoneNumber(phoneNumber: string) {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappURL = `https://wa.me/${cleanedPhoneNumber}`;
  window.open(whatsappURL);
}

function openLinkedIn() {
  const linkedinURL = `https://www.linkedin.com/in/vladislavpogudin/`;
  window.open(linkedinURL);
}

function openEMail() {
  const emailURL = `mailto:vladislavpogudin9b@gmail.com`;
  window.open(emailURL);
}

const Contacts = () => {
  const handleWhatsAppClick = () => {
    openWhatsAppWithPhoneNumber(phoneNumber);
  };

  return (
    <div className='underline'>
      <div className="contacts">Contacts</div>
      <tr className='contactsTable'>
        <th className="contactsRow">Email <div className="socialMediaLink" onClick={openEMail}>pogudinvladislav9b@gmail.com</div></th>
        <th className="contactsRow">LinkedIn <div className="socialMediaLink" onClick={openLinkedIn}>Vladislav Pogudin</div></th>
        <th className="contactsRow">WhatsApp <div className="socialMediaLink" onClick={handleWhatsAppClick}>+358465508147</div></th>
      </tr>
    </div>
  )
}

export default Contacts
