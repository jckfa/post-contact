export const site = {
  title: 'Post-Contact',
  description: 'a public site for open, artistic commentary in response to multiple, simultaneous health crises.',
  email: 'submit@post-contact.site',
  email_subject: 'Post-Contact Submission',
  email_body: `Attach your B&W PDF/PNG/JPG. Please include 1) first & last name (anonymity is not allowed), 2) website URL and/or Instagram handle, 3) title [optional; defaults to Post-Contact ###], 4) description/statement [optional but highly encouraged], 5) one piece of music* to support your submission (*limited to Spotify’s selection), and 6) any additional comments if necessary. All attempts will be made to respect your material as is, however minor modifications may be necessary, including halftoning, cropping, rescaling, and repeating. Paper color is chosen with consideration of both your submission’s subject matter and the paper colors of previous posts. Thank you for participating! Contributions are essential to the life of this project.`,
  address: '104 Sheldon St',
  address_url: 'https://goo.gl/maps/DG36vrqRX6Ex4Lwz9',
  google_biz_profile: 'https://g.page/postcontact',
  instagram_handle: 'post_contact',
  source_code: 'https://github.com/jckfa/post-contact',
  download_path: 'assets/download/',
  images_path_external: 'https://img.post-contact.site/',
}

export const colors = {
  white:  '#eee',
  orange: '#f90',
  purple: '#90f',
}

const fallback = 'BlinkMacSystemFont, "-apple-system", arial, "helvetica neue", helvetica, sans-serif'

export const fonts = {
  reg:    `'Post-Contact Sans', ${fallback}`,
  // reg:    `post-contact_texture, ${fallback}`,
  bold:   `'Post-Contact Sans Bold', ${fallback}`,
  // italic: `post-contact_italic, ${fallback}`
}

export const spacing = {
  gutter: 0.25,
  target_area: 0.75
}
