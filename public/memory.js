let memoryStorage = [];

function updateMemoryUsage() {
  if (performance.memory) {
    const usedJSHeapSize = performance.memory.usedJSHeapSize / 1024 / 1024;
    document.getElementById('memoryUsage').textContent = usedJSHeapSize.toFixed(2);
    const div = document.createElement("div");
    div.innerText = usedJSHeapSize;
    document.body.appendChild(div);
    console.log('performance.memory', performance.memory)
  } else {
    document.getElementById('memoryUsage').textContent = 'performance.memory not supported';
    console.log('maybe usual')
    usualMemory().then(t => {
      const usual = t
      console.log('usual', t)
      document.getElementById('memoryUsage').textContent = usual.toFixed(2);
    })
  }
}

async function usualMemory() {
  const mem = await performance.measureUserAgentSpecificMemory()
  return mem.bytes
}

function loadMemory(mb) {
  const block = new Array(mb * 1024 * 1024 / 4).fill(0);
  memoryStorage.push(block);
  updateMemoryUsage();
}

document.addEventListener('DOMContentLoaded', updateMemoryUsage);
