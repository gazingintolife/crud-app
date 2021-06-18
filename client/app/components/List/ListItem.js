import React from 'react';

const ListItem = (data) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.age}</td>
                        <td>{data.gender}</td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default ListItem;