export default function logger(reducer) {
    return (prevstate, action, agrs) => {
        console.group(action);
        console.log('PreState', prevstate);
        console.log('Argments', agrs);
        const nextState = reducer(prevstate, action, agrs)
        console.log('NextState', nextState);
        console.groupEnd(action);
        return nextState

    }
}