import styled from 'styled-components';

const defaultColor = {
	color: '#000',
	bg: '#f8f9fa',
	border: '#dcdcdc',
};

const defaultSize = {
	fontSize: '14px',
	padding: '5px 10px',
	borderRadius: '5px',
};

const defaultActive = {
	bg: '#e2e6ea',
	border: '#dae0e5',
	boxShadow: 'none',
	outlineColor: 'transparent',
	outlineStyle: 'none',
	outlineWidth: '0px',
};

const defaultDisabled = {
	opacity: 0.65,
};

const getActiveStyles = ({ theme, variant, disabled }) => {
	if (disabled) return '';
	const activeTheme = theme?.color?.[variant]?.active || defaultActive;

	return `
			background-color: ${activeTheme.bg};
	        border: 1px solid ${activeTheme.border};
			box-shadow: ${activeTheme.boxShadow};
			outline-color: ${activeTheme.outlineColor};
			outline-style: ${activeTheme.outlineStyle};
			outline-width: ${activeTheme.outlineWidth};
		`;
};

const StyledButton = styled.button`
	${({ theme, variant, size, $padding, $fontSize }) => {
		const variantTheme = theme?.color?.[variant] || defaultColor;
		const sizeTheme = theme?.size?.[size] || defaultSize;

		return `
            color: ${variantTheme.color};
            background-color: ${variantTheme.bg};
	        border: 1px solid ${variantTheme.border};
            font-size: ${$fontSize || sizeTheme.fontSize};
            padding: ${$padding || sizeTheme.padding};
            border-radius: ${sizeTheme.borderRadius};
        `;
	}}

	${({ theme, variant, active, disabled }) => {
		if (!active) return '';
		return getActiveStyles({ theme, variant, disabled });
	}}

	&:active,
	&:focus {
		${({ theme, variant, disabled }) => {
			if (disabled) return '';
			return getActiveStyles({ theme, variant, disabled });
		}}
	}

	&:disabled {
		${({ theme, variant }) => {
			const disabledTheme = theme?.color?.[variant]?.disabled || defaultDisabled;

			return `
			opacity: ${disabledTheme.opacity};
		`;
		}}
	}
`;

export { StyledButton };
