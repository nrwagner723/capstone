const MaterialsMapper = ({userInput, searchTerm}) => {
    
    return (
        <tbody className="table-group-divider table-divider-color">
          {searchTerm[0] && searchTerm.filter(el => el.title.toLowerCase().includes(userInput.toLowerCase())
          ).map(el => <tr key={el.id}><Song searchTerm = {el}/></tr>)}
        </tbody>
    )
}

export default MaterialsMapper;