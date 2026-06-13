import React from 'react';
import { ThemeProvider } from 'styled-components';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';
import buttonSettings from '../src/components/Button/theme';

const Task02 = () => {
	return (
		<Row>
			<Col>
				<RBButton variant='primary' size='lg'>
					Button!
				</RBButton>
			</Col>
			<Col>
				<ThemeProvider theme={buttonSettings}>
					<Button variant='primary' size='lg'>
						Button!
					</Button>
				</ThemeProvider>
			</Col>
		</Row>
	);
};

export default Task02;

