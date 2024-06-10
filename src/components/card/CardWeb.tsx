import React from "react";
import './card.css'

interface CardWebProps {
      image: string;
      title: string;
      subTitle: string;
      titleModal: string;
      imageOne?: string;
      imageTwo?: string;
      imageThree?: string;
      imageFour?: string;
      imageFive?: string;
      imageSix?: string;
      imageSeven?: string;
}

export const CardWeb: React.FC<CardWebProps> = (
      { image, title, subTitle, titleModal, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven }
) => {
      const uniqueId = `${title}`;
      return (
            <>
                  <div className="item-card" data-bs-toggle="modal" data-bs-target={`#${uniqueId}`}>
                        <img className="rounded" alt="Card Image" src={image} />
                        <div className="txt">
                              <h2>{title}</h2>
                              <p>{subTitle}</p>
                        </div>
                  </div>
                  <div className="modal fade" id={uniqueId} tab-index="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => console.log(`==> ${uniqueId}`)}>
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                              <div className="modal-content">
                                    <div className="modal-header">
                                          <h1 className="modal-title fs-4 text-dark text-center" id="exampleModalLabel">{titleModal}</h1>
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                          <div id={`hero-carousel${uniqueId}`} className="carousel slide" data-bs-ride="carousel">
                                                <div className="carousel-indicators">
                                                      <button type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1" />
                                                      <button type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2" />
                                                      <button type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide-to="2" className="bg-dark" aria-label="Slide 3" />
                                                      <button type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide-to="3" className="bg-dark" aria-label="Slide 4" />
                                                      <button type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide-to="4" className="bg-dark" aria-label="Slide 5" />
                                                      <button type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide-to="5" className="bg-dark" aria-label="Slide 6" />
                                                      <button type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide-to="6" className="bg-dark" aria-label="Slide 7" />
                                                </div>
                                                <div className="carousel-inner">
                                                      <div className="carousel-item active c-item">
                                                            <img style={{ width: '100%', height: '100%' }} src={imageOne} className="d-block w-100 c-img" alt="Slide 01" />
                                                      </div>
                                                      <div className="carousel-item c-item">
                                                            <img style={{ width: '100%', height: '100%' }} src={imageTwo} className="d-block w-100 c-img" alt="Slide 2" />
                                                      </div>
                                                      <div className="carousel-item c-item">
                                                            <img style={{ width: '100%', height: '100%' }} src={imageThree} className="d-block w-100 c-img" alt="Slide 3" />
                                                      </div>
                                                      <div className="carousel-item c-item">
                                                            <img style={{ width: '100%', height: '100%' }} src={imageFour} className="d-block w-100 c-img" alt="Slide 4" />
                                                      </div>
                                                      <div className="carousel-item c-item">
                                                            <img style={{ width: '100%', height: '100%' }} src={imageFive} className="d-block w-100 c-img" alt="Slide 5" />
                                                      </div>
                                                      <div className="carousel-item c-item">
                                                            <img style={{ width: '100%', height: '100%' }} src={imageSix} className="d-block w-100 c-img" alt="Slide 6" />
                                                      </div>
                                                      <div className="carousel-item c-item">
                                                            <img style={{ width: '100%', height: '100%' }} src={imageSeven} className="d-block w-100 c-img" alt="Slide 7" />
                                                      </div>
                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide="prev">
                                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                      <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target={`#hero-carousel${uniqueId}`} data-bs-slide="next">
                                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                      <span className="visually-hidden">Next</span>
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>

      )
}