// 适配 vant
// const path = require('path');
module.exports = ({ file }) => {
  console.log(file)
  // const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;
  return {
    plugins: {
      'postcss-import': {},
      'postcss-url': {},
      'postcss-aspect-ratio-mini': {},
      'postcss-write-svg': {
        utf8: false,
      },
      'postcss-cssnext': {},
      'postcss-preset-env': {},
      'postcss-px-to-viewport': {
        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
        // viewportWidth({ file }) {
        //   return file.indexOf('vant') !== -1 ? 750 : 375
        // },
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines'], //  指定不转换为视窗单位的类，建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false, // 允许在媒体查询中转换`px` 是否转换媒体查询中设置的属性值
        unitToConvert: 'px', // 需要转换的单位
        unitPrecision: 5, // 精确到小数点后几位
        /**
         * 将会被转换的css属性列表，
         * 设置为 * 表示全部，如：['*']
         * 在属性的前面或后面设置*，如：['*position*']，*position* 表示所有包含 position 的属性，如 background-position-y
         * 设置为 !xx 表示不匹配xx的那些属性，如：['!letter-spacing'] 表示除了letter-spacing 属性之外的其他属性
         * 还可以同时使用 ! 和 * ，如['!font*'] 表示除了font-size、 font-weight ...这些之外属性之外的其他属性名头部是‘font’的属性
         * */
        propList: ['*'],
        fontViewportUnit: 'vw', // 需要转换称为的字体单位
        /**
         * 需要忽略的选择器，即这些选择器对应的属性值不做单位转换
         * 设置为字符串，转换器在做转换时会忽略那些选择器中包含该字符串的选择器，如：['body']会匹配到 .body-class，也就意味着.body-class对应的样式设置不会被转换
         * 设置为正则表达式，在做转换前会先校验选择器是否匹配该正则，如果匹配，则不进行转换，如[/^body$/]会匹配到 body 但是不会匹配到 .body
         */
        replace: true, // 替换包含vw的规则，而不是添加回退
        /**
         * 忽略一些文件，如'node_modules'
         * 设置为正则表达式，将会忽略匹配该正则的所有文件
         * 如果设置为数组，那么该数组内的元素都必须是正则表达式
         */
        // exclude: [/node_modules\/vant/],
        landscape: false, // 是否自动加入 @media (orientation: landscape)，其中的属性值是通过横屏宽度来转换的
        landscapeUnit: 'vw', // 横屏单位
        landscapeWidth: 1334, // 横屏宽度
      },
      'postcss-design-convert': { multiple: 2, units: ['vw'], selector: /^\.van-/ },
      'postcss-viewport-units': {},
      cssnano: {
        'cssnano-preset-advanced': {
          zindex: false,
          autoprefixer: false,
        },
      },
      // 'postcss-pxtorem': {
      //   rootValue: 37.5,
      //   // 转换成的rem后，保留小数点后几位
      //   unitPrecision: 5,
      //   /**
      //    * 将会被转换的css属性列表，
      //    * 设置为*表示全部，['*','*position*','!letter-spacing','!font*']
      //    * *position* 表示所有包含 position 的属性
      //    * !letter-spacing 表示非 letter-spacing 属性
      //    * !font* 表示非font-size font-weight ... 等的属性
      //    * */
      //   propList: ['*', '!letter-spacing'],
      //   // 不会被转换的class选择器名，支持正则
      //   selectorBlackList: ['.rem-'],
      //   replace: true,
      //   // 允许在媒体查询中转换`px`
      //   mediaQuery: false,
      //   // 小于1px的将不会被转换
      //   minPixelValue: 1,
      // },
    },
  }
}
// module.exports = {
//   plugins: {

//   },
// }
