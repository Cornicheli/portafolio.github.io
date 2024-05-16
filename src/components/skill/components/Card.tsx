import React from 'react'
import '../skills.css'

export const Card = ({ title, image, alt }: { title: string, image: string, alt: string }) => {
      return (
            <>
                  <span className="tooltip">{title}</span>
                  <span>
                        <i className="ctn-icon-skill-card">
                              <img className="icon-skill-card" alt={alt} src={image} />
                        </i>
                  </span>
            </>
      )
}