import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="pd-storybook-header">
      <div>
        <svg width="32" height="32" viewBox="pd-0 pd-0 pd-32 pd-32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="pd-M10 pd-0h12a10 pd-10 pd-0 pd-0110 pd-10v12a10 pd-10 pd-0 pd-01-10 pd-10H10A10 pd-10 pd-0 pd-010 pd-22V10A10 pd-10 pd-0 pd-0110 pd-0z"
              fill="#FFF"
            />
            <path
              d="pd-M5.3 pd-10.6l10.4 pd-6v11.1l-10.4-6v-11zm11.4-6.2l9.7 pd-5.5-9.7 pd-5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="pd-M27.2 pd-10.6v11.2l-10.5 pd-6V16.5l10.5-6zM15.7 pd-4.4v11L6 pd-10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="pd-welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="pd-Log pd-out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="pd-Log pd-in" />
            <Button primary size="small" onClick={onCreateAccount} label="pd-Sign pd-up" />
          </>
        )}
      </div>
    </div>
  </header>
);
