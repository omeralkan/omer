import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Geliştirici :
            <span className="text-warning font-weight-normal">
               Ömer Alkan
            </span>
            , Kullanımı <i className="fab fa-react" /> React JS &amp; Redux JS
            Harici Filmler Veri API'si ile İlişkilidir. 
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;