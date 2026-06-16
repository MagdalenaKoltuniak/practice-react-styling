import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbNav, BreadcrumbList } from './Breadcrumb.styled';

const Breadcrumb = ({children}) => {
    return (
        <BreadcrumbNav>
            <BreadcrumbList>
                {children}
            </BreadcrumbList>
        </BreadcrumbNav>
    )
}

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
});