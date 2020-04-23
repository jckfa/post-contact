export const site = {
  title: 'Post-Contact',
  description: 'a public site for open, artistic commentary in response to the coronavirus pandemic.',
  email: 'mail@jackf.me',
  email_subject: 'Post-Contact Submission',
  email_body: `Attach your B&W PDF/PNG/JPG. Please include 1) first & last name, 2) website URL and/or Instagram handle, 3) title [optional; defaults to “Untitled”], 4) description/statement [optional], and 5) any additional comments if necessary. All attempts will be made to respect your material as is, however minor modifications may be necessary, including halftoning, rescaling, and repeating. Hopefully this adds a favorable element of uncertainty to the contributing process. Thank you for participating! Contributions are essential to the life of this project.`,
  address: '104 Sheldon St',
  address_url: 'https://goo.gl/maps/tHuP9scahLKj8Cdw5',
  instagram_handle: 'post_contact',
  source_code: 'https://github.com/jckfa/post-contact',
}

export const colors = {
  white: 'white',
  orange: '#ff9900',
  black: '#90f'
}

const fallback = 'BlinkMacSystemFont, "-apple-system", arial, "helvetica neue", helvetica, sans-serif'

export const fonts = {
  reg:    `post-contact, ${fallback}`,
  // reg:    `post-contact_texture, ${fallback}`,
  bold:   `post-contact_bold, ${fallback}`,
  // italic: `post-contact_italic, ${fallback}`
}

export const spacing = {
  gutter: 0.25,
  target_area: 0.75
}
