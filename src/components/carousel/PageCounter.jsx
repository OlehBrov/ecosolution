export const PageCounter = ({ index, onClick, active, ...rest }) => {
    console.log('index', index)
    console.log('active', active)
    console.log('rest', rest)
    const total = 5
    return <span>{ active && index}/{ total}</span>;
};
