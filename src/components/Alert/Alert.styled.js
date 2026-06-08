import styled from 'styled-components';

const defaultTheme = {
	color: '#000',
	bg: '#f8f9fa',
	border: '#dcdcdc',
};

const StyledAlert = styled.div`
	display: block;
	border-radius: 4px;
	color: var(--color-alfa);
	padding: 12px 16px;

	${({ theme, variant }) => {
		const themeVariant = theme?.[variant];
		const final = themeVariant || defaultTheme;

		return `
            --color-alfa: ${final.color};
            background-color: ${final.bg};
	        border: 1px solid ${final.border};
        `;
	}}
`;

export { StyledAlert };