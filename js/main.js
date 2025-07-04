document.addEventListener('DOMContentLoaded', function() {
  // Add blinking cursor effect
  const blinkElement = document.querySelector('.blink');
  
  const commands = [
    {cmd: 'whoami', output: 'axoryn', delay: 800},
    {
      cmd: 'cat introduction.txt',
      output: 'hi, i\'m axoryn. a hobbyist flag collector and offensive security enthusiast\ni create writeups here to help people learn',
      delay: 1000
    }
    // Removed the `ls writeups/` entry
  ];
  
  let currentCommand = 0;
  let terminalBody = document.querySelector('.terminal-body');
  
  // Clear initial content
  terminalBody.innerHTML = '<div class="terminal-line"><span class="prompt">$</span><span><span class="blink">_</span></span></div>';
  
  function typeCommand() {
    if (currentCommand >= commands.length) return;
    
    const command = commands[currentCommand];
    const promptLine = document.createElement('div');
    promptLine.className = 'terminal-line';
    promptLine.innerHTML = `<span class="prompt">$</span> <span>${command.cmd}</span>`;
    
    const outputLine = document.createElement('div');
    outputLine.className = 'terminal-line';
    outputLine.innerHTML = `<span>${command.output}</span>`;
    
    terminalBody.insertBefore(promptLine, terminalBody.lastChild);
    
    setTimeout(() => {
      terminalBody.insertBefore(outputLine, terminalBody.lastChild);
      
      setTimeout(() => {
        currentCommand++;
        typeCommand();
      }, command.delay);
    }, 800);
  }
  
  // Start typing after a short delay
  setTimeout(typeCommand, 1000);
});
