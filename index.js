const nodeEnv = process.env.NODE_ENV;
const enabled = nodeEnv !== 'prod' && nodeEnv !== 'production';
const J = {
    error: (msg, prefix) => enabled ? console.log(`\x1b[48:5:196m${prefix || ''}ERROR:\x1b[48:5:0m ${msg}`) : void (1),
    info: (msg, prefix) => enabled ? console.log(`\x1b[48:5:21m${prefix || ''}INFO :\x1b[48:5:0m ${msg}`) : void (1),
    ok: (msg, prefix) => enabled ? console.log(`\x1b[48:5:46m${prefix || ''}OK   :\x1b[48:5:0m ${msg}`) : void (1),
    warn: (msg, prefix) => enabled ? console.log(`\x1b[48:5:220m${prefix || ''}WARN :\x1b[48:5:0m ${msg}`) : void (1),
};
export default J;
