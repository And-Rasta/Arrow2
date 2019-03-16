import React from 'react';
import Item from './Item';
function List(props) {
    return(
        <ul>
            {
                props.list.map((elem) => {
                    return(
                        <Item reload={props.reload} key={elem.id} item={elem} />
                    )
                })
            }
        </ul>
    );
}

export default List;