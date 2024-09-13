// Объявляем скрипт Web Worker как модульный
self.addEventListener('message', async (e) => {
  const { cmd, args } = e.data

  if (cmd === 'init') {
    try {
      // Динамический импорт WASM модуля
      const { default: Sf16170Web } = await import('/sf16.1/sf161-70.js')

      const sharedWasmMemory = (initial, maximum = 32767) => {
        let shrink = 4 // 32767 -> 24576 -> 16384 -> 12288 -> 8192 -> 6144 -> etc
        // eslint-disable-next-line no-constant-condition
        while (true) {
          try {
            return new WebAssembly.Memory({ shared: true, initial, maximum })
          } catch (e) {
            if (maximum <= initial || !(e instanceof RangeError)) throw e
            maximum = Math.max(initial, Math.ceil(maximum - maximum / shrink))
            shrink = shrink === 4 ? 3 : 4
          }
        }
      }

      // Переводим 128 МБ в страницы (по 64 КБ каждая)
      const initialMemoryPages = (128 * 1024 * 1024) / (64 * 1024) // 2048 страниц

      const module = await Sf16170Web({
        wasmMemory: sharedWasmMemory(initialMemoryPages),
        locateFile: (file) => `/sf16.1/${file}`, // Убедитесь, что путь правильный
        onError: (msg) => console.error('WASM error:', msg),
      })

      self.module = module

      module.listen = (data) => {
        self.postMessage({ type: 'response', data })
      }

      self.postMessage({ type: 'init', success: true })
    } catch (err) {
      console.error(err)
      self.postMessage({ type: 'init', success: false, error: err.message })
    }
  } else if (cmd === 'uci') {
    if (self.module && self.module.uci) {
      self.module.uci(args)
    } else {
      console.error('Module or module.uci is not defined')
    }
  } else if (cmd === 'isready') {
    if (self.module && self.module.uci) {
      self.module.uci('isready')
    } else {
      console.error('Module or module.uci is not defined')
    }
  } else if (cmd === 'setoption') {
    if (self.module && self.module.uci) {
      self.module.uci(`setoption name ${args.name} value ${args.value}`)
    } else {
      console.error('Module or module.uci is not defined')
    }
  }
})
