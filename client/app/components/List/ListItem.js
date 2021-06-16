import React from 'react';

const ListItem = (item) => {
    return (
        <div>
            <p>Name</p>
            <p>Email</p>
            <p>Age</p>
            <p>Gender</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default ListItem;