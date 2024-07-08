const memoryStorage = [];

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
  }
}

function loadMemory(mb) {
  const block = new Array(mb * 1024 * 1024 / 4).fill(0);
  memoryStorage.push(block);
  updateMemoryUsage();
}

document.addEventListener('DOMContentLoaded', updateMemoryUsage);
