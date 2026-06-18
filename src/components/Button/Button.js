import React from 'react';

import { StyledButton } from './Button.styled';

const Button = ({ variant, size, active, disabled, children, $padding, $fontSize }) => {
	return (
		<StyledButton variant={variant} size={size} active={active} disabled={disabled} $padding={$padding} $fontSize={$fontSize}>
			{children}
		</StyledButton>
	);
};

export default Button;
