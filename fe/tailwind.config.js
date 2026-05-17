export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, 0.12)'
      },
      colors: {
        brand: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#0f172a',
          700: '#020617',
          800: '#02040f',
          900: '#000000'
        }
      }
    }
  },
  plugins: []
}
