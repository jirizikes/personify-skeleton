import React, { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        className="bg-text"
        style={{
          zIndex: 10,
        }}
      >
        <header>
          <div className="" style={{ height: '100vh' }}>
            <div className="h-50 w-100" style={{ background: '#5465FF' }}>
              <div className="d-flex align-items-center h-100">
                <div className="container fluid">
                  <div className="row justify-content-sm-center text-center py-10">
                    <h1 style={{ color: 'white', fontSize: '5em' }}>
                      Personify
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="h-50 w-100 d-inline-block"
              style={{ background: '#BFD7FF' }}
            >
              <div className="bd-highlight mb-3 d-flex justify-content-center ">
                <div className="container fluid">{children}</div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
