import React from 'react'
import './button.css'

export const Button = ({ title, url, download }: { title: string, url?: string, download?: string }) => {
      return (
            <button className="cta">
                  <span className="hover-underline-animation">
                        <a
                              className="ancor-aboutme"
                              href={url}
                              download={download}
                              target="_blank"
                              rel="noreferrer"
                        >
                              →  {title}
                        </a>
                  </span>
            </button>
      )
}