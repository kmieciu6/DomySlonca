import { useEffect, useState } from 'react';
import classNames from 'classnames';

const MyComponent = () => {
    const [playAnimation, setPlayAnimation] = useState(false);

    // This will run one time after the component mounts
    useEffect(() => {
        const onPageLoad = () => {
            setPlayAnimation(true);
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        <div
            className={classNames('myComponentClass', { myAnimation: playAnimation })}
        />
    );
};

export default MyComponent;