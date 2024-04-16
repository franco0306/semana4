import React from 'react';

const Main = () => {
    return (
        <main>
            <div className="container text-center">
         <div className="row justify-content-around">
             <div className="col-4">
                        <br />
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://hmperu.vtexassets.com/arquivos/ids/4178345-600-900?v=638387495980070000&width=600&height=900&aspect=true" className="d-block w-100" alt="..."/>
                               </div>
                                <div className="carousel-item">
                                    <img src="https://hmperu.vtexassets.com/arquivos/ids/4245761-600-900?v=638420365518100000&width=600&height=900&aspect=true" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://hmperu.vtexassets.com/arquivos/ids/3944547-600-900?v=638321962462900000&width=600&height=900&aspect=true" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                             <span className="visually-hidden">Previous</span>
                         </button>
                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                          </button>
                 </div>
                </div>
                </div>
         </div>
        </main>
    );
}

export default Main;
