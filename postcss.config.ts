import autoprefixer from 'autoprefixer';
import postcssScss from 'postcss-scss';

export default {
  syntax: postcssScss,
  plugins: [
    autoprefixer,
  ],
};
