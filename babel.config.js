const reactOptions = {
    development: false,
};
const presets = [
    [
        `@babel/preset-env`,
        {
            modules: false,
        },
    ],
    [`@babel/preset-react`, reactOptions],
];

const plugins = [`react-hot-loader/babel`, 'babel-plugin-styled-components'];

module.exports = (api) => {
    if (api.env(`development`) === true) {
        reactOptions.development = true;
        return {
            presets,
            plugins,
        };
    }
    return {
        presets,
        plugins,
    };
};
