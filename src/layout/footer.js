import React from 'react';

const Footer = () => {
    return (
        <footer>
         <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossorigin="anonymous"
            ></script>

            <div className="p-3 mb-2 bg-black text-white">
                <div className="container text-center">
                 <div className="row">
                        <div className="col order-last">
                        INFORMACIÓN CORPORATIVA
                        </div>
                       <div className="col">
                            COLECCIONES
                        </div>
                        <div className="col order-first">
                            AYUDA
                    </div>
                </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
