import React from 'react'
import './button.css'

export const Button = ({ title, url }: { title: string, url?: string }) => {
      return (
            <button className="cta">
                  <span className="hover-underline-animation">
                        <a
                              className="ancor-aboutme"
                              href={url}
                              target="_blank"
                              rel="noreferrer"
                        >
                              →  {title}
                        </a>
                  </span>
            </button>
      )
}