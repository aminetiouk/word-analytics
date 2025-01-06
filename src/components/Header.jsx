import { Background } from './Background';

export function Header() {
  return (
    <header>
      <Background />
      <h1 className="header-title">
        <span>word</span>analytics
      </h1>
    </header>
  );
}
