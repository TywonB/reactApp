import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
      <>
    <div className="contact">
        <div>
            <h1 className="contact-info">Painter Contact Information:</h1>
            <h2 className="contact-info">JerMaine Days</h2>
            <p>Email: <Link to="mailto:painterpro@gmail.com" target="_blank">painterpro@gmail.com</Link></p>
            <p>Cell: 123-456-7890</p>
            <p>Social:</p>
            <ul>
                <li>Twitter: @painterpro</li>
                <li>Facebook: @paintpro</li>
                <li>Instagram: @icanpaint</li>
            </ul>
        </div>
        <div>
            <h1 className="contact-info">Constructor Contact Information:</h1>
            <h2 className="contact-info">Matthew Don</h2>
            <p>Email: <Link to="mailto:constructorpro@gmail.com" target="_blank">constructorpro@gmail.com</Link></p>
            <p>Cell: 098-765-4321</p>
            <p>Social:</p>
            <ul>
                <li>Twitter: @constructorpro</li>
                <li>Facebook: @constructionpro</li>
                <li>Instagram: @icanconstruct</li>
            </ul>
        </div>
        <div>
            <h1 className="contact-info">Landscaper Contact Information:</h1>
            <h2 className="contact-info">Richard Brown</h2>
            <p>Email: <Link to="mailto:landscaperpro@gmail.com" target="_blank">landscaperpro@gmail.com</Link></p>
            <p>Cell: 100-000-0000</p>
            <p>Social:</p>
            <ul>
                <li>Twitter: @landscaperpro</li>
                <li>Facebook: @landscapepro</li>
                <li>Instagram: @icanlandscape</li>
            </ul>
        </div>
    </div>
    <div className="contact2">
        <div>
            <h1 className="contact-info">Plumber Contact Information:</h1>
            <h2 className="contact-info">Johnathan Boyd</h2>
            <p>Email: <Link to="mailto:plumberpro@gmail.com" target="_blank">plumberpro@gmail.com</Link></p>
            <p>Cell: 120-000-0000</p>
            <p>Social:</p>
            <ul>
                <li>Twitter: @plumberpro</li>
                <li>Facebook: @plumberpro</li>
                <li>Instagram: @iamtheplumber</li>
            </ul>
        </div>
        <div>
            <h1 className="contact-info">Carpenter Contact Information:</h1>
            <h2 className="contact-info">Maurice Mayweather</h2>
            <p>Email: <Link to="mailto:carpenterpro@gmail.com" target="_blank">carpenterpro@gmail.com</Link></p>
            <p>Cell: 123-000-0000</p>
            <p>Social:</p>
            <ul>
                <li>Twitter: @carpenterpro</li>
                <li>Facebook: @carpenterpro</li>
                <li>Instagram: @iamthecarpenter</li>
            </ul>
        </div>
        <div>
            <h1 className="contact-info">Contractor Contact Information:</h1>
            <h2 className="contact-info">Jenny Power</h2>
            <p>Email: <Link to="mailto:contractorpro@gmail.com" target="_blank">contractorpro@gmail.com</Link></p>
            <p>Cell: 123-400-0000</p>
            <p>Social:</p>
            <ul>
                <li>Twitter: @contractorpro</li>
                <li>Facebook: @contractorpro</li>
                <li>Instagram: @iamthecontractor</li>
            </ul>
        </div>
    </div>
    <div className="contact3">
        <div>
            <h1 className="contact-info">Electrician Contact Information:</h1>
            <h2 className="contact-info">Rick Brown</h2>
            <p>Email: <Link to="mailto:electricianpro@gmail.com" target="_blank">electricianpro@gmail.com</Link></p>
            <p>Cell: 123-450-0000</p>
            <p>Social:</p>
            <ul>
                <li>Twitter: @electricianpro</li>
                <li>Facebook: @electricianpro</li>
                <li>Instagram: @iamtheelectrician</li>
            </ul>
        </div>
        <div>
            <h1 className="contact-info">Realtor Contact Information:</h1>
            <h2 className="contact-info">Gabby Union</h2>
            <p>Email: <Link to="mailto:realtorpro@gmail.com" target="_blank">realtorpro@gmail.com</Link></p>
            <p>Cell: 123-456-0000</p>
            <p>Social:</p>
            <ul>
                <li>Twitter: @realtorpro</li>
                <li>Facebook: @realtorpro</li>
                <li>Instagram: @iamtherealtor</li>
            </ul>
        </div>
    </div>
    </>
  );
}

export default Contact;