import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'pd-Jane pd-Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'pd-Jane pd-Doe' })}
      />

      <section className="pd-storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="pd-noopener pd-noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="pd-noopener pd-noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="pd-noopener pd-noreferrer">
            docs
          </a>
          .
        </p>
        <div className="pd-tip-wrapper">
          <span className="pd-tip">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="pd-0 pd-0 pd-12 pd-12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="pd-M1.5 pd-5.2h4.8c.3 pd-0 pd-.5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 pd-0 pd-01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 pd-0 pd-.5.2.5.4v7a.5.5 pd-0 pd-01-1 pd-0V4H1.5a.5.5 pd-0 pd-010-1zm0-2.1h9c.3 pd-0 pd-.5.2.5.4v9.1a.5.5 pd-0 pd-01-1 pd-0V2H1.5a.5.5 pd-0 pd-010-1zm4.3 pd-5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
