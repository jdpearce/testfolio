const user = require('./src/api/user/resource.json');
const portfolios_summary = require('./src/api/portfolios/resource.json');

const portfolios = [{
    id: '675a0572-bae8-437b-94c8-21704abd23c3',
    positions: require('./src/api/portfolios/675a0572-bae8-437b-94c8-21704abd23c3/positions/resource.json')
},{
    id: 'a21d91d3-6f63-470d-aad9-5744174b097d',
    positions: require('./src/api/portfolios/a21d91d3-6f63-470d-aad9-5744174b097d/positions/resource.json')
},{
    id: 'e27cda8b-cab3-4989-a43e-e1dbb7478be0',
    positions: require('./src/api/portfolios/e27cda8b-cab3-4989-a43e-e1dbb7478be0/positions/resource.json')
},{
    id: 'e629ea7c-20fc-40e7-80f9-d6c50382db7b',
    positions: require('./src/api/portfolios/e629ea7c-20fc-40e7-80f9-d6c50382db7b/positions/resource.json')
}];

const middleware = [{
    route: '/api/user',
    handle: function (req, res, next) {
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(user));
        res.end();
    } 
}, {
    route: `/api/portfolios`,
    handle: function (req, res, next) {
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(portfolios_summary));
        res.end();
    }
}];

for(const portfolio of portfolios) {
    middleware.push({
        route: `/api/portfolios/${portfolio.id}/positions`,
        handle: function (req, res, next) {
            res.setHeader('content-type', 'application/json')
            res.write(JSON.stringify(portfolio.positions));
            res.end();
        }
    });
}

module.exports = {
    port: 8000,
    files: ['./build/**/*.{html,htm,css,js,json}'],
    server: {
        baseDir: './build',
    },
    middleware
};