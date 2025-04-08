import React from 'react';
import './Contact.css';

export default function Contact() {
	return (
		<div className="contact-card">
			<h1>Contact Me</h1>
			<p>
				📧 Email: <a href="mailto:mostafawaseem22@gmail.com">mostafawaseem22@gmail.com</a>
			</p>
			<p>
				📞 Phone: <a href="tel:+201234567890">+20-106-403-236-08</a>
			</p>
			<p>
				💼 LinkedIn: <a href="https://www.linkedin.com/in/mostafa-waseem-224aa6312/" target="_blank" rel="noopener noreferrer">Find me on LinkedIn</a>
			</p>
		</div>
	);
}
