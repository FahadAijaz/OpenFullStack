const Numbers = ({ persons }) => {
    return (<div>{persons.map(p => <p>{p.name} {p.number}</p>)}</div>)
}

export default Numbers