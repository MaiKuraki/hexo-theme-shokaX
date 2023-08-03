// rocket-loader & Auto minify(cloudflare) 补丁
// cloudflare 的上述功能会导致DOMContentLoaded事件无法触发，此补丁会将DOMContentLoaded重定向为load事件
export function cloudflareInit () {
  let inCloudFlare = true
  window.addEventListener('DOMContentLoaded', function () {
    inCloudFlare = false
  })

  if (document.readyState === 'loading') {
    window.addEventListener('load', function () {
      if (inCloudFlare) {
        window.dispatchEvent(new Event('DOMContentLoaded'))
        console.log('%c ☁️cloudflare patch ' + '%c running(rocket & minify)', 'color: white; background: #ff8c00; padding: 5px 3px;', 'padding: 4px;border:1px solid #ff8c00')
      }
    })
  }
}

export const getScript = (url: string, callback?: Function, condition?: string): void => {
  // url: 脚本文件的URL地址
  // callback: 当脚本加载完成时要执行的回调函数
  // condition: 可选的条件参数，如果存在，则执行callback
  if (condition) {
    // 如果条件存在，则执行回调函数
    callback()
  } else {
    let script = document.createElement('script')

    // @ts-ignore
    script.onload = function (_, isAbort: boolean) {
      // _: 事件对象
      // isAbort: 是否中止
      // @ts-ignore
      if (isAbort || !script.readyState) {
        console.log('abort!')
        script.onload = null
        script = undefined
        if (!isAbort && callback) setTimeout(callback, 0)
      }
    }
    script.src = url
    document.head.appendChild(script)
  }
}

export const pjaxScript = (element: HTMLScriptElement) => {
  const { text, parentNode, id, className, type, src, dataset } = element
  const code = text || element.textContent || element.innerHTML || ''
  parentNode.removeChild(element)
  const script = document.createElement('script')
  if (id) {
    script.id = id
  }
  if (className) {
    script.className = className
  }
  if (type) {
    script.type = type
  }
  if (src) {
    // Force synchronous loading of peripheral JS.
    script.src = src
    script.async = false
  }
  if (dataset.pjax !== undefined) {
    script.dataset.pjax = ''
  }
  if (code !== '') {
    script.appendChild(document.createTextNode(code))
  }
  parentNode.appendChild(script)
}
