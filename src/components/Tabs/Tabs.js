import React, {useState} from "react";
import {TabsNav, TabsList, TabItem, TabButton} from './Tabs.styled'

const Tabs = ({defaultActiveKey, children}) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    return (
        <>
            <TabsNav>
                <TabsList>
                    {React.Children.map(children, child => (
                        <TabItem key={child.props.eventKey}>
                            <TabButton
                                className={child.props.eventKey === activeKey ? 'active' : ''}
                                disabled={child.props.disabled}
                                onClick={() => !child.props.disabled && setActiveKey(child.props.eventKey)}
                            >
                                {child.props.title}
                            </TabButton>
                        </TabItem>
                    ))}
                </TabsList>
            </TabsNav>

            <div>
                {React.Children.map(children, child => (
                    child.props.eventKey === activeKey ? child.props.children : null
                ))}
            </div>
        </>
    )
}

export default Tabs;