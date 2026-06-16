import React from 'react';
import { BreadcrumbListItem } from './Breadcrumb.styled';

const BreadcrumbItem = ({active = false, children, href}) => {
    if(active){
        return (
            <BreadcrumbListItem className="active">
                {children}
            </BreadcrumbListItem>
        )
    }

    return (
        <BreadcrumbListItem>
            <a href={href}>{children}</a>
        </BreadcrumbListItem>
    )
}

export default BreadcrumbItem;