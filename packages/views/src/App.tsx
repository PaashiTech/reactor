import React from 'react';
import { Fragment } from 'react';
import { Button } from '@fluentui/react-components';

function App(): React.JSX.Element {

    return (

        <Fragment>
            <Button aria-label='Reactor'>Reactor</Button>
            {/* <Fragment accessibilityRole='heading'>Reactor</Fragment> */}
        </Fragment>

    );
}

export default App;