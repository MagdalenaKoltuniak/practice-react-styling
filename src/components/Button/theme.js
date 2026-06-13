const buttonSettings = {
    color: {
        primary: {
            color: '#fff',
            bg: '#007bff',
            border: '#007bff',

            active: {
                bg: '#0062cc',
                border: '#005cbf',
                boxShadow: '0 0 0 3.2px rgba(38, 143, 255, .5)',
                outlineColor: 'rgb(255, 255, 255)',
                outlineStyle: 'none',
                outlineWidth: '0px',
            },
            disabled: {
                opacity: 0.65,
            }
        },
        secondary: {
            color: '#fff',
            bg: '#5a6268',
            border: '#5a6268',

            active: {
                bg: '#545b62',
                border: '#4e555b',
                boxShadow: '0 0 0 3.2px rgba(130, 138, 145, 0.5)',
                outlineColor: 'rgb(255, 255, 255)',
                outlineStyle: 'none',
                outlineWidth: '0px',
            },
            disabled: {
                opacity: 0.65,
            }
        },
    },
    size: {
        lg: {
            fontSize: '20px',
            padding: '8px 16px',
            borderRadius: '4.8px'
        },
        sm: {
            fontSize: '14px',
            padding: '4px 8px',
            borderRadius: '3.2px'
        }
    }
};

export default buttonSettings;