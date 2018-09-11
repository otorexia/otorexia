module.exports = {
  title: "Oto Rexia",
  description: "The Official website",
  base: "/",
  themeConfig: {
    logo: "/upload/logo.svg",
    footer: "Ⓒ Oto Rexia",
    nav: [
      { text: "Projects", link: "/", position: "left", external: false },
      { text: "Support Me", link: "https://www.patreon.com/", position: "left", external: true },
      { text: 'Blog', link: '/blog/', position: 'right', external: false },
      { text: "Contact Me", link: "mailto:otorexia@hotmail.com", position: "right", external: true },
    ]
  },
  head: [
    ['link', { rel: "icon", href: "favicon-32x32.png" }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
