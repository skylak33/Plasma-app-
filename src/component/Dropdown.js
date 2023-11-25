import React from 'react'
import { IconEdit } from '@salutejs/plasma-icons';
import { IconCopy } from '@salutejs/plasma-icons';
import { IconTrash } from '@salutejs/plasma-icons';
import { Button } from '@salutejs/plasma-ui';
export default function Dropdown() {
    return (
        <div style={{ height:"350px", display: 'block' }}>
            <Dropdown
                id="example-dropdown-click"
                items={[
                    { value: 'edit', label: 'Редактировать', contentLeft: <IconEdit color="inherit" /> },
                    { value: 'copy', label: 'Копировать', contentLeft: <IconCopy color="inherit" />, isDisabled: true },
                    { value: 'delete', label: 'Удалить', contentLeft: <IconTrash color="inherit" />, color: "critical" }
                ]}
                trigger="click"
                onItemSelect={(item) => console.log(item)}
            >
                <Button text="Опции" />
            </Dropdown>
        </div>
    );
}
