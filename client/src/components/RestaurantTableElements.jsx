function RestaurantTableElements({table}){

    return (
        <tr>
            <td>{table.tableId}</td>
            <td>{table.seats}</td>
            <td>{table.available ? <span>Available</span> : <span style={{color: 'red'}}>Not available</span>}</td>
        </tr>
    )
}

export default RestaurantTableElements