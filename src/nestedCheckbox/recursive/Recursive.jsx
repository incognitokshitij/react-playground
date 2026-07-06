import React, { useState } from 'react';
import Checkbox from "./Checkbox";
import { STATUS } from "./constants";

function Recursive() {
    const [data, setData] = useState([
        {
            id: "fruits",
            label: "Fruits",
            status: STATUS.UNCHECKED,
            children: [
                { id: "apple", label: "Apple", status: STATUS.UNCHECKED, children: [] },
                { id: "mango", label: "Mango", status: STATUS.UNCHECKED, children: [] },
                {
                    id: "citrus",
                    label: "Citrus",
                    status: STATUS.UNCHECKED,
                    children: [
                        { id: "orange", label: "Orange", status: STATUS.UNCHECKED, children: [] },
                        { id: "lemon", label: "Lemon", status: STATUS.UNCHECKED, children: [] },
                        { id: "lime", label: "Lime", status: STATUS.UNCHECKED, children: [] },
                    ],
                },
            ],
        },
        {
            id: "vegetables",
            label: "Vegetables",
            status: STATUS.UNCHECKED,
            children: [
                { id: "carrot", label: "Carrot", status: STATUS.UNCHECKED, children: [] },
                { id: "potato", label: "Potato", status: STATUS.UNCHECKED, children: [] },
            ],
        },
        {
            id: "grains",
            label: "Grains",
            status: STATUS.UNCHECKED,
            children: [
                { id: "rice", label: "Rice", status: STATUS.UNCHECKED, children: [] },
                { id: "wheat", label: "Wheat", status: STATUS.UNCHECKED, children: [] },
            ],
        },
    ]);

    // Find node by id and update it + all descendants
    function toggle(node, checkboxId, newStatus) {
        if (node.id === checkboxId) {
            updateDescendants(node, newStatus);
        }
        (node.children || []).forEach((child) => {
            toggle(child, checkboxId, newStatus);
        });
        return node;
    }

    // Set status for node and ALL its descendants
    function updateDescendants(node, status) {
        node.status = status;
        (node.children || []).forEach((child) => {
            updateDescendants(child, status);
        });
    }

    // Recalculate parent status based on children (bottom-up)
    function recalculateParents(nodes) {
        for (const node of nodes) {
            if (node.children?.length > 0) {
                // First: recurse into children (go deeper)
                recalculateParents(node.children);

                // Then: calculate this node's status based on children
                const allChecked = node.children.every(c => c.status === STATUS.CHECKED);
                const allUnchecked = node.children.every(c => c.status === STATUS.UNCHECKED);

                if (allChecked) {
                    node.status = STATUS.CHECKED;
                } else if (allUnchecked) {
                    node.status = STATUS.UNCHECKED;
                } else {
                    node.status = STATUS.INDETERMINATE;
                }
            }
        }
    }

    // Main function called when checkbox is clicked
    function updateCheckbox(checkboxId, newStatus) {
        // 1. Deep clone the data
        let dataCopy = JSON.parse(JSON.stringify(data));

        // 2. Find and toggle the clicked node + its descendants
        dataCopy.forEach((node) => {
            toggle(node, checkboxId, newStatus);
        });

        // 3. Recalculate all parent statuses (bottom-up)
        recalculateParents(dataCopy);

        // 4. Update state
        setData(dataCopy);
    }

    return (
        <div className='containe-recursive'>
            {data.map((checkboxData) => {
                return (
                    <Checkbox
                        key={checkboxData.id}
                        checkboxData={checkboxData}
                        updateCheckbox={updateCheckbox}
                    />
                );
            })}
        </div>
    );
}

export default Recursive;