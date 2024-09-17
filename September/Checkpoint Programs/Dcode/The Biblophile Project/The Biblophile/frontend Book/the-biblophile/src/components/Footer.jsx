import React from 'react';
import './style.css'; 

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5 py-3">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/privacy" className="text-white">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="/terms" className="text-white">Terms of Use</a>
              </li>
              <li className="list-inline-item">
                <a href="/contact" className="text-white">Contact Us</a>
              </li>
            </ul>
            <ul className="list-inline mt-3">
              <li className="list-inline-item">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:dm.danish2005@gmail.com" className="text-white">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
