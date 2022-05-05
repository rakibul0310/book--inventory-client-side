import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className='mt-3 md:mt-0 mx-4'
                style={{
                    textDecoration: match ? "underline" : "none",
                    color: match ? "#FDC300" : "white",
                    fontWeight: match ? 500 : 400
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;