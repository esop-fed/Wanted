export const loadCss = url => {
  const css = document.createElement('link')

  css.rel = 'stylesheet'
  css.href = url

  document.head.appendChild(css)
}

export const loadScript = url => {
  const script = document.createElement('script')
  const body = document.querySelector('body')

  script.src = url

  body.appendChild(script)
}
