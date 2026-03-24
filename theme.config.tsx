import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  // 1. Branding (Top Left)
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src="https://infile.com/hubfs/fav%20icon%201%20infile.png" alt="Infile" style={{ width: '24px' }} />
      <span style={{ fontWeight: 700 }}>Docs</span>
    </div>
  ),

  // 2. Remove the GitHub/Social Icon (Top Right)
  project: {
    link: '', // Leaving this empty hides the GitHub icon
  },

  // 3. Browser Tab Text (Control what's next to the favicon)
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Infile Docs'
    }
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="https://infile.com/hubfs/fav%20icon%201%20infile.png" />
      <title>Infile Documentation</title>
    </>
  ),

  // 4. Footer Branding
  footer: {
    text: `© ${new Date().getFullYear()} Infile, S.A.`,
  },

  // 5. Hide "Edit this page" links for a cleaner look
  editLink: {
    component: null
  },
  feedback: {
    content: null
  }
}

export default config
