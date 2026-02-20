// src/styles/theme.ts

// Paleta de cores
export const colors = {
  primary: '#FFF',          // branco
  secondary: '#1B353D',     // azul escuro
  text: '#333333',          // texto padrão
  button: '#1B353D',        // cor de botões
  titleGreen: '#0F756B',    // verde títulos
  muted: '#6B7280',         // cinza médio
  tertiary: '#F4F9FA',      // cinza claro
};

// Tipografia
export const fonts = {
  openSans: {
    family: "'Open Sans', sans-serif",
    weights: {
      regular: 400,
      bold: 700,
      extraBold: 800,
    },
  },
  inter: {
    family: "'Inter', sans-serif",
    weights: {
      bold: 700,
      extraBold: 800,
    },
  },
};

// Tamanhos de fonte padrão
export const fontSizes = {
  xs: '0.75rem',   // 12px
  sm: '0.875rem',  // 14px
  md: '1rem',      // 16px
  lg: '1.125rem',  // 18px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
};

// Espaçamentos (padding/margin)
export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
};

// Sombreamento
export const shadows = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.15)',
};

// Exporta tudo junto
const theme = {
  colors,
  fonts,
  fontSizes,
  spacing,
  shadows,
};

export default theme;
