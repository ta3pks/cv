/**
 * Creates a contact information item with an icon and either a link or plain text.
 * This function generates a standardized DOM structure for contact details used in the CV header.
 *
 * @param {string} iconClass - The Phosphor icon class name to use (without the 'ph-' prefix)
 * @param {string} content - The text content to display
 * @param {string} [href] - Optional URL for making the content clickable
 * @param {boolean} [targetBlank=false] - Whether to open links in a new tab (_blank)
 * @returns {HTMLDivElement} A div element containing the icon and content
 *
 * @example
 * // Create a plain text contact item
 * createContactItem('phone', '+1234567890')
 * // -> <div><i class="ph ph-phone"></i><span>+1234567890</span></div>
 *
 * @example
 * // Create a clickable contact item that opens in a new tab
 * createContactItem('globe', 'example.com', 'https://example.com', true)
 * // -> <div><i class="ph ph-globe"></i><a href="https://example.com" target="_blank">example.com</a></div>
 */
export function createContactItem(iconClass, content, href, targetBlank = false) {
  const itemDiv = document.createElement('div')
  const iconElement = document.createElement('i')
  iconElement.className = `ph ${iconClass}`
  itemDiv.appendChild(iconElement)

  const linkElement = href ? document.createElement('a') : document.createElement('span')
  if (href) {
    linkElement.href = href
    linkElement.textContent = content
    if (targetBlank) {
      linkElement.target = '_blank'
    }
  } else {
    linkElement.textContent = content
  }

  itemDiv.appendChild(linkElement)
  return itemDiv
}

/**
 * Creates the CV header section from the provided front matter metadata.
 * This function generates a complete header structure including the title, headline,
 * and contact information from the CV's front matter data.
 *
 * @param {Object} metadata - The front matter metadata object
 * @param {string} metadata.title - The CV owner's name
 * @param {string} [metadata.headline] - Professional headline or title
 * @param {string} [metadata.website] - Personal website URL
 * @param {string} [metadata.email] - Email address
 * @param {string} [metadata.phone] - Phone number
 * @param {string} [metadata.github] - GitHub username (with or without @ prefix)
 * @param {string} [metadata.linked_in] - LinkedIn profile URL
 * @param {string} [metadata.mastodon] - Mastodon handle
 * @param {string} [metadata.x] - X (Twitter) handle
 * @param {string} [metadata.stackoverflow] - Stack Overflow profile URL
 *
 * @example
 * createHeaderFromFrontMatter({
 *   title: "John Doe",
 *   headline: "Software Engineer",
 *   email: "john@example.com",
 *   github: "@johndoe"
 * })
 */
export function createHeaderFromFrontMatter(metadata) {
  const header = document.querySelector('header')
  if (!header) return

  const titleDiv = createTitleSection(metadata)
  const contactDiv = createContactSection(metadata)
  const downloadDiv = createDownloadSection()

  header.appendChild(titleDiv)
  header.appendChild(contactDiv)
  header.appendChild(downloadDiv)
}

/**
 * Creates the title section of the header containing the name and headline.
 *
 * @private
 * @param {Object} metadata - The front matter metadata object
 * @returns {HTMLDivElement} A div element containing the title and headline
 */
function createTitleSection(metadata) {
  const titleDiv = document.createElement('div')

  const titleElement = document.createElement('h1')
  titleElement.textContent = metadata.title
  titleDiv.appendChild(titleElement)

  const headlineElement = document.createElement('p')
  headlineElement.className = 'headline'
  headlineElement.textContent = metadata.headline || ''
  titleDiv.appendChild(headlineElement)

  return titleDiv
}

/**
 * Creates the contact information section of the header with social media links and contact details.
 * This function processes each supported contact method (website, email, phone, various "social media" platforms)
 * and creates appropriately formatted links with icons.
 *
 * @private
 * @param {Object} metadata - The front matter metadata object
 * @returns {HTMLDivElement} A div element containing all contact information
 */
function createContactSection(metadata) {
  const contactDiv = document.createElement('div')
  contactDiv.className = 'contact-details'

  // Website
  if (metadata.website) {
    try {
      const url = new URL(metadata.website)
      contactDiv.appendChild(createContactItem('ph-globe', url.hostname, metadata.website, true))
    } catch (error) {
      console.warn('Invalid website URL:', error)
    }
  }

  // Email
  if (metadata.email) {
    contactDiv.appendChild(
      createContactItem('ph-envelope', metadata.email, `mailto:${metadata.email}`)
    )
  }

  // Phone
  if (metadata.phone) {
    const phones = metadata.phone.split('\n').filter((p) => p.trim())
    phones.forEach((phone) => {
      contactDiv.appendChild(
        createContactItem('ph-phone', phone.trim(), `tel:${phone.trim().replace(/\s+/g, '')}`)
      )
    })
  }

  // GitHub
  if (metadata.github) {
    const githubUsername = metadata.github.replace(/^@/, '')
    contactDiv.appendChild(
      createContactItem('ph-github-logo', metadata.github, `https://github.com/${githubUsername}`)
    )
  }

  // LinkedIn
  if (metadata.linked_in) {
    try {
      const url = new URL(metadata.linked_in)
      const linkedInID = url.pathname.split('/').filter(Boolean).pop()
      const linkedInItem = createContactItem(
        'ph-linkedin-logo',
        linkedInID,
        metadata.linked_in,
        true
      )
      contactDiv.appendChild(linkedInItem)
    } catch (error) {
      console.warn('Invalid LinkedIn URL:', error)
    }
  }

  // Mastodon
  if (metadata.mastodon) {
    const mastodonUsername = '@' + metadata.mastodon.replace(/^@/, '') // Add @ symbol if missing
    const mastodonItem = createContactItem(
      'ph-mastodon-logo',
      metadata.mastodon,
      `https://mastodon.social/${mastodonUsername}`
    )
    contactDiv.appendChild(mastodonItem)
  }

  // X (formerly Twitter)
  if (metadata.x) {
    const xUsername = metadata.x.replace(/^@/, '') // Remove @ symbol if present
    const xItem = createContactItem('ph-bird', metadata.x, `https://x.com/${xUsername}`)
    contactDiv.appendChild(xItem)
  }

  // Stack Overflow
  if (metadata.stackoverflow) {
    try {
      const match = metadata.stackoverflow.match(/\d+/)
      if (match) {
        const stackOverflowId = match[0]
        const stackOverflowItem = createContactItem(
          'ph-stack-overflow-logo',
          `SO/${stackOverflowId}`,
          metadata.stackoverflow,
          true
        )
        contactDiv.appendChild(stackOverflowItem)
      }
    } catch (error) {
      console.warn('Invalid Stack Overflow URL:', error)
    }
  }

  return contactDiv
}

/**
 * Creates the download section with PDF download link.
 * This function generates a download button for the CV in PDF format.
 *
 * @returns {HTMLDivElement} A div element containing the download link
 */
function createDownloadSection() {
  const downloadDiv = document.createElement('div')
  downloadDiv.className = 'download-section'

  const downloadLink = document.createElement('a')
  downloadLink.href = 'cv.pdf'
  downloadLink.className = 'download-link'
  downloadLink.textContent = 'Download PDF'
  downloadLink.target = '_blank'

  downloadDiv.appendChild(downloadLink)
  return downloadDiv
}
