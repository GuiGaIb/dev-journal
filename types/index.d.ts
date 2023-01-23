type JournalFn = (msg: string, prefix?: string) => void;
type Fns = 'info' | 'ok' | 'warn' | 'error';
declare const J: {
    [fn in Fns]: JournalFn;
};
export default J;
