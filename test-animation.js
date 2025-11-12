// Simple test script to check if the animation is working
const http = require('http');

// Test if the page loads
http.get('http://localhost:3002', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('\n=== Page Load Test ===');
    console.log('Status Code:', res.statusCode);

    // Check for canvas element
    const hasCanvas = data.includes('<canvas');
    console.log('Has Canvas Element:', hasCanvas);

    // Check for AlgorithmicBackground component
    const hasAlgorithmic = data.includes('AlgorithmicBackground') || data.includes('algorithmic');
    console.log('Has Algorithmic References:', hasAlgorithmic);

    // Check if gradient fallback is being used
    const hasFallback = data.includes('bg-gradient-to-br from-primary/10');
    console.log('Using Fallback Gradient:', hasFallback);

    console.log('\n=== Instructions ===');
    console.log('1. Open http://0.0.0.0:3002 in your browser');
    console.log('2. Open Developer Console (F12)');
    console.log('3. Look for these console messages:');
    console.log('   - [isLowEndDevice] ...');
    console.log('   - [AlgorithmicBackground] Device check: ...');
    console.log('   - [AlgorithmicBackground] Render state: ...');
    console.log('4. You should see crimson red particles animating');
    console.log('5. Move your mouse over the hero section to see particle attraction');
    console.log('\nIf you see a plain gradient instead of particles:');
    console.log('- Check console for shouldDisable: true');
    console.log('- Check if prefersReducedMotion is enabled');
    console.log('- Check if device is being detected as low-end\n');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
